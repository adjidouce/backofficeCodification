import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

  constructor(private http:Http) { }
  private userUrlLogin = "https://tracking-cont-api.herokuapp.com/api/Transporteurs/login";


  login(transporteur){
    //noinspection TypeScriptValidateTypes
    return this.http.post(this.userUrlLogin,transporteur)
        .map((res : Response) =>
            {
              let user = res.json();
              localStorage.setItem('userId' , user.userId);
              return user;
            }
        )
        .catch((error:any) => Observable.throw(error.json().error || 'error server'));
  }




}
