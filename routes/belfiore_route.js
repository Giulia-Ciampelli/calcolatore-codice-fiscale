const express = require ('express');
const router = express.Router();
const belfioreController = require('../controller/belfiore_controller.js');

// index
router.get('/', belfioreController.index);

// rotta codici belfiore
router.get('/api/codici-belfiore', belfioreController.codiciBelfiore);

// show
router.get('/api/codici-belfiore/:denominazione_ita/:denominazione_nazione', belfioreController.show);

module.exports = router;