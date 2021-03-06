const express = require('express');
const app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(process.env.PORT || 3000, () => console.log(`App is listening on port ${process.env.PORT || 3000}!`));