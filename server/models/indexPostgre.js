const { postgreQuery } = require('../databases/postgre.js')

const pullReviews = async (params) => {
  return await postgreQuery(`SELECT reviews.id, reviews.rating, reviews.summary, reviews.recommend, reviews.response,
	     reviews.body, reviews.date, reviews.reviewer_name, reviews.helpfulness
       FROM reviews WHERE product_id = $1 AND reported = false
       OFFSET $2 LIMIT $3;`, params)
}

const pullReviewPhotos = async (params) => {
  return await postgreQuery(`SELECT id, url FROM reviews_photos WHERE review_id = $1`, params)
}

const pullReviewsMeta = async (params) => {
  return await postgreQuery(`SELECT rating, recommend FROM reviews WHERE product_id = $1`, params)
}

const pullReviewsCharacteristics = async (params) => {
  return await postgreQuery(`SELECT characteristics.id, reviews_characteristics.value, characteristics.name FROM reviews_characteristics JOIN reviews ON reviews.id = reviews_characteristics.review_id JOIN characteristics ON reviews.product_id = characteristics.product_id WHERE reviews.product_id = $1`, params)
}

const saveReviews = async (params) => {
    return await postgreQuery(`INSERT INTO reviews (id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, helpfulness) VALUES
    ((SELECT MAX(id)+1 FROM reviews), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, params)
}

const savePhotos = async (params) => {
  return await postgreQuery(`INSERT INTO reviews_photos (id, review_id, url) VALUES
    ((SELECT MAX(id)+1 FROM reviews_photos), (SELECT MAX(id) FROM reviews), $1)`, params)
}

const saveCharacteristics = async (params) => {
  return await postgreQuery(`INSERT INTO reviews_characteristics (id, characteristic_id, review_id, value) VALUES
    ((SELECT MAX(id)+1 FROM reviews_characteristics), $1, (SELECT MAX(id) FROM reviews), $2)`, params)
}

const updateReviewsHelpful = async (params) => {
  return await postgreQuery(`UPDATE reviews SET helpful = (SELECT helpful FROM reviews WHERE id = $1)+1 WHERE id = $1`, params)
}

const updateReviewsReport = async (params) => {
  return await postgreQuery(`UPDATE reviews SET reported = true WHERE id = $1`, params)
}

module.exports.pullReviews = pullReviews;
module.exports.pullReviewPhotos = pullReviewPhotos;
module.exports.pullReviewsMeta = pullReviewsMeta;
module.exports.pullReviewsCharacteristics = pullReviewsCharacteristics;
module.exports.saveReviews = saveReviews;
module.exports.savePhotos = savePhotos;
module.exports.saveCharacteristics = saveCharacteristics;
module.exports.updateReviewsHelpful = updateReviewsHelpful;
module.exports.updateReviewsReport = updateReviewsReport;
