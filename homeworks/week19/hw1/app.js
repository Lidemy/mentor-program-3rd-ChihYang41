/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');

const app = express();
const port = 3000;

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Route
app.get('/todos', (req, res) => {
  db.query('SELECT * FROM todo_table', (err, rows) => {
    // error
    if (err) {
      return console.log(err);
    }
    // response
    return res.json(rows);
  });
});

app.get('/todos/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM todo_table WHERE id = ?', [id], (err, rows) => {
    // error
    if (err) {
      return console.log(err);
    }
    // response
    return res.json(rows);
  });
});

app.post('/todos', (req, res) => {
  const { content } = req.body;
  db.query('INSERT INTO todo_table (content) VALUES (?)', [content], (err) => {
    // error
    if (err) {
      return console.log(err);
    }
    res.sendStatus(200);
    return res.end();
  });
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM todo_table WHERE id = ?', [id], (err) => {
    // error
    if (err) {
      return console.log(err);
    }
    // response
    res.sendStatus(200);
    return res.end();
  });
});

app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { content, isCompleted } = req.body;
  if (req.body.content) {
    db.query('UPDATE todo_table SET content = ? WHERE id = ?', [content, id], (err) => {
      // error
      if (err) {
        return console.log(err);
      }
      // response
      res.sendStatus(200);
      return res.end();
    });
  } else {
    db.query('UPDATE todo_table SET isCompleted = ? WHERE id = ?', [isCompleted, id], (err) => {
      // error
      if (err) {
        return console.log(err);
      }
      // response
      res.sendStatus(200);
      return res.end();
    });
  }
});

// app.patch('/todos/:id', (req, res) => {
//   const { id } = req.params;
//   const { content, isCompleted } = req.body;
//   const columns = [];
//   const params = [];
//   if (content) {
//     columns.push('content = ?')
//     params.push(content)
//   } else {
//     columns.push('isCompleted = ?')
//     params.push(isCompleted)
//   }

//   if (columns.length === 0) {
//     return res.end()
//   }

//   params.push(id)
//   const query = `UPDATE todo_table SET ${columns.join(',')} WHERE id = ?`
//   db.query(query, params, (err) => {
//     // error
//     if (err) {
//       return console.log(err);
//     }
//     // response
//     res.sendStatus(200);
//     return res.end();
//   });
// });

app.listen(port, () => {
  db.connect();
  console.log('hello this is 3000 port');
});
