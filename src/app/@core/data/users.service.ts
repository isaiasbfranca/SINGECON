
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'ADMINISTRADORA', picture: 'assets/images/nick.png', title: 'Residencial Araguaia' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png', title: 'Residencial teste' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png', title: 'Residencial teste'},
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png', title: 'Residencial teste' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png', title: 'Residencial teste' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png', title: 'Residencial teste' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return observableOf(this.userArray[counter]);
  }
}
