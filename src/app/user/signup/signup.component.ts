import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';
import { CommunesService } from 'src/app/services/communes.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    private communesService: CommunesService
    ) { 
    this.createForm();
  }

  addressForm!: FormGroup;
  communesList: Array<any> = []

  ngOnInit(): void {
    this.getCommunes()
  }

  createForm() {
    this.addressForm = this.fb.group({
       name: ['', Validators.required ],
       lastName: ['', Validators.required ],
       phone: ['', [Validators.required, Validators.pattern('\\+563\\d{9}')] ],
       comuna: ['', Validators.required ]
    });
  }

  onSubmit(){
    let body = this.addressForm.value
    this.addressService.createAddress(body)
    .subscribe(
      () => {
        this.addressForm.reset()
        this.showSubmitResult()
      },
      (error: any) => {
        this.showSubmitResult(false)

      }
    );
  }

  getCommunes(){
    this.communesService.getCommunes()
    .subscribe(
      (response: any)=> 
        this.communesList = response
    )
  }

  showSubmitResult(success = true){
    let title = success ? 'Registro correcto' : 'Hubo un error al registrar'
    let icon: SweetAlertIcon = success ? 'success' : 'error'
    Swal.fire({  
    position: 'center',  
    icon ,  
    title,  
    showConfirmButton: false,  
    timer: 1500  
  }) }

}
