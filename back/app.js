// #region variabili d'importazione
const express = require('express');
const cors = require('cors');
const app = express();
const host = process.env.HOST;
const port = process.env.PORT;
// #endregion variabili d'importazione

app.use(express.json());

// impostazione server
app.listen(port, (req, res) => {
    console.log(`Server listening on: ${host}:${port}`);
})

app.use(cors());