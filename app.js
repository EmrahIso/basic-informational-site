const express = require('express');
const app = express();

app.listen(8080, (err) => {
  if (err) {
    throw err;
  }
});

app.get('/', (req, res) => {
  res.sendFile('./routes/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./routes/about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.sendFile('./routes/contact-me.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.redirect('/contact-me');
});

app.use((req, res) => {
  res.status(404).sendFile('./routes/404.html', { root: __dirname });
});
