import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-manage-photo',
  templateUrl: './manage-photo.component.html',
  styleUrls: ['./manage-photo.component.css']
})
export class ManagePhotoComponent implements OnInit {

  photos:Photo[];
  carId:number;
  constructor(private activatedRoute:ActivatedRoute,
    private photoService:PhotoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.carId = params['carId'];
      this.photoService.getPhotoByCarId(params['carId']).subscribe(response => {
        this.photos = response.data;
      });
    })
  }

  getPhotos(carId:number){
    this.photoService.getPhotoByCarId(carId).subscribe(response => {
      this.photos = response.data;
    });
  }

  fileUploaderChange(fileInput:any){
    if(fileInput.target.files && fileInput.target.files[0]){
      for (let i = 0; i < fileInput.target.files.length; i++) {
         this.photos.push({
           id:0,
           carId:this.carId,
           url:fileInput.target.files[i].name,
           description:"",
           dateAdded: new Date(),
           isMain:false,
           publicId:""   
         });
        
      }
    }
  }

  uploadAll(){
    console.log(this.photos)
  }
}
