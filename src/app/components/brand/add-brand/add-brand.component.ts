import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brandAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      name:["",Validators.required]
    });
  }

  addBrand(){
    if(this.brandAddForm.valid){
      let brand = Object.assign({},this.brandAddForm.value);
      this.brandService.add(brand).subscribe(
        response => {
          if(response.success){
            this.toastr.success(response.message,'', {timeOut: 2000})
         .onHidden
         .subscribe(() => this.router.navigate(["/brands"]));
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
