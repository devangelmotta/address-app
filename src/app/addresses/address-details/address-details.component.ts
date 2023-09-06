import { Component } from '@angular/core';
import { AddressService } from '../services/address.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent {

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute
    ) { }

  addressDetails: any = undefined

  ngOnInit() {
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id"); 
    if(id) this.getAddressDetails(id)
  }

  getAddressDetails(id: string): void {
    this.addressService.getAddressesById(id).subscribe(
      (response) => {
        console.log(response);
        this.addressDetails = response; 
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    // Only 3 because we will duplicate characters
    for (let i = 0; i < 3; i++) { 
      // 1-6 for darker colors
      const char = letters[Math.floor(Math.random() * 6) + 1]; 
      // Duplicate for R, G, B
      color += char + char; 
    }
    return color;
  }
  

  getFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase();
  }
}
