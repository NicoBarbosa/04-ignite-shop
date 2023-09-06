import { globalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Container } from '@/styles/pages/app';

import { CartProvider } from '@/context/CartContext';

import { Header } from '@/components/Header';
globalStyle();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
