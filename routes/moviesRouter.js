// express importieren
import express from "express";

import {
  deleteMovieController,
  getAllMoviesController,
  postMovieController,
  updateMovieController,
} from "../controllers/moviesControllers.js";

// eine Router-Instanz aus "express.Router()" erstellen

const moviesRouter = express.Router();

//
moviesRouter.get("/", getAllMoviesController);

moviesRouter.post("/", postMovieController);

moviesRouter.put("/", updateMovieController);

moviesRouter.delete("/", deleteMovieController);

export default moviesRouter;
