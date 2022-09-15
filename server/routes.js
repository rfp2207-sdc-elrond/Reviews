var controller = require('./controllers/indexMongo.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.post('/reviewsInit', controller.postInitReviews);
router.post('/photosInit', controller.postInitPhotos);
router.post('/characteristicsInit', controller.postInitCharacteristics);

module.exports = router;
