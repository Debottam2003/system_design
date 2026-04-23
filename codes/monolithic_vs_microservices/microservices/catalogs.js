import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/catalogs', (req, res) => {
    console.log("Received request for /catalogs");
    res.send("catalogs");
});

app.listen(3333, () => {
    console.log('Users service is running on port 3333');
});