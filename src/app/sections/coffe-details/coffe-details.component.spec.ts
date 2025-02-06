import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeDetailsComponent } from './coffe-details.component';

describe('CoffeDetailsComponent', () => {
  let component: CoffeDetailsComponent;
  let fixture: ComponentFixture<CoffeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
