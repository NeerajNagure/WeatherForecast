const express = require('express');
const cors = require('cors');

const app = express();

const port = 9000;

app.use(express.json());
app.use(cors()); // Add CORS support

app.get('/', (req, res) => {
  res.send('Hello');
});
app.use('/api/auth', require('./routes/weather'));
app.listen(port, () => {
  console.log(`My backend listening on port ${port}`);
});
