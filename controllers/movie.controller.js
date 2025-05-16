// Import necessary modules/models
const Movie = require('../models/movie.model');


exports.findAllMovies = async (req, res) => {
  console.log("in movies------------------------",req.query.status)
  try {
    const status = req.query.status;
    if(status=='PUBLISHED') {
    const movies = await Movie.find({ published:true }); 
    
    res.status(200).json(movies);
    }else{
      const movies = await Movie.find({ released:true }); 
    
    res.status(200).json(movies);
    }
  } catch (error) {
    console.error('Error finding movies:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.findOne = async (req, res) => {
  try {
    const movieId = req.params.id; 
    const movie = await Movie.findById(movieId); 
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error('Error finding movie by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.findShows = async (req, res) => {
  try {
    const movieId = req.params.id; 
    const movie = await Movie.findById(movieId); 
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    const shows = movie.shows; 
    res.status(200).json(shows);
  } catch (error) {
    console.error('Error finding shows for movie:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
