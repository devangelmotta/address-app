import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { ReactiveFormsModule } from '@angular/forms';
import { heroUser, heroPhone, heroMapPin} from '@ng-icons/heroicons/outline';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AddressItemListComponent } from './address-item-list/address-item-list.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AddressDetailsComponent,
    AddressItemListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroUser, heroPhone, heroMapPin }),
  ],
  exports: [
    HomeComponent
  ]
})
export class AddressesModule { }
