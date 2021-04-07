import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-edit-color',
  templateUrl: './edit-color.component.html',
  styleUrls: ['./edit-color.component.css']
})
export class EditColorComponent implements OnInit {

  colorEditForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastr:ToastrService,
    private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      this.createColorEditForm(params["id"]);
    });
  }

  createColorEditForm(brandId:number){
    this.colorEditForm = this.formBuilder.group({
      id:[""],
      name:["",Validators.required]
    });
    this.colorService.getById(brandId).subscribe(response => {
      this.colorEditForm.controls['id'].setValue(response.data.id);
      this.colorEditForm.controls['name'].setValue(response.data.name);
    });
  }

  editColor(){
    if(this.colorEditForm.valid){
      let brand = Object.assign({},this.colorEditForm.value);
      this.colorService.update(brand).subscribe(
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
