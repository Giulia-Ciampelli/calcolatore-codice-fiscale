const connection = require('../database/database_connection.js');

// index
const index = (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}

// dati dei codici belfiore
const codiciBelfiore = (req, res) => {
    
    // richiesta dei codici comune italiani
    const municipalitySql = `SELECT denominazione_ita FROM gi_comuni_nazioni_cf`;
    connection.query(municipalitySql, (err, municipalities) => {
        if (err) {
            return res.status(500).json({
                error: 'Error fetching municipalities'
            });
        }

        // richiesta dei codici internazionali
        const nationSql = `SELECT denominazione_nazione FROM gi_nazioni ORDER BY denominazione_nazione`;
        connection.query(nationSql, (err, nations) => {
            if (err) {
                return res.status(500).json({
                    error: 'Error fetching nations'
                });
            }

            // preparazione e invio dati
            res.json({
                municipalities,
                nations
            })
        })
    })
}

// show
const show = (req, res) => {
    const belfioreItaliaSql = `SELECT codice_belfiore FROM gi_comuni_nazioni_cf WHERE denominazione_ita=?`;
    const belfioreEsteroSql = `SELECT codice_belfiore FROM gi_nazioni WHERE denominazione_nazione=?`;
    const nomeItalia = req.params.denominazione_ita;
    const nomeEstero = req.params.denominazione_nazione;

    // query per codici italiani
    connection.query(belfioreItaliaSql, [nomeItalia], (err, belfioreItaliaResults) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }
        if (!belfioreItaliaResults.length) {
            return res.status(404).json({
                error: `No belfiore codes found at ${nomeItalia}`
            })
        }

        // query per codici internazionali
        connection.query(belfioreEsteroSql, [nomeEstero], (err, belfioreEsteroResults) => {
            if (err) {
                return res.status(500).json({
                    error: err
                })
            }
            if (!belfioreEsteroResults.length) {
                return res.status(404).json({
                    error: `No belfiore codes found at ${nomeEstero}`
                })
            }

            // invio dati
            res.status(200).json({
                belfioreItaliaResults,
                belfioreEsteroResults
            });
        })
    })
}

module.exports = {
    index,
    codiciBelfiore,
    show
};