const { Schema } = require('mongoose')


// PRODUCT SHCEMA
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
     minlength: 3
  },
  price: {
    type: Number,
    required: true,
    minlength: 1
},
  descripttion: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 200
  },
  imgUrl: {
    type: String
  },
  orders: {
    type: Number
  },
  category: {
    type: String
  },
  type: {
    type: String
  },
  promo: {
    type: Boolean
  }
})

//  ORDERS SCHEMA
const orderSchema = new Schema({
  items: [productSchema],
  length: {
    type: Number
  },
  totalCharge: {
    type: Number
  },
  customer: {
    type: Number
  },
  DeliveryAddress: {
    street: {
      type: String,
       required: true,
       minlength: 10
    },
    zip: {
      type: Number,
       required: true,
       minlength: 6
    },
    city: {
      type: String,
       required: true
      , minlength: 3
    },
    state: {
      type: String,
       required: true,
       minlength: 3
    },
    country: {
      type: String,
       required: true,
       minlength: 3
    }
  },
  status: {type: String}
})


const mySchemas = {productSchema, orderSchema}

module.exports = mySchemas
