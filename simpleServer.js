// Otetaan käyttöön web-palvelinkirjasto http
const http = require('http');

// Määritellään palvelin joka käyttää argumentteina pyyntöä ja vastausta
http.createServer((req, res) =>{

  // Luetaan pyynnön tyyppi ja url ja näytetään ne konsolissa
  let method = req.method
  let url = req.url
  console.log('Pyytö oli ', method, 'ja url ',  url)

  // Muodostetaan HTTP-otsake
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Lähetetään sivun sisältö ja suljetaan yhteys
  res.end('Tervetuloa NODE-palvelimeen!');

// Asetetaan palvelin kuuntelemaan TCP-porttia 8080
}).listen(8080);