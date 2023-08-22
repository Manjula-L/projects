import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  num=0;
  Rupee=50;
  flag=false;
  //Hooks life cycle
  //accesing url using params
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    console.log("OnInit--> gets called initially the page gets loaded");
    console.log("QUERYPARAMS id:",this.route.snapshot.queryParams['id']);
   console.log("PARAMS ID:",this.route.snapshot.params['id']);
  }
  ngDoCheck(){
    console.log("DoCheck-->gets called when there is a change in the component");
  }
  //hooks which works in child component
  ngAfterContentInit(){
    console.log("AfterContentInit-->gets called after the execution of child component");
  }
 
  //Sending Values from parent component to child
  @Input()
  count:any;

  ngOnChanges(){
    console.log("OnChange-->gets called when decorator value changes");
  }


  //Sending value from child to parent
  //Should use only one emmitter in one Output() function
  @Output()
  valtoParent= new EventEmitter<any>();

  onDelete(){
    this.flag= !this.flag;
  }
  

  add(){
    this.num = this.num + this.count;
    
  }
  sum(){
    this.valtoParent.emit(this.num);
  }



}
