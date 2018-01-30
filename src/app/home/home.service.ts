import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class HomeService {

  constructor(private http : Http) { }
  private userUrl = 'http://tracking-cont-api.herokuapp.com/api/Transporteurs/';

  getUser(id){
    //noinspection TypeScriptValidateTypes
    console.log(this.userUrl + id);
    //noinspection TypeScriptValidateTypes
    return this.http.get(this.userUrl + id)
      .map((res : Response) =>
      {
        let user = res;
        return user.json()
      })
      .catch((error:any) => Observable.throw(error.json().error || 'error server'));
  }

  logout(){
    localStorage.removeItem('userId');
  }
}
