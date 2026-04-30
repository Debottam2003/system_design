import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/orders', (req, res) => {
    console.log("Received request for /orders");
    console.log("Request body:", req.body);
    res.send("orders");
});

app.listen(3332, () => {
    console.log('Users service is running on port 3332');
});