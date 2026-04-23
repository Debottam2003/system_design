import express from 'express';
const app = express();
const PORT = 3333;

// user endpoint
app.get('/api/users', (req, res) => {
    res.send("users");
});
// order endoint
app.post('/api/orders', (req, res) => {
    res.send("orders");
});
// catalog endoint
app.get('/api/catalogs', (req, res) => {
    res.send("catalogs");
});
// payment endoint
app.post('/api/payments', (req, res) => {
    res.send("payments");
});

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Monolithic API running on http://localhost:${PORT}`);
});