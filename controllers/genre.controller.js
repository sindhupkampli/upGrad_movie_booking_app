
const Genre = require('../models/genre.model');


exports.findAllGenres = async (req, res) => {
   try {
    const genres = await Genre.find(); 
    res.status(200).json(genres);
  } catch (error) {
    console.error('Error finding genres:', error);
    res.status(500).json({ message: 'Server Encountered an error' });
  }
};
