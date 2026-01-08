const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.set('etag', false);
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use(cors());
app.use(express.json());


// LISTAR USUARIOS
app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(result);
    });
});
// CREAR USUARIO
app.post('/usuarios', (req, res) => {
    const { nombre, correo, telefono } = req.body;

    const sql = 'INSERT INTO usuarios (nombre, correo, telefono) VALUES (?, ?, ?)';

    db.query(sql, [nombre, correo, telefono], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({
            message: 'Usuario creado correctamente',
            id: result.insertId
        });
    });
});

// ACTUALIZAR USUARIO
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, correo, telefono } = req.body;

    const sql = `
        UPDATE usuarios
        SET nombre = ?, correo = ?, telefono = ?
        WHERE id = ?
    `;

    db.query(sql, [nombre, correo, telefono, id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Usuario actualizado correctamente' });
    });
});

// ELIMINAR USUARIO
app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM usuarios WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
