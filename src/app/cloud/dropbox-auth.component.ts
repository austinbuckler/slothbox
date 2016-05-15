import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Http, HTTP_BINDINGS, Headers } from '@angular/http';
import { environment } from '../environment';
import { RouteParams,Router} from '@angular/router-deprecated';
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';

@Component({
  moduleId: module.id,
  selector: 'dropbox-connect',
  templateUrl: 'dropbox-connect.html',
  providers: [HTTP_BINDINGS]
})
export class DropBoxComponent implements OnInit {

 access_token;
  getResponse: any;
  redirectURL = environment.production ? "https://westcoastbestcoast.2016.angularattack.io/auth/dropbox/" : "http://localhost:4200/auth/dropbox/";
  constructor(params:RouteParams,http:Http,
   public  _router: Router) {

  
   this.access_token = params;
  console.log(this.access_token);
    http.get("https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=jbqssj52us3hsh2&redirect_uri=http://localhost:4200/auth/dropbox").subscribe(res => {
          this.getResponse = res.json();
        });
 var code = params.get('code');
 var reqQuery = code + "&grant_type=authorization_code";
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    http.post('https://api.dropboxapi.com/1/oauth2/token=' + reqQuery, JSON.stringify(null), {
      headers: headers
    }).subscribe(res => {
      console.log(res);
    });
var headers = new Headers();
headers.append('Authorization', 'Bearer ti-BUBtTRMgAAAAAAAAE9gsiya42ajS3XDRi1CzgnDAvKrjJzsHYFyTiOXjLipO7');
headers.append('Content-Type', 'application/json');
http.post('https://api.dropboxapi.com/1/oauth2/token', JSON.stringify(null),{
 headers: headers
}).subscribe(res=>{console.log(res);});
http.post('https://api.dropboxapi.com/2/files/list_folder',JSON.stringify({"path":""}),{
 headers: headers
}).subscribe(res => {
          this.getResponse = res.json();
        });
  }

  ngOnInit() {}

  doAuth() {  

       var options = 'left=100,top=10,width=400,height=500';
       window.open('https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=jbqssj52us3hsh2&redirect_uri=' + this.redirectURL,null , options);
   //window.location.replace("https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=jbqssj52us3hsh2&redirect_uri=" + this.redirectURL);
   console.log(this.getResponse);
   
  }
dom = new BrowserDomAdapter();
   addPostMessageListener(fn: EventListener): void {
     this.dom.getGlobalEventTarget('window').addEventListener('message',
                function(event){
console.log(event);
            //if(event.data.status === "200") {

          // Use an EventEmitter to notify the other components that user logged in
         
        //}
}
                ,false);
   }
onPostMessage(event) {
console.log("RTASDASD");
console.log(event);
      if(event.data.status === "200") {

          // Use an EventEmitter to notify the other components that user logged in
         
      }
}

}
