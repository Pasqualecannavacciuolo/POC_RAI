const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


app.use((req, res, next) => {
    /*const allowedDomains = ["https://main-website-gray.vercel.app"]; // Lista di indirizzi consentiti
    const allowedDomainsString = allowedDomains.join(' ');
    res.setHeader('Content-Security-Policy', `frame-ancestors ${allowedDomainsString}`);
    next();*/
    const allowedDomain = "https://main-website-gray.vercel.app"; // Dominio consentito
    res.setHeader('Content-Security-Policy', `frame-ancestors ${allowedDomain}`);
    next();
});

// Middleware per servire i file statici dalla directory "public"
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',  (req, res) => {
    console.log("Request: ", req);
    res.sendFile(path.join(__dirname, "public", 'index.html')); // Invia il file HTML come risposta
});

app.listen(PORT, () => {
    console.log(`Server A in esecuzione su http://localhost:${PORT}`);
});
