
const mongoose = require('mongoose')
// user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    //   },
const  productSchema = new mongoose.Schema({
    
  pname: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  countInStock: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  numReviews:{
    type: String,
    required: true,
  }
},{
      timestamps:true
  }
)

module.exports = mongoose.model('Product', productSchema)
