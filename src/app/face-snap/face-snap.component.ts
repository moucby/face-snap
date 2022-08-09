import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;


  buttonText!: String;

  constructor(private faceSnapService: FaceSnapsService){

  }
  ngOnInit(){
    this.buttonText = 'Oh Snap!';
  }

  onSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, UnSnap!';
    }else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
    
  }
  
}
