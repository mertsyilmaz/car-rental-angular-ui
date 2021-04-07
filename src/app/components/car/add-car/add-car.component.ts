import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carAddForm:FormGroup;
  colors:Color[];
  brands:Brand[];
  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastr:ToastrService,
    private brandService:BrandService,
    private colorService:ColorService,
    private router:Router) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getColors();
    this.getBrands();
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      name:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    });
  }

  getColors(){
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    })
  }

  getBrands(){
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    })
  }

  addCar(){
     if(this.carAddForm.valid){
       let car = Object.assign({},this.carAddForm.value);
       this.carService.add(car).subscribe(
         response => {
           if(response.success){
            this.toastr.success(response.message,'', {timeOut: 2000})
            .onHidden
            .subscribe(() => this.router.navigate(["/cars"]));
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
