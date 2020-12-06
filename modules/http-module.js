export class HttpModule {
  constructor(){}

  HandleResponse (XHR, resolve, reject) {
    XHR.addEventListener('load', function (){
      if (XHR.status === 200){
        console.log(XHR.response)
        resolve(JSON.parse(XHR.resonse))
      }
      else{
        reject(new Error('Error making request, this is what we found '+XHR.status ))
      }
    })
  }

  get (url, obj ={}, headers) {
    return new Promise((resolve, reject)=>{
      const XHR = new XMLHttpRequest()
      XHR.open("GET", url);
      if(typeof headers !== 'undefined'){
        for(var key in headers){
          XHR.setRequestHeaders(key, headers[key])
        }
      }
      if(typeof obj !== 'undefined'){
        XHR.send(obj)
      }
      else {
        XHR.send()
      }
      this.HandleResponse(XHR, resolve, reject)
    })
  }

  post (url, obj, headers = {}){
    return new Promise((resolve, reject)=>{
      const XHR = new XMLHttpRequest()
      XHR.open("POST", url);
      if(typeof headers !== 'undefined'){
        for(var key in headers){
          XHR.setRequestHeaders(key, headers[key])
        }
      }
      XHR.send(obj)
      this.HandleResponse(XHR, resolve, reject)
    })
  }
}

