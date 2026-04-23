import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/users', (req, res) => {
    console.log("Received request for /users");
    res.send("users");
});

app.listen(3331, () => {
    console.log('Users service is running on port 3331');
});