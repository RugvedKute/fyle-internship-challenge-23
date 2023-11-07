import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  userData = {};
  constructor() { }


  storeUserData(data: any) {
    console.log('data service', data)
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  deleteUserData() {
    this.userData = {};
  }
 
}
