import { Component } from '@angular/core';
import { ToasterService } from './service/toaster.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab21BooksKart';
   
  constructor(private toaster: ToasterService){}


addtocart(){
  this.toaster.showPopup('One Item Added To Cart', 4000)
}
}
