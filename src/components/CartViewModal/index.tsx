import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Title, Footer, EmptyItems } from './modal'
import { FinnTheHuman, X } from '@phosphor-icons/react'
import { CartContext } from '@/context/CartContext'
import { useContext, useState } from 'react'
import axios from 'axios'

export function CartViewModal() {
  const { cart } = useContext(CartContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cart
      })

      const { checkoutUrl } = response.data

      console.log(checkoutUrl)

      // window.location.href = checkoutUrl
    } catch (err) {
      //Conectar a uma ferramenta de OBSERVABILIDADE (DATALOG / SENTRY)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }
  return (
    <Dialog.Portal>
      <Content >
        <Title>Sacola de compras</Title>
        <CloseButton>
          <X weight='bold' />
        </CloseButton>

        {cart.length >= 1 ? '' : (
        <EmptyItems>
          <FinnTheHuman size={32} />
          <span>Sem nenhuma camiseta na sua sacola!</span>
        </EmptyItems>
        )}        

        <Footer>
          <section>
            <div>
              <span>Quantidade</span>
              <strong>Valor total</strong>
            </div>
            <div>
              <span>3 itens</span>
              <strong>R$ 270,00</strong>
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