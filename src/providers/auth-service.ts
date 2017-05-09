import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  public login(credentials) {
    if (credentials.name === null || credentials.password == null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let access = (credentials.password === "pass" && credentials.name === "yo");
        this.currentUser = new User('Yo');
        observer.next(access);
        observer.complete();
      });
    }
  }

}
