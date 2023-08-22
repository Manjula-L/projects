import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
id:any; 
  constructor(private http:HttpClient) { }
  getPost(){
    return this.http.get("https://Jsonplaceholder.typicode.com/posts/3");
  }
  
  getPostbyId(id:8){
    return this.http.get(`https://Jsonplaceholder.typicode.com/posts/${id}`);
  }
}
