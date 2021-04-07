import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { Photo } from 'src/app/models/photo';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  carEditForm:FormGroup;
  carId:number;
  colors:Color[];
  brands:Brand[];
  photos:Photo[];
  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastr:ToastrService,
    private activetedRoute:ActivatedRoute,
    private colorService:ColorService,
    private brandService:BrandService,
    private photoService:PhotoService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.activetedRoute.params.subscribe(params => {
      this.carId = params["id"];
      this.createCarEditForm(params["id"]);
      this.getPhotosByCarId(params["id"]);
    });
  }

  addPhotos(){
    console.log(this.photos)
  }

  getColors(){
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    });
  }

  getBrands(){
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    });
  }

  getPhotosByCarId(carId:number){
    this.photoService.getPhotoByCarId(carId).subscribe(response => {
      this.photos = response.data;
    })
  }

  createCarEditForm(brandId:number){
    this.carEditForm = this.formBuilder.group({
      id:[""],
      name:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    });
    this.carService.getById(brandId).subscribe(response => {
      this.carEditForm.controls['id'].setValue(response.data.id);
      this.carEditForm.controls['name'].setValue(response.data.name);
      this.carEditForm.controls['brandId'].setValue(response.data.brandId);
      this.carEditForm.controls['colorId'].setValue(response.data.colorId);
      this.carEditForm.controls['modelYear'].setValue(response.data.modelYear);
      this.carEditForm.controls['dailyPrice'].setValue(response.data.dailyPrice);
      this.carEditForm.controls['description'].setValue(response.data.description);
    });
  }

  editCar(){
    if(this.carEditForm.valid){
      let brand = Object.assign({},this.carEditForm.value);
      this.carService.update(brand).subscribe(
        response => {
          if(response.success){
            this.toastr.success(response.message);
          }
      },
      responseError => {
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastr.error(responseError.error.ValidationErrors[i].ErrorMessage,"Validation Error")
          }
        }
      });
    }
    else{
      this.toastr.error("Form Invalid");
    }
  }
}
