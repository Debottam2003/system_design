import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/payments', (req, res) => {
    console.log("Received request for /payments");
    console.log("Request body:", req.body);
    res.send("payments");
});

app.listen(3334, () => {
    console.log('Payments service is running on port 3334');
});