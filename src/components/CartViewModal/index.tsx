import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Title, Footer, EmptyItems, CardItem, ImageContainer, DetailsContainer, ContentContainer } from './modal'
import { FinnTheHuman, X } from '@phosphor-icons/react'
import { CartContext } from '@/context/CartContext'
import { useContext, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

export function CartViewModal() {
  const { cart, removeCartItem } = useContext(CartContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cart
      })

      const { checkoutUrl } = response.data

      console.log(checkoutUrl)

      window.location.href = checkoutUrl
    } catch (err) {
      //Conectar a uma ferramenta de OBSERVABILIDADE (DATALOG / SENTRY)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  const total = cart.reduce((total, currentValue) => {
    return total + currentValue.priceAsNumber / 100
  }, 0)

  const totalShop = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(total)

  return (
    <Dialog.Portal>
      <Content >
        <Title>Sacola de compras</Title>
        <CloseButton>
          <X weight='bold' />
        </CloseButton>
        
        <ContentContainer>
          {cart.length >= 1 ? (
            cart.map((item) => {
              return (
                <CardItem key={item.id}>
                  <ImageContainer>
                    <Image src={item.imageUrl} width={94.8} height={94.8} alt=''/>
                  </ImageContainer>
                  <DetailsContainer>
                    <h2>{item.name}</h2>
                    <strong>{item.price}</strong>
                    <button onClick={() => removeCartItem(item.id)}>Remover</button>
                  </DetailsContainer>
                </CardItem>
              )
            })
          ) : (
          <EmptyItems>
            <FinnTheHuman size={32} />
            <span>Sem nenhuma camiseta na sua sacola!</span>
          </EmptyItems>
          )}
        </ContentContainer>     

        <Footer>
          <section>
            <div>
              <span>Quantidade</span>
              <strong>Valor total</strong>
            </div>
            <div>
              <span>{cart.length} itens</span>
              <strong>{totalShop}</strong>
            </div>
          </section>
          <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
            Finalizar compra
          </button>
        </Footer>
      </Content>
    </Dialog.Portal>
  )
}