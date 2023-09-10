import { stripe } from "@/lib/stripe";
import { ImageContainer, ImageListContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  customerName: string
  purchasedItems: {
    id: string
    imageUrl: string
    quantity: number
  }[]
}

export default function Success({ customerName, purchasedItems }: SuccessProps) {

  const quantity = purchasedItems.reduce((acc, current) => acc + current.quantity, 0)

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite</title>
        
        <meta name="robots" content="noindex"/>
      </Head>
    
      <SuccessContainer>

        <ImageListContainer>
          {
            purchasedItems.map((item) => {
              return (
                <ImageContainer key={item.id}>
                  <Image src={item.imageUrl} width={130} height={132} alt="" />
                </ImageContainer>
              )
            })
          }
        </ImageListContainer>
        
        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, 
          sua compra de {quantity} {quantity > 1 ? 'camisetas' : 'camiseta'} já está a caminho da sua casa. 
        </p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name

  const purchasedItems = session.line_items.data.map((product, index) => {
    const productImage = session.line_items.data[index].price.product as Stripe.Product
    return {
      id: product.id,
      imageUrl: productImage.images[0],
      quantity: product.quantity,
    }
  })

  return {
    props: {
      customerName,
      purchasedItems,
    }
  }
}