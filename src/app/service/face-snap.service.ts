import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Naruto Uzumagui',
          description: 'Le raté du village de Konoha',
          createdDate: new Date(),
          snaps: 250,
          imageUrl: 'https://www.adoxa.info/wp-content/uploads/2022/06/Naruto-Shippuden-La-nouvelle-collection-de-films-est-un.jpg',
          location: 'Dijon'
        },
  
        {
          id: 2,
          title: 'Kakashi Hatake',
          description: 'Le ninja Copieur',
          createdDate: new Date(),
          snaps: 15,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5gBv0wHEeX6ubdM-SWPDtyrpf4F92_jfHQ&usqp=CAU',
        },
  
        {
          id: 3,  
          title: 'Itachi Uchiha',
          description: 'Le ninja du sacrifice',
          createdDate: new Date(),
          snaps: 75,
          imageUrl: 'https://cdn.shopify.com/s/files/1/2693/0654/products/product-image-1270081102_800x.jpg?v=1582322653',
        },
  
        {
          id: 4,
          title: 'Naruto Uzumagui',
          description: 'Le raté du village de Konoha',
          createdDate: new Date(),
          snaps: 6,
          imageUrl: 'https://www.adoxa.info/wp-content/uploads/2022/06/Naruto-Shippuden-La-nouvelle-collection-de-films-est-un.jpg',
          location: 'Dijon'
        },
  
        {
          id: 5,
          title: 'Kakashi Hatake',
          description: 'Le ninja Copieur',
          createdDate: new Date(),
          snaps: 15,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5gBv0wHEeX6ubdM-SWPDtyrpf4F92_jfHQ&usqp=CAU',
        },
  
        {
          id: 6,
          title: 'Itachi Uchiha',
          description: 'Le ninja du sacrifice',
          createdDate: new Date(),
          snaps: 75,
          imageUrl: 'https://cdn.shopify.com/s/files/1/2693/0654/products/product-image-1270081102_800x.jpg?v=1582322653',
        }
      ];


      /**
       * 
       * @returns 
       */
      getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
      }

      /**
       * 
       * @param id 
       * @returns 
       */
      getFaceSnapById(id: number): FaceSnap{
          const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
          if(!faceSnap){
              throw new Error('FaceSnap not found' + id);
          }
          return faceSnap;
      }

      /**
       * 
       * @param id 
       * @param snapType 
       */
      snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void{
          const faceSnap = this.getFaceSnapById(id);
          snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

  
}