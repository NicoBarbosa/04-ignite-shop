import { ButtonAdd, HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import Head from "next/head";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Handbag } from '@phosphor-icons/react';
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    defaultPriceId: string,
    priceAsNumber: number,
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  
  const { addCartItem, cart } = useContext(CartContext)

  function handleAddItemToCart(id: string) {
    const productId = products.find((item) => item.id === id)

    addCartItem(productId)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          const productIndex = cart.findIndex((item) => item.id === product.id)
          const productAlredyInCart = productIndex >= 0 ? true : false
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link  href={`/product/${product.id}`} prefetch={false}> 
                  <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>
                  <footer>
                    <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                    <ButtonAdd 
                      disabled={productAlredyInCart} 
                      onClick={() => handleAddItemToCart(product.id)}>
                      <Handbag weight="bold"/>
                    </ButtonAdd>
                </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount as number / 100),
      defaultPriceId: price.id,
      priceAsNumber: price.unit_amount,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, //2 horas
  }
}