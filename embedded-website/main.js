const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


app.use((req, res, next) => {
    const allowedDomains = ["http://127.0.0.1:5500"]; // Lista di indirizzi consentiti
    const allowedDomainsString = allowedDomains.join(' ');
    res.setHeader('Content-Security-Policy', `frame-ancestors ${allowedDomainsString}`);
    next();
});

// Middleware per servire i file statici dalla directory "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rotta per il contenuto da incorporare in iframe
app.get('/contenuto',  (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Invia il file HTML come risposta
});

app.listen(PORT, () => {
    console.log(`Server A in esecuzione su http://localhost:${PORT}`);
});
