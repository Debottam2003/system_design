import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

await redisClient.connect();

await redisClient.hSet("user:100", {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
});

let userData = await redisClient.hGetAll("user:100");
console.log(userData);
console.log("User Name:", userData.name);
console.log("User Email:", userData.email);
console.log("User Age:", Number(userData.age));

let name = await redisClient.hGet("user:100", "name");
console.log("User Name:", name);

await redisClient.quit();
