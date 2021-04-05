import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  brands:Brand[]=[];
  colors:Color[]=[];
  constructor(private colorService:ColorService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
  }

  getColors(){
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    });
  }

  getBrands(){
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    })
  }

}
