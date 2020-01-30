import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos()  {
    return [

    {
        id: 1,
        title: 'Todo One',
        completed: true
      },
    
      {
        id: 2,
        title: 'Todo two',
        completed: true
      },
    
      {
        id: 1,
        title: 'Todo three',
        completed: false
      }
    
  ]
  }
   
}
