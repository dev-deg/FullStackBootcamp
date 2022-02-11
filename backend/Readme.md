# Setting Up Backend Express Server

1. Install REST Client from VS Code Extensions

2. Setup NPM

```bash
npm init -y
```

Edit package.json and include the following to enable import syntax

```json
"type": "module",
```

3. Install Express

```bash
npm install express
```

4. Create index.js and include the following:

```js
import Express from "express";

const PORT = 3000;
const app = Express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log("Listening on Port " + PORT));
```

5. Create http.rest and include the following:

```js
GET http://localhost:3000
```

6. To run MAC: Cmd+Alt+R || PC: Ctrl+Alt+R

7. Installing cors

```bash
npm install cors
```

## NOTES

### WHAT IS AN API?

- API stands for Application Programming Interface

### WHAT IS A REST API (RESTful API)?

- REST stands for Representational State Transfer.

- A REST API is an application programming interface that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.

### HTTP Methods

- These represent CRUD operations. CRUD stands for Create, Read, Update and Delete.

GET - Fetches data
POST - Sends new data
PUT - Updates data
DELETE - Deletes data

## Class/Home Exercise

1. Register https://openweathermap.org/api_keys
2. Register https://account.mapbox.com
3. Start testing get requests in Postman/REST Client/Thunder
4. Think of a logical way how you combine the response from both APIs to determine the route from one place to another by walking/cycling (good weather) or by car (bad weather).
5. Start working on a UI that would take two inputs (longitude and latitude) || use GPS location from browser https://www.w3schools.com/html/html5_geolocation.asp
6. Output the recommanded route to the user || ...using mapbox
