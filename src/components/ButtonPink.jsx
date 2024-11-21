
import Button from 'react-bootstrap/Button';

function ButtonPink({ children, text }) {
  return (
    <Button className='button-pink' size='lg' href="#" style={{ 
      background: "#af1d7bbd", 
      display: "inline-block", 
      padding: "10px", 
      fontSize: "4rem", 
      marginTop: "30px",
      boxShadow: "6px 6px #0d0a2654",
      border: "1px solid black"
        }}>
          { children }
          { text }
    </Button>   
  )
}

export default ButtonPink