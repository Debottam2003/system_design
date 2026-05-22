import { createClient } from "redis";

const client = createClient({
  url: "redis://localhost:6379",
});

client.on("error", (err) => console.error("Redis Error:", err));

async function start() {
  await client.connect();
  console.log("Connected to Redis!");
  // test
  await client.set("name", "Alice");
  let value = await client.get("name");
  console.log("Value:", value);
  await client.del("name");
  value = await client.get("name");
  console.log("Value:", value);

  

  await client.quit();
}

start();
