// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const store = {
//   "/catalogs": "http://localhost:3333",
//   "/users": "http://localhost:3331",
//   "/orders": "http://localhost:3332",
//   "/payments": "http://localhost:3334",
// };

// app.use(async (req, res) => {
//   console.log("Received request");
//   console.log(req.url);
//   console.log(req.method);
//   // console.log(req.headers);
//   console.log(req.headers["content-type"]);
//   if (req.url.startsWith("/catalogs")) {
//     let response = await fetch(`${store["/catalogs"]}${req.url}`, {
//       method: req.method,
//       headers: {
//         "Content-Type": req.headers["content-type"] || "application/json",
//       },
//       body: req.method === "GET" ? null : JSON.stringify(req.body),
//     });
//     // console.log(response);
//     if (!response.ok) {
//       res.set("Content-Type", "text/html");
//       res.status(response.status);
//       res.send(response.statusText);
//     } else {
//       res.set("Content-Type", "text/html");
//       res.status(response.status);
//       let data = await response.text();
//       res.send(data);
//     }
//   } else if (req.url.startsWith("/users")) {
//     let response = await fetch(`${store["/users"]}${req.url}`, {
//       method: req.method,
//       headers: {
//         "Content-Type": req.headers["content-type"] || "application/json",
//       },
//       body: req.method === "GET" ? null : JSON.stringify(req.body),
//     });
//     // console.log(response);
//     if (!response.ok) {
//       res.set("Content-Type", "text/html");
//       res.status(response.status);
//       res.send(response.statusText);
//     } else {
//       res.set("Content-Type", "text/html");
//       res.status(response.status);
//       let data = await response.text();
//       res.send(data);
//     }
//   } else if (req.url.startsWith("/orders")) {
//     console.log(req.body);
//     console.log(req.url);
//     console.log(req.method);
//     let response = await fetch(`${store["/orders"]}${req.url}`, {
//       method: req.method,
//       headers: {
//         "Content-Type": req.headers["content-type"] || "application/json",
//       },
//       body: req.method === "GET" ? null : JSON.stringify(req.body),
//     });
//     // console.log(response);
//     if (!response.ok) {
//       res.set("Content-Type", "text/html");
//       res.status(response.status);
//       res.send(response.statusText);
//     } else {
//       res.set("Content-Type", "text/html");
//       res.status(response.status);
//       let data = await response.text();
//       res.send(data);
//     }
//   } else if (req.url.startsWith("/payments")) {
//     console.log(req.body);
//     console.log(req.url);
//     console.log(req.method);
//     let response = await fetch(`${store["/payments"]}${req.url}`, {
//       method: req.method,
//       headers: {
//         "Content-Type": req.headers["content-type"] || "application/json",
//       },
//       body: req.method === "GET" ? null : JSON.stringify(req.body),
//     });
//     // console.log(response);
//     if (!response.ok) {
//       res.set("Content-Type", "text/html");
//       res.status(response.status);
//       res.send(response.statusText);
//     } else {
//       res.set("Content-Type", "text/html");
//       res.status(response.status);
//       let data = await response.text();
//       res.send(data);
//     }
//   } else {
//     res.set("Content-Type", "text/html");
//     res.status(404);
//     res.send("404 Not Found");
//   }
// });

// app.listen(8080, () => {
//   console.log("Server is running on http://localhost:8080");
// });

//---------------------------------------------------------MODULAR CODE---------------------------------------------------------

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const store = {
  "/catalogs": "http://localhost:3333",
  "/users": "http://localhost:3331",
  "/orders": "http://localhost:3332",
  "/payments": "http://localhost:3334",
};

async function handleRequest(req, res, url) {
  // console.log(req.body);
  // console.log(req.url);
  // console.log(req.method);
  // console.log(req.headers);
  let response = await fetch(`${store[url]}${req.url}`, {
    method: req.method,
    headers: {
      "Content-Type": req.headers["content-type"] || "application/json",
    },
    body: req.method === "GET" ? null : JSON.stringify(req.body),
  });
  // console.log(response);
  if (!response.ok) {
    res.set("Content-Type", "text/html");
    res.status(response.status);
    res.send(response.statusText);
  } else {
    res.set("Content-Type", "text/html");
    res.status(response.status);
    let data = await response.text();
    res.send(data);
  }
}

app.use(async (req, res) => {
  if (req.url.startsWith("/catalogs")) {
    try {
      await handleRequest(req, res, "/catalogs");
    } catch (error) {
      console.error("Error handling /catalogs request:", error);
      res.set("Content-Type", "text/html");
      res.status(500);
      res.send("Internal Server Error");
    }
  } else if (req.url.startsWith("/users")) {
    try {
      await handleRequest(req, res, "/users");
    } catch (error) {
      console.error("Error handling /users request:", error);
      res.set("Content-Type", "text/html");
      res.status(500);
      res.send("Internal Server Error");
    }
  } else if (req.url.startsWith("/orders")) {
    try {
      await handleRequest(req, res, "/orders");
    } catch (error) {
      console.error("Error handling /orders request:", error);
      res.set("Content-Type", "text/html");
      res.status(500);
      res.send("Internal Server Error");
    }
  } else if (req.url.startsWith("/payments")) {
    try {
      await handleRequest(req, res, "/payments");
    } catch (error) {
      console.error("Error handling /payments request:", error);
      res.set("Content-Type", "text/html");
      res.status(500);
      res.send("Internal Server Error");
    }
  } else {
    res.set("Content-Type", "text/html");
    res.status(404);
    res.send("404 Not Found");
  }
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
