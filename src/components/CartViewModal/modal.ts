import { styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  boxSizing: 'border-box',

  width: '100%',
  height: '100vh',
  maxWidth: 480,
  backgroundColor: '$gray800',

  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',

  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: '4.5rem 3rem 3rem 3rem',

  color: '$gray100',
})

export const ContentContainer = styled('section', {
  width: '100%',
  height: '100%',
  overflow: 'scroll',
})

export const Title = styled(Dialog.Title, {
  fontSize: '$lg',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
})

export const CardItem = styled('div', {
  marginTop: '1.5rem',
  display: 'flex',
  gap: '1.47375rem',

  '&:last-child': {
    marginBottom: '1rem',
  }
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: '100%',
  maxWidth: '5.925rem',
  height: '5.925rem',
  borderRadius: 8,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: 1.6,
  },

  strong: {
    marginTop: '0.125rem',
    fontSize: '$md',
    color: '$gray100',
  },

  button: {
    marginTop: '0.5rem',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease-in-out',
    border: 0,
    backgroundColor: 'transparent',
    width: 'fit-content',
    
    '&:focus': {
      boxShadow: 'none',
    },

    '&:hover': {
      color: '$green300',
    }
  }
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '$xl',
  cursor: 'pointer',
  color: '$grayIcon',
  transition: 'all 0.2s ease-in-out',
  borderRadius: 4,

  display: 'flex',

  '&:hover': {
    color: '$gray100',
  },
})

export const EmptyItems = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const Footer = styled('footer', {
  marginTop: 'auto',
  width: '100%',
  lineHeight: 1.6,

  section: {
    display: 'flex',
    width: '100%',   
    justifyContent: 'space-between',
    marginBottom: '3.5625rem',

    div: {
      display: 'flex',
      flexDirection: 'column',
      color: '$gray100',

      span: {
        fontSize: '1rem',
      },

      strong: {
        fontSize: '$md',
      },

      '&:nth-child(1)': {
        strong: {
          marginTop: 'auto'
        }
      },

      '&:nth-child(2)': {
        span: {
          color: '$gray300',
          textAlign: 'right',
        },
        
        strong: {
          fontSize: '$xl',
        }
      }
    }
  },

  button: {
    width: '100%',
    backgroundColor: '$green500',
    border: 'none',
    borderRadius: 8,
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    padding: '1.25rem 0',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundColor: '$green300',
    }
  }
})