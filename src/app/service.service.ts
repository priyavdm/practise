import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor() {}
  getalldata(){
  
  return [{
    name:'priyuu',
    age:22,
    gender:'female'
  },
  {
    name:'nandhu',
    age:22,
    gender:'male'
  },
  {
    name:'ajisha',
    age:25,
    gender:'female'
  },
{
  name:'hari',
  age:20,
  gender:'female'
}]

  }
}
