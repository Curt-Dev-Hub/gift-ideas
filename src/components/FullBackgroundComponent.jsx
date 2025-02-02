
export const FullBackgroundComponent = ({image, children}) => {
    
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'auto',
        objectFit: 'cover'
      }}>
        { children }
    </div>
  )
}
