import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3002;

app.use(cors());

app.get('/', (req, res) => {
    console.log('Received request on Server 2');
    res.send('Hello from Server 2!');
});

app.listen(PORT, () => {
    console.log(`Server 2 is running on port ${PORT}`);
});