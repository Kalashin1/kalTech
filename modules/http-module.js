

function handleTask (obj, XHR) {
  if (obj) {
    const params = JSON.stringify(obj)
    // send the query string with the body of the request
    XHR.send(params)
    console.log(params) 
  }
  // however proceed with the request if there is no object
  else {
    XHR.send()
  }
  XHR.timeout = 60000
}
export class HttpModule {
  get (url, obj) {
  // creating a new promise
    return new Promise((resolve, reject) => {
      // creating an xhr object
      var XHR = new XMLHttpRequest();
      XHR.open('GET', url);
      // if there is an object that holds the search query string
      handleTask(obj, XHR);
      XHR.addEventListener('load', () => {
        if (XHR.status === 200) {
          // if( XHR.responseType == )
          resolve(JSON.parse({message: "data sucessfully sent"}))
        }
        else {
          reject('Error fecthing resource, this is the status code : ' + XHR.status)
        }
      })
    })
  }
  post (url, obj) {
    return new Promise((resolve, reject) => {
      // creating an xhr object
      var XHR = new XMLHttpRequest()
      XHR.open('POST', url)
      // if there is an object that holds the search query string
      XHR.setRequestHeader('Content-type', 'application/json')
      handleTask(obj, XHR)
      XHR.addEventListener('load', () => {
        if (XHR.status === 200) {
          let result = XHR.response
          resolve(result)
        }
        else {
          const err = new Error('Error fecthing resource, this is the status code : ' + XHR.status)
          reject(err)
        }
      })
    })
  }
}
