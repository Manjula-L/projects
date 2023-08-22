import { Component } from '@angular/core';

@Component({
  selector: 'app-app-notfound',
  templateUrl: './app-notfound.component.html',
  styleUrls: ['./app-notfound.component.css']
})
export class AppNotfoundComponent {
ngOnDestroy(){
  console.log("OnDestroy-->Gets called when the components is deleted");
}
}
