/*
# WIE ESTELLE ICH EIN SERVER MIT EXPRESS VON NULL

## Schritte

1. server.js Datei erstellen

2. Was brauche ich um ein Express-Server zu erstellen?
   - npm initialisieren (`npm init`) um `package.json` Datei zu erstellen
   - packages installieren
     - express als `normale` dependency installieren (`npm i express`)
     - nodemon als `dev Dependency` installieren (`npm i --save-dev nodemon`)
3. bearbeiten wir unser `start` Befehl in `scripts` in package.json Datei

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
```

4. Fügen wir "type: Module" in `package.json` Datei um `ES6 import Statements` zu verwenden zu können.

```js
"type":"module", 
```*/
// express in server.js Datei importieren.
import express from "express";

//import { moviesData } from "./model/moviesModel.js";

// Routes

import moviesRouter from "./routes/moviesRouter.js";

//controllers
// import {
//   deleteMovieController,
//   getAllMoviesController,
//   postMovieController,
//   updateMovieController,
// } from "./controllers/moviesControllers.js";

//express in server.js Datei importieren.
const app = express();
//port Nummer in ein variabeln speichern
const port = 5030;
// const moviesData = [
//   {
//     id: 0,
//     title: "balalalalbla",
//   },
// ];
app.get("/", (req, res) => {
  res.status(200).json({
    greeting: "Hellooo von Server Home!!!!",
  });
});


//app.get("/", getAllMoviesController);

// mit Router
app.use("/movies", moviesRouter);
//
// app.post("/movies", (req, res) => {
//   res.status(200).json({
//     message: "geposted!",
//   });
// });

// app.post("/movies", postMovieController);

//
// app.put("/movies", (req, res) => {
//   res.status(200).json({
//     message: "aktualisiert!",
//   });
// });
//
// app.put("/movies", updateMovieController);

//
// app.delete("/movies", (req, res) => {
//   res.status(200).json({
//     message: "gelöcht!",
//   });
// });
//
// app.delete("/movies", deleteMovieController);

//wir rufen ein `listen Method` auf unser App auf mit Portnummer und Callback Funktion als Argumente
//app.listen(PortNummer, Callback-Funktion)
app.listen(port, () => {
  console.log(`Port läuft auf Port: ${port}`);
});


//Wir starten unser Server mit `npm start`. Unser Terminal sieht ungfähr so aus;
// We get in Terminal: Port läuft auf Port: 5050


//schicke immer ein `res.json()` zurück!
//Weil es einfach ist mit zu arbeiten in Frontend!
//Füge auch wenn möglich, ein status code `res.status("code")`