import express from 'express';
import cors from 'cors';
import fs from 'node:fs/promises';

let data = await fs.readFile('./config.json', 'utf-8');
data = JSON.parse(data);
let list = [...data];
list.shift();

let i = 0;

function round_robin() {
    i = i % list.length;
    let val = i;
    i++;
    return list[val];
}

function ip_hashing(ip) {
    let sum = 0;
    let octate_arr = ip.split(".");
    for (let i of octate_arr) {
        sum = sum + Number(i);
    }
    let val = sum % list.length;
    return list[val];
}

const app = express();
const PORT = 8888;

app.use(cors());

app.use(async (req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
    // let ip = req.headers.host.split(":")[0];
    console.log('Received request on LB');
    let method = req.method;
    let url = req.url;
    let ip = req.ip.replace('::ffff:', '');
    // console.log(ip);
    let instance = 0;

    if (data[0] === "round_robin") {
        instance = round_robin();
    } else if (data[0] === "ip_hashing") {
        instance = ip_hashing(ip);
    }

    let response = await fetch(`http://${instance.ip}:${instance.port}${url}`, {
        method: method,
    });

    const contentType = response.headers.get('content-type');

    res.status(response.status);

    if (contentType) {
        res.set('Content-Type', contentType);
    }

    if (contentType?.includes('application/json')) {
        res.json(await response.json());
    } else {
        res.send(await response.text());
    }
});

app.listen(PORT, () => {
    console.log(`LB is running on port ${PORT}`);
});