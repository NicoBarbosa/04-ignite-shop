import { ReactNode, createContext, useState } from "react";

export interface CartProps {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface CartContextProps {
  cart: CartProps[]
  addCartItem: (produtct: CartProps) => void
}

interface CartProviderType {
  children: ReactNode,
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderType) {
  const [cart, setCart] = useState<CartProps[]>([])

  function addCartItem(product: CartProps) {
    const itemAlreadyInCart = cart.find((item) => item.id === product.id)

    if (itemAlreadyInCart) return

    setCart((state) => [...state, product])
  }

  return (
    <CartContext.Provider value={{cart, addCartItem}}>
      {children}
    </CartContext.Provider>
  )
}