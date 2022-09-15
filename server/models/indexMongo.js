const { Reviews, ReviewsPhotos, ReviewsCharacteristics } = require('../databases/mongodb.js')

const saveInitReviews = (data, callback) => {
  Reviews.create(data, (err, result) => {
    if (err) {
      console.log("MODELS ERROR")
      callback(err, null)
    } else {
      console.log("MODELS SAVED")
      callback(null, result)
    }
  });
}

const saveInitPhotos = (data, callback) => {
  ReviewsPhotos.create(data)((err, result) => {
    if (err) {
      console.log("MODELS ERROR")
      callback(err, null)
    } else {
      console.log("MODELS SAVED")
      callback(null, result)
    }
  });
}

const saveInitCharacteristics = (data, callback) => {
  ReviewsCharacteristics.create(data, (err, result) => {
    if (err) {
      console.log("MODELS ERROR")
      callback(err, null)
    } else {
      console.log("MODELS SAVED")
      callback(null, result)
    }
  });
}

module.exports.saveInitReviews = saveInitReviews;
module.exports.saveInitPhotos = saveInitPhotos;
module.exports.saveInitCharacteristics = saveInitCharacteristics;