import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrand:Brand;
  filterText:string;

  constructor(private brandService:BrandService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    })
  }

  deleteBrand(brand:Brand){
    this.brandService.delete(brand).subscribe(response => {
      if(response.success){
        this.toastr.success(response.message,'', {timeOut: 1000})
         .onHidden
         .subscribe(() => this.getBrands());
      }
    });
  }
}
