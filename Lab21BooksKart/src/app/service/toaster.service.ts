import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(public popup:MatSnackBar) { }
  showPopup(message:string, duration:number ){
    this.popup.open(message,'Close', {
      duration,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
  }

