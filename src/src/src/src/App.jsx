import { useState } from 'react'

function App() {
  const [portalAbierto, setPortalAbierto] = useState(false)

  const activarMagia = () => {
    const audio = new Audio('/sonido-magico.mp3')
    audio.play()
    setPortalAbierto(true)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      {!portalAbierto ? (
        <>
          <h1>Invoco las Puertas del Conocimiento</h1>
          <button
            onClick={activarMagia}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              background: 'goldenrod',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 0 20px gold'
            }}
          >
            Abrir Portal
          </button>
        </>
      ) : (
        <div>
          <h2>Bienvenida, Reina Secreta 👑</h2>
          <p>Tu biblioteca mágica está en construcción...</p>
        </div>
      )}
    </div>
  )
}

export default App
