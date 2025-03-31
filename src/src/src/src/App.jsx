import { useState } from 'react';
import './index.css';

function App() {
  const [portalAbierto, setPortalAbierto] = useState(false);
  const [mostrarSala, setMostrarSala] = useState(false);

  const activarMagia = () => {
    const audio = new Audio('/public/sonido-magico-10s.mp3');
    audio.play();
    setPortalAbierto(true);

    // Mostrar la sala 4 segundos después de abrir el portal
    setTimeout(() => {
      setMostrarSala(true);
    }, 4000);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5%' }}>
      {!portalAbierto && (
        <>
          <h1 style={{ color: '#fff' }}>Bienvenida al Reino Secreto</h1>
          <img
            src="/img/puerta-magica.png"
            alt="Puerta mágica"
            onClick={activarMagia}
            style={{
              width: '300px',
              cursor: 'pointer',
              transition: 'transform 1s',
              filter: 'drop-shadow(0 0 15px gold)',
            }}
          />
        </>
      )}

      {portalAbierto && !mostrarSala && (
        <div className="pasillo-magico">
          <img
            src="/img/pasillo-biblioteca.png"
            alt="Pasillo mágico"
            className="sala-img"
          />
        </div>
      )}

      {portalAbierto && mostrarSala && (
        <div className="sala-escritor">
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>
            Has entrado en la Biblioteca de los Secretos
          </h2>
          <img
            src="/img/sala-escritor.png"
            alt="Sala del Escritor"
            className="sala-img"
          />
        </div>
      )}
    </div>
  );
}

export default App;


