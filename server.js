const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 8080;
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 


const connection = mysql.createConnection({
  host: 'localhost', 
  port: 3307, 
  user: 'root', 
  password: 'mostarska14', 
  database: 'methotels' 
});

connection.connect(err => {
  if (err) {
    console.error('Greška pri povezivanju sa bazom: ' + err.stack);
    return;
  }
  console.log('Povezani ste sa bazom podataka.');
});

// Definisanje route-a za dobavljanje soba
app.get('/rooms', (req, res) => {
  connection.query('SELECT * FROM rooms', (err, results) => {
    if (err) {
      res.status(500).send('Greška na serveru');
    } else {
      res.json(results);
    }
  });
});


// Definisanje route-a za dodavanje soba
app.post('/add-room', (req, res) => {
  const { naziv, brojKreveta, cenaPoNoci, klima, miniBar, sauna } = req.body;

  // Provera da li su svi potrebni podaci prisutni
  if (!naziv || !brojKreveta || !cenaPoNoci) {
    return res.status(400).json({ error: 'Svi podaci nisu dostavljeni.' });
  }


  // Dodavanje sobe u bazu
  connection.query(
    'INSERT INTO rooms (naziv, brojKreveta, cenaPoNoci, klima, miniBar, sauna) VALUES (?, ?, ?, ?, ?, ?)',
    [naziv, brojKreveta, cenaPoNoci, klima, miniBar, sauna],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Greška na serveru prilikom dodavanja sobe.' });
      }
      return res.status(201).json({ message: 'Soba uspešno dodata.' });
    }
  );
});

// Define route for deleting a room by ID
app.delete('/rooms/:id', (req, res) => {
  const roomId = req.params.id;


  connection.query('DELETE FROM rooms WHERE id = ?', roomId, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Greška na serveru prilikom brisanja sobe.' });
    } else {
      res.status(200).json({ message: 'Soba uspešno obrisana.' });
    }
  });
});
// Definisanje route-a za dobavljanje sobe po ID-u
app.get('/rooms/:id', (req, res) => {
  const roomId = req.params.id;

  connection.query('SELECT * FROM rooms WHERE id = ?', [roomId], (err, results) => {
    if (err) {
      res.status(500).send('Greška na serveru');
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).send('Soba nije pronađena');
      }
    }
  });
});
// Define route for updating a room by ID
app.put('/rooms/:id', (req, res) => {
  const roomId = req.params.id;
  const updatedRoomData = req.body;

 
  connection.query(
    'UPDATE rooms SET naziv = ?, brojKreveta = ?, cenaPoNoci = ?, klima = ?, miniBar = ?, sauna = ? WHERE id = ?',
    [
      updatedRoomData.naziv,
      updatedRoomData.brojKreveta,
      updatedRoomData.cenaPoNoci,
      updatedRoomData.klima,
      updatedRoomData.miniBar,
      updatedRoomData.sauna,
      roomId
    ],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Greška na serveru prilikom izmene sobe.' });
      } else {
        res.status(200).json({ message: 'Soba uspešno izmenjena.' });
      }
    }
  );
});
// Pokretanje servera
app.listen(port, () => {
  console.log(`Server pokrenut na portu ${port}`);
});
