import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.post('/payaments', (req, res) => {
    console.log("Received request for /payments");
    res.send("payaments");
});

app.listen(3334, () => {
    console.log('Users service is running on port 3334');
});