import { styled } from "@stitches/react";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  boxSizing: 'border-box',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  
  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    display: 'block',
    marginTop: '1rem',
    color: '$green300',
    fontSize: '$2xl',
  },

  p : {
    color: '$gray300',
    lineHeight: 1.6,
    marginTop: '2.5rem',
    fontSize: '$md',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontSize: '$md',
    fontWeight: 'bold',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
      transition: 'all 0.2s ease-in-out',
    }
  }
})