import { useState } from 'react';
import './index.css';

function App() {
  const [portalAbierto, setPortalAbierto] = useState(false);

  const activarMagia = () => {
    const audio = new Audio('/public/sonido-magico-10s.mp3');
    audio.play();
    setPortalAbierto(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5%' }}>
      {!portalAbierto ? (
        <>
          <h1 style={{ color: '#fff' }}>Bienvenida al Reino Secreto</h1>
          <img
            src="/public/puerta-magica.png"
            alt="Puerta mágica"
            onClick={activarMagia}
            style={{ width: '300px', cursor: 'pointer', transition: 'transform 1s' }}
          />
        </>
      ) : (
        <>
          <h2 style={{ color: '#fff' }}>Has entrado en la Biblioteca de los Secretos</h2>
          <img
            src="/public/pasillo-biblioteca.png"
            alt="Pasillo mágico"
            style={{ width: '90%', marginTop: '20px' }}
          />
        </>
      )}
    </div>
  );
}

export default App;
