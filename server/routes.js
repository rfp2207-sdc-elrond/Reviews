var controllerMongo = require('./controllers/indexMongo.js');
var controllerPostgre = require('./controllers/indexPostgre.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

// MongoDB
// router.post('/reviews', controllerMongo.postReviews);
// router.post('/photos', controllerMongo.postPhotos);
// router.post('/characteristics', controllerMongo.postCharacteristics);

// Postgre
router.get('/reviews', controllerPostgre.getReviews);
router.get('/reviews/:product_id', controllerPostgre.getProductReviews)
router.get('/reviews/meta/:product_id', controllerPostgre.getProductMeta)

router.post('/reviews', controllerPostgre.postReviews);

router.put('/reviews', controllerPostgre.putReviews);

module.exports = router;
