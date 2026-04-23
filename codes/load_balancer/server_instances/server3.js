import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3003;

app.use(cors());

app.get('/', (req, res) => {
    console.log('Received request on Server 3');
    res.send('Hello from Server 3!');
});

app.get('/orders', (req, res) => {
    console.log('Received request on Server 3');
    res.send('this is orders route xoxo');
});

app.listen(PORT, () => {
    console.log(`Server 3 is running on port ${PORT}`);
});