import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private addressService: AddressService,
    private fb: FormBuilder
    ) { 
      this.createForm()
    }

  id!: number;
  addresses: any = []
  addressesSearched: any = []
  addressesRequested: any = []

  searchForm!: FormGroup;

  ngOnInit() {
    this.getAddresses()

    this.searchForm.get('searchTerm')?.valueChanges.subscribe((val: any) => this.optimizedSearch(val))

  }

  getAddresses(): void {
    this.addressService.getAddresses().subscribe(
      (response) => {
        console.log(response);
        this.addressesRequested = response; 
        this.addresses = response
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createForm() {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
  }

  optimizedSearch(query: string) {
    query = query.toLowerCase();
    let result = this.addressesRequested.filter((address: any) => {
      return Object.values(address).some((value: any) => {
        return value ? value.toString().toLowerCase().includes(query) : false;
      });
    });
    console.log(result?.length, this.addressesRequested)
    this.addresses = result?.length ? result : this.addressesRequested;
  }
  
}
