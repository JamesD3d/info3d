import { useState, useEffect } from 'react';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
    }
  };

  if (!deferredPrompt) return null;

  return (
    <button
      onClick={handleInstall}
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        backgroundColor: '#fb923c',
        color: '#fff',
        padding: '10px 16px',
        borderRadius: '12px',
        border: 'none',
        fontWeight: 'bold',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        zIndex: 1000
      }}
    >
      📦 Install 3D Info App
    </button>
  );
}
