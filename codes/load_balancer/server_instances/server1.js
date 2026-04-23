import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/', (req, res) => {
    console.log('Received request on Server 1');
    res.send('Hello from Server 1!');
});

app.listen(PORT, () => {
    console.log(`Server 1 is running on port ${PORT}`);
});