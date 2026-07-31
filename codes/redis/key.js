import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

await redisClient.connect();

await redisClient.set("user:1", JSON.stringify({ name: "Alice", age: 22 }));

let user = await redisClient.get("user:1");

console.log(typeof user, user);
user = JSON.parse(user);
console.log(user);
console.log(user.name);
console.log(user.age);

await redisClient.json.set("user:1", "$", {
  name: "Alice",
  age: 22,
  address: {
    city: "Kolkata",
    pin: 700001,
  },
});

user = await redisClient.json.get("user:1");
console.log(user);

await redisClient.json.set(
  "user:1",
  "$.address.city",
  "Delhi"
);

const city = await redisClient.json.get(
  "user:1",
  {
    path: "$.address.city",
  }
);
console.log(city);

await redisClient.quit();
