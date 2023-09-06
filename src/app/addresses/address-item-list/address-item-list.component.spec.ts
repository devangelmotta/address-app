import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressItemListComponent } from './address-item-list.component';

describe('AddressItemListComponent', () => {
  let component: AddressItemListComponent;
  let fixture: ComponentFixture<AddressItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressItemListComponent]
    });
    fixture = TestBed.createComponent(AddressItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
