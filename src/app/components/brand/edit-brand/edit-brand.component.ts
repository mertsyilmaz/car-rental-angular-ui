import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  brandEditForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastr:ToastrService,
    private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      this.createBrandEditForm(params["id"]);
    });
  }

  createBrandEditForm(brandId:number){
    this.brandEditForm = this.formBuilder.group({
      id:[""],
      name:["",Validators.required]
    });
    this.brandService.getById(brandId).subscribe(response => {
      this.brandEditForm.controls['id'].setValue(response.data.id);
      this.brandEditForm.controls['name'].setValue(response.data.name);
    });
  }
  editBrand(){
    if(this.brandEditForm.valid){
      let brand = Object.assign({},this.brandEditForm.value);
      this.brandService.update(brand).subscribe(
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
