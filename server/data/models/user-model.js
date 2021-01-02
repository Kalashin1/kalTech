const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = require('../schemas/user-schema.js')

// salt rounds
const saltRounds = 10

// getting user schema
const userSchema = UserSchema

// instance methods of userSchema

// add to cart
userSchema.methods.addToCart = function (callback) {
  return mongoose.model('user').findById(id, cb)
}
// make a new order
userSchema.methods.makeOrder = function (cb) {
  return mongoose.model('user').findById(id, cb)
}
// update Info
userSchema.methods.updateInfo = function(cb){
  return mongoose.model('user').findById(id, cb)
}



// STATIC METHODS
// loin user
userSchema.statics.login = async function (email, password){
  // ensure the email exists inside the database
  const user = await this.findOne({email})
  // if user with the email exists then compare passowrds
  if(user){
    const result = await bcrypt.compare(password, user.password)
    if(result){
      return user
    }
    else{
      throw Error('incorrect password')
    }
  }
  throw Error('incorrect email, no user exists for this email')
}

userSchema.pre('save', async function(next){
  this.password = await bcrypt.hash(this.password, saltRounds)
  next()
})

// user model
const user = mongoose.model('user', userSchema)



module.exports = user
