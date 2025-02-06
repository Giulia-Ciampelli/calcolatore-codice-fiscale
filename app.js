// #region variabili d'importazione
const express = require('express');
const cors = require('cors');
const app = express();
const host = process.env.HOST;
const port = process.env.PORT;
const belfioreRouter = require('./routes/belfiore_route.js');
// #endregion variabili d'importazione

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// impostazione server
app.listen(port, (req, res) => {
    console.log(`Server listening on: ${host}:${port}`);
})

// uso router
app.use('/', belfioreRouter);