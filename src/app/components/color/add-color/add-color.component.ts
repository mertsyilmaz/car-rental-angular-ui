import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  colorAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      name:["",Validators.required]
    });
  }

  addColor(){
    if(this.colorAddForm.valid){
      let color = Object.assign({},this.colorAddForm.value);
      this.colorService.add(color).subscribe(
        response => {
          if(response.success){
            this.toastr.success(response.message,'', {timeOut: 2000})
         .onHidden
         .subscribe(() => this.router.navigate(["/colors"]));
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
