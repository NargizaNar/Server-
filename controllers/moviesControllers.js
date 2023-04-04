import { moviesData } from "../model/moviesModel.js";

function getAllMoviesController(req, res) {
  res.status(200).json({
    greeting: "Hellooo von Server!!!!",
    data: moviesData,
  });
}

function postMovieController(req, res) {
  res.status(200).json({
    message: "geposted!",
  });
}

function updateMovieController(req, res) {
  res.status(200).json({
    message: "aktualisiert!",
  });
}

function deleteMovieController(req, res) {
  res.status(200).json({
    message: "gelöcht!",
  });
}

export {
  getAllMoviesController,
  postMovieController,
  updateMovieController,
  deleteMovieController,
};
