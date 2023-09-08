import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowLongRight, heroExclamationTriangle} from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroArrowLongRight, heroExclamationTriangle }),

  ],
  exports: [
    SignupComponent
  ]
})
export class UserModule { }
