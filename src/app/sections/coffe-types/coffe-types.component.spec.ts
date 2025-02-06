import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeTypesComponent } from './coffe-types.component';

describe('CoffeTypesComponent', () => {
  let component: CoffeTypesComponent;
  let fixture: ComponentFixture<CoffeTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
