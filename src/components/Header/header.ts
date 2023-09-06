import { styled } from "@/styles/stitches.config"

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    fontSize: '1.5rem',
    padding: '0.75rem',
    borderRadius: 6,
    border: 'none',
    boxSizing: 'border-box',
    color: '$grayIcon',
    backgroundColor: '$gray800',
    cursor: 'pointer',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color 0.2s ease-in-out',
    position: 'relative',


    '&:hover': {
      color: '$gray300',
    },

    span: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      boxSizing: 'border-box',

      backgroundColor: '$green500',
      color: '$white',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      border: '3px solid $gray900',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.75rem',
      borderRadius: '999px',
      width: '1.25rem',
      height: '1.2rem',
    }
  }
})