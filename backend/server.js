const express = require('express');
const app = express();
const db = require("./app/models");

// Middleware
app.use(express.json());

// Require routes
const movieRoutes = require('./routes/movie.routes');
const userRoutes = require('./routes/user.routes');
const artistRoutes = require('./routes/artist.routes');
const genreRoutes = require('./routes/genre.routes');

// Routes
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);
app.use('/artists', artistRoutes);
app.use('/genres', genreRoutes);

// Database connection setup
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
