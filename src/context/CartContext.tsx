import { ReactNode, createContext, useState } from "react";

export interface CartProps {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
  priceAsNumber?: number
}

interface CartContextProps {
  cart: CartProps[]
  addCartItem: (produtct: CartProps) => void
  removeCartItem: (id: string) => void
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

  function removeCartItem(id: string) {
    const copyCart = [...cart]

    const updatedCart = copyCart.filter((item) => item.id !== id)

    setCart(updatedCart)
  }
  

  return (
    <CartContext.Provider value={{cart, addCartItem, removeCartItem}}>
      {children}
    </CartContext.Provider>
  )
}