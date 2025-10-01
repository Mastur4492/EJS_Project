const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 

app.use((req, res, next) => {
  res.locals.activePage = req.path;
  next();
});

app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

app.get('/services', (req, res) => {
  res.render('pages/services', { title: 'Services' });
});

app.get('/gallery', (req, res) => {
  res.render('pages/gallery', { title: 'Gallery' });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact' });
});

app.post('/contact', (req, res) => {
  res.render('pages/thankyou', { title: 'Thank You' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
