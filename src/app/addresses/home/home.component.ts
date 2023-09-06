import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddressService } from '../services/address.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute
    ) { }

  id!: number;
  addresses: any = []

  ngOnInit() {
    this.getAddresses()
  }


  getAddresses(): void {
    this.addressService.getAddresses().subscribe(
      (response) => {
        console.log(response);
        this.addresses = response; 
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
