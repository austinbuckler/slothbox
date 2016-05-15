import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import {Http,HTTP_BINDINGS,Headers}  from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'dropbox-auth',
  templateUrl: 'dropbox-auth.component.html',
  providers: [HTTP_BINDINGS]
})
export class DropBoxComponent implements OnInit {

getResponse;
constructor(http:Http){

var creds = "appkey= jbqssj52us3hsh2";
var headers = new Headers();
headers.append('Content-Type', 'application/json');
http.post('https://api.dropboxapi.com/2/files/list_folder',creds,{
 headers: headers
}).subscribe(res => {
          this.getResponse = res.json();
        });
 }

  ngOnInit() {}
getRandomQuote() {
 //window.location.replace("https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=jbqssj52us3hsh2&redirect_uri=https://westcoastbestcoast.2016.angularattack.io/");
console.log(this.getResponse);
}
}
