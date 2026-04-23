import express from 'express';
const app = express();
const PORT = 8888;

// user endpoint
app.get('/api/users', async (req, res) => {
    console.log("Received request for /api/users");
    let response = await fetch('http://localhost:3331/users');
    let data = await response.text();
    res.send(data);
});
// order endoint
app.post('/api/orders', async (req, res) => {
    let response = await fetch('http://localhost:3332/orders', {
        method: 'POST',
    });
    let data = await response.text();
    res.send(data);
});
// catalog endoint
app.get('/api/catalogs', async (req, res) => {
    let resposne = await fetch('http://localhost:3333/catalogs');
    let data = await resposne.text();
    res.send(data);
});
// payment endoint
app.post('/api/payments', async (req, res) => {
    let response = await fetch('http://localhost:3334/payments', {
        method: 'POST',
    });
    let data = await response.text();
    res.send(data);
});

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Monolithic API running on http://localhost:${PORT}`);
});