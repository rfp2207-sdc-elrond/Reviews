const { get } = require('../databases/postgre.js')

const pullReviews = (params, callback) => {
  get(`SELECT reviews.id, reviews.rating, reviews.summary, reviews.recommend, reviews.response,
	     reviews.body, reviews.date, reviews.reviewer_name, reviews.helpfulness,
	     (SELECT (json_agg(json_build_object('id', reviews_photos.id, 'url', reviews_photos.url)))
       FROM reviews_photos WHERE reviews.id = reviews_photos.review_id) AS photos FROM reviews WHERE reviews.product_id = $1 AND reported = false
       OFFSET $2 LIMIT $3;`, params, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result)
    }
  })
}

const saveReviews = (p_id) => {
  return db.any(`SELECT * FROM reviews`)
}

const updateReviews = (p_id) => {
  return db.any(`SELECT * FROM reviews`)
}

module.exports.pullReviews = pullReviews;
module.exports.saveReviews = saveReviews;
module.exports.updateReviews = updateReviews;

