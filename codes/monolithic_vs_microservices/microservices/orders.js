import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.post('/orders', (req, res) => {
    console.log("Received request for /orders");
    res.send("orders");
});

app.listen(3332, () => {
    console.log('Users service is running on port 3332');
});