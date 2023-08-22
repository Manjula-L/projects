import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from './service/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-app';
  count=0;
  sum1=0;
  Money=100;
  currdate:Date= new Date();
  
  
  constructor(private route:Router, private example:ExampleService){}
  //getting service 
  getservice(){
  this.example.getPost().subscribe((val)=>{
    console.log(val);
  });

  
  }
    getservicebyId(){
      this.example.getPostbyId(8).subscribe((val)=>{
        console.log(val);
      });
}
  //ngOnInit(){
    //creating naviagation path in ts using params
   //this.route.navigate(['/auth',8]); 
    //creating router navigation in ts using query params
    //this.route.navigate(['/auth'],{queryParams:{id:5}});
  //}
  
  
  
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
  getData(event:any){
    this.sum1=event;
  }
}
