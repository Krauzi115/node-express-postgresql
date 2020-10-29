const express = require('express');
let Router = require('express-promise-router');
const handlebars = require('express-handlebars');
require('dotenv').config();
// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host: 'sql-exercises.20bits.com',
    user: 'student',
    password: 'sqlrocks123!',
    database: 'sql_exercises'
  }
});


const port = 3000;
const app = express();

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'planB',
  partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))

let router = Router();
app.use(router);

router.get('/', async (request, response) => {
  response.render('main', { layout: 'index' });
});


router.get('/albums', async (request, response) => {
  let albums = await db.select('*').from('albums').orderBy('title', 'DESC');
  console.log(albums);
  response.render('albums', { layout: 'index', albums: albums, show: true });
});

router.get('/artists', async (request, response) => {
  let artists = await db.select('*').from('artists').orderBy('name', 'DESC');
  console.log(artists);
  response.render('artists', { layout: 'index', artists: artists, show: true });
});

router.get('/customers', async (request, response) => {
  let customers = await db.select('*').from('customers').orderBy('name', 'DESC');
  console.log(customers);
  response.render('customers', { layout: 'index', customers: customers, show: true });
});

router.get('/employees', async (request, response) => {
  let employees = await db.select('*').from('employees').orderBy('name', 'DESC');
  console.log(employees);
  response.render('employees', { layout: 'index', employees: employees, show: true });
});

router.get('/genres', async (request, response) => {
  let genres = await db.select('*').from('genres').orderBy('name', 'DESC');
  console.log(genres);
  response.render('genres', { layout: 'index', genres: genres, show: true });
});

router.get('/invoice_lines', async (request, response) => {
  let invoice_lines = await db.select('*').from('invoice_lines').orderBy('name', 'DESC');
  console.log(invoice_lines);
  response.render('invoice_lines', { layout: 'index', invoice_lines: invoice_lines, show: true });
});

router.get('/invoices', async (request, response) => {
  let invoices = await db.select('*').from('invoices').orderBy('name', 'DESC');
  console.log(invoices);
  response.render('invoices', { layout: 'index', invoices: invoices, show: true });
});

router.get('/media_types', async (request, response) => {
  let media_types = await db.select('*').from('media_types').orderBy('name', 'DESC');
  console.log(media_types);
  response.render('media_types', { layout: 'index', media_types: media_types, show: true });
});

router.get('/playlist_tracks', async (request, response) => {
  let playlist_tracks = await db.select('*').from('playlist_tracks').orderBy('name', 'DESC');
  console.log(playlist_tracks);
  response.render('playlist_tracks', { layout: 'index', playlist_tracks: playlist_tracks, show: true });
});

router.get('/playlists', async (request, response) => {
  let playlists = await db.select('*').from('playlists').orderBy('name', 'DESC');
  console.log(playlists);
  response.render('playlists', { layout: 'index', playlists: playlists, show: true });
});

router.get('/tracks', async (request, response) => {
  let tracks = await db.select('*').from('tracks').orderBy('name', 'DESC');
  console.log(tracks);
  response.render('tracks', { layout: 'index', tracks: tracks, show: true });
});

app.listen(port, () => console.log(`App listening to port ${port}`));