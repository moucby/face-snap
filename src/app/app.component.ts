import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  mySnap!: FaceSnap;
  myAutherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(){
    this.mySnap = new FaceSnap(
      'Naruto Uzumagui',
      'Le raté du village de Konoha',
      new Date(),
      6,
      'https://www.adoxa.info/wp-content/uploads/2022/06/Naruto-Shippuden-La-nouvelle-collection-de-films-est-un.jpg'
    );

    this.myAutherSnap = new FaceSnap(
      'Kakashi Hatake',
      'Le ninja Copieur',
      new Date(),
      6,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5gBv0wHEeX6ubdM-SWPDtyrpf4F92_jfHQ&usqp=CAU'
    );

    this.myLastSnap = new FaceSnap(
      'Itachi Uchiha',
      'Le ninja du sacrifice',
      new Date(),
      6,
      'https://cdn.shopify.com/s/files/1/2693/0654/products/product-image-1270081102_800x.jpg?v=1582322653'
    );
  }
}
