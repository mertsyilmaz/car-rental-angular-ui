import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';

import {ToastrModule} from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
import { AddBrandComponent } from './components/brand/add-brand/add-brand.component';
import { AddColorComponent } from './components/color/add-color/add-color.component';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { DetailBrandComponent } from './components/brand/detail-brand/detail-brand.component';
import { EditBrandComponent } from './components/brand/edit-brand/edit-brand.component';
import { EditColorComponent } from './components/color/edit-color/edit-color.component';
import { DetailColorComponent } from './components/color/detail-color/detail-color.component';
import { DetailCarComponent } from './components/car/detail-car/detail-car.component';
import { EditCarComponent } from './components/car/edit-car/edit-car.component';
import { ManagePhotoComponent } from './components/car/manage-photo/manage-photo.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    CarComponent,
    RentalComponent,
    CarDetailComponent,
    CarFilterPipe,
    BrandFilterPipe,
    ColorFilterPipe,
    SidebarComponent,
    RentCarComponent,
    PaymentComponent,
    AddBrandComponent,
    AddColorComponent,
    AddCarComponent,
    DetailBrandComponent,
    EditBrandComponent,
    EditColorComponent,
    DetailColorComponent,
    DetailCarComponent,
    EditCarComponent,
    ManagePhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
