const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/reviews');

// 2. Set up any schema and models needed by the app
const reviewsPhotosSchema = new mongoose.Schema({
  id: Number,
  review_id: Number,
  url: String,
})

const reviewsCharacteristicsSchema = new mongoose.Schema({
  id: Number,
  characteristic_id: Number,
  review_id: Number,
  value: Number
})

const reviewsSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  rating: Number,
  date: Date,
  summary: String,
  body: String,
  recommended: Boolean,
  reported: Boolean,
  reviewer_name: String,
  reviewer_email: String,
  response: String,
  helpfulness: Number,
  photos: {
    photos_id: Number,
    review_id: Number,
    url: String
  },
  characteristics: {
    characteristics_id: Number,
    characteristic_id: Number,
    review_id: Number,
    value: Number
  },
})

const Reviews = mongoose.model('reviews', reviewsSchema);
const ReviewsPhotos = mongoose.model('photos', reviewsPhotosSchema);
const ReviewsCharacteristics = mongoose.model('characteristics', reviewsCharacteristicsSchema);

// 3. Export the models and then Import the models into any modules as needed
module.exports.Reviews = Reviews;
module.exports.ReviewsPhotos = ReviewsPhotos;
module.exports.ReviewsCharacteristics = ReviewsCharacteristics;

