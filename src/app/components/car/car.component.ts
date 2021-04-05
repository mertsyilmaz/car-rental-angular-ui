import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carsDetail: CarDetail[] = [];
  colors: Color[];
  brands: Brand[];
  filterText: string;
  selectedBrand="";
  selectedColor="";
  constructor(
    private carService: CarService,
    private activetedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.activetedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsDetailByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsDetailByColorId(params['colorId']);
      } else {
        this.getCarsDetail();
      }
    });
  }

  getCars() {
    this.carService.getAll().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsDetailByBrandId(brandId: number) {
    this.carService.getCarDetailByColorId(brandId).subscribe((response) => {
      this.carsDetail = response.data;
    });
  }

  getCarsDetailByColorId(colorId: number) {
    this.carService.getCarDetailByColorId(colorId).subscribe((response) => {
      this.carsDetail = response.data;
    });
  }

  getCarsDetail() {
    this.carService.getCarDetail().subscribe((response) => {
      this.carsDetail = response.data;
    });
  }

  getBrands() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByFilter() {
    this.carService.getCarDetailByFilter(this.selectedColor,this.selectedBrand).subscribe(response => {
      this.carsDetail = response.data;
    })

  }

}
