// const myApp = require('../server.js')
const http = require('http')
// var request = require('request')
//  var baseUrl = 'http://localhost:3000/catalogue'


describe('setting up our server', ()=>{
})

describe('checking the foods catalagoue', ()=>{
var data ={}

  it('should have a staus of 200',()=>{
  var options = {
   host: 'http://localhost:3000/catalogue',
   port: 3000,
   path: '/catalogue'
  }
  http.get(options, (res)=>{
    data.status = await res.statusCode
  })
  expect(data.status).toBe(400)
  })
})
