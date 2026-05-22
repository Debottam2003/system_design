import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

await redisClient.connect();

await redisClient.lPush("myList", "value1");
await redisClient.lPush("myList", "value2");
await redisClient.rPush("myList", "value3");

const listItems = await redisClient.lRange("myList", 0, -1);
console.log("List Items:", listItems);

const listLength = await redisClient.lLen("myList");
console.log("List Length:", listLength);

await redisClient.quit();
