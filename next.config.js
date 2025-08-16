/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // --- NUOVO DOMINIO AUTORIZZATO ---
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
// Questo file rappresenta la configurazione di Next.js per il progetto MindEveLoop.
// Include le impostazioni per le immagini remote, autorizzando i domini specificati.
// In questo caso, è stato aggiunto un nuovo dominio 'via.placeholder.com' per le immagini di segnaposto.