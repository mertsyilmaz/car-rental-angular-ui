import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './components/brand/add-brand/add-brand.component';
import { BrandComponent } from './components/brand/brand.component';
import { DetailBrandComponent } from './components/brand/detail-brand/detail-brand.component';
import { EditBrandComponent } from './components/brand/edit-brand/edit-brand.component';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { CarComponent } from './components/car/car.component';
import { DetailCarComponent } from './components/car/detail-car/detail-car.component';
import { EditCarComponent } from './components/car/edit-car/edit-car.component';
import { ManagePhotoComponent } from './components/car/manage-photo/manage-photo.component';
import { AddColorComponent } from './components/color/add-color/add-color.component';
import { ColorComponent } from './components/color/color.component';
import { DetailColorComponent } from './components/color/detail-color/detail-color.component';
import { EditColorComponent } from './components/color/edit-color/edit-color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"car/:id",component:DetailCarComponent},
  {path:"cars/add",component:AddCarComponent},
  {path:"car/edit/:id",component:EditCarComponent},
  {path:"car/photo/:carId",component:ManagePhotoComponent},
  {path:"brands",component:BrandComponent},
  {path:"brand/:id",component:DetailBrandComponent},
  {path:"brands/add",component:AddBrandComponent},
  {path:"brand/edit/:id",component:EditBrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"color/:id",component:DetailColorComponent},
  {path:"colors/add",component:AddColorComponent},
  {path:"color/edit/:id",component:EditColorComponent},
  {path:"customers",component:CustomerComponent},
  {path:"rentals",component:RentalComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"car/rent/:carId",component:RentCarComponent},
  {path:"car/rent/payment/:rentalId",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
