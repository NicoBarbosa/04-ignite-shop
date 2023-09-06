import Image from "next/image";
import { HeaderContainer } from "./header";
import { Handbag } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { CartViewModal } from '@/components/CartViewModal';
import logoImg from '../../assets/logo.svg'
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";


export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <Handbag weight='bold'/>
            {cart.length > 0 ? <span>{cart.length}</span> : ''}
          </button>
        </Dialog.Trigger>
        
        <CartViewModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}