
const Artist = require('../models/artist.model');


exports.findAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find(); 
    res.status(200).json(artists);
  } catch (error) {
    console.error('Error finding artists:', error);
    res.status(500).json({ message: 'Server encountered an error' });
  }
};
