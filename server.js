const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const APIRoutes = require('./routes/apiRoutes');

// Initialize the app and create a port
const app = express();
const PORT = 3001
//const PORT = app.set('port', process.env.PORT || 3001);

// Below is middleware inclusing bodyparsing, static, and routes
//When extended property is set to true, the URL-encoded data will be parsed with the qs library.
app.use(express.urlencoded({ extended: true }));
//below allows data to be returned as a string
app.use(express.json());
//Below alllows anything in the public folder to remain static
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', APIRoutes);

// Start the server by listening on the port
app.listen(PORT, () => console.log(`Listening on the PORT: ${PORT}`));
