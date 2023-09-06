import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-item-list',
  templateUrl: './address-item-list.component.html',
  styleUrls: ['./address-item-list.component.scss']
})
export class AddressItemListComponent {

  @Input() item: any = {}

  getFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase();
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

}
