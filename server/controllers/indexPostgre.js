const { pullReviews, saveReviews, updateReviews } = require('../models/indexPostgre.js')

const getReviews = (req, res) => {
  res.status(422).send('Missing product_id')
}

const getProductReviews = (req, res) => {
  let params = [req.params.product_id || req.query.product_id || req.body[product_id], req.params.page || 0, req.params.count || 5]
  pullReviews(params, (err, result)=>{
    if (err) {
      res.status(500).send('Server Issue')
    } else {
      let data = {
        products: parseInt(req.params.product_id || req.query.product_id || req.body[product_id] || 1,
        page: parseInt(req.params.page) || 0,
        count: parseInt(req.params.count) || 5,
        results: result
      }
      res.status(200).send(data);
    }
  })
}

const getProductMeta = (req, res) => {
  let params = [req.params.product_id, req.params.page || 0, req.params.count || 5]
  pullReviews(params, (err, result)=>{
    if (err) {
      res.status(500).send('Server Issue')
    } else {
      let data = {
        products: parseInt(req.params.product_id) || 1,
        page: parseInt(req.params.page) || 0,
        count: parseInt(req.params.count) || 5,
        results: result
      }
      res.status(200).send(data);
    }
  })
}

const postReviews = (req, res) => {
  let params = [req.body.product_id]
  pullReviews(params, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(201)
  })
}

const putReviews = (req, res) => {
  let params = [req.body.product_id]
  pullReviews(params, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(204)
  })
}

module.exports.getReviews = getReviews;
module.exports.getProductReviews = getProductReviews;
module.exports.getProductMeta = getProductMeta;
module.exports.postReviews = postReviews;
module.exports.putReviews = putReviews;