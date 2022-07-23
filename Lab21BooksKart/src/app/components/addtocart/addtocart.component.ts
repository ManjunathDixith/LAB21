import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {

     
  constructor(private toaster: ToasterService){}


addtocart(){
  this.toaster.showPopup('One Item Added To Cart', 4000)
}

  ngOnInit(): void {
  }

}
