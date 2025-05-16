
const Genre = require('../models/genre.model');


exports.findAllGenres = async (req, res) => {
  console.log("--------------------")
  try {
    const genres = await Genre.find(); 
    res.status(200).json(genres);
  } catch (error) {
    console.error('Error finding genres:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
