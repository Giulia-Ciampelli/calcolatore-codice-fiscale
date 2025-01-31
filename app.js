// #region variabili d'importazione
const express = require('express');
const cors = require('cors');
const app = express();
const host = process.env.HOST;
const port = process.env.PORT;
// #endregion variabili d'importazione

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// impostazione temporanea rotta index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

// impostazione server
app.listen(port, (req, res) => {
    console.log(`Server listening on: ${host}:${port}`);
})
