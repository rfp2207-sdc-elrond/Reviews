const { saveReviews, savePhotos, saveCharacteristics } = require('../models/indexMongo.js');

const postReviews = (req, res) => {
  let params = {id: data[0], product_id: data[1], rating: data[2], date: data[3], summary: data[4], body: data[5], recommend: data[6], reported: data[6], reviewer_name: data[7], reviewer_email: data[8], response: data[9], helpfulness: data[10]}
  saveReviews(params, (err, result) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      console.log("SAVED")
      res.send('SAVED')
    }
  })
}

const postPhotos = (req, res) => {
  let params = {id: data[0], review_id: data[1], url: data[2]}
  savePhotos(params, (err, result) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      console.log("SAVED")
      res.send('SAVED')
    }
  })
}

const postCharacteristics = (data) => {
  let params = {id: data[0], characteristic_id: data[1], review_id: data[2], value: data[3]}
  saveCharacteristics(params, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("SAVED")
    }
  })
}

module.exports.postReviews = postReviews;
module.exports.postPhotos = postPhotos;
module.exports.postCharacteristics = postCharacteristics;