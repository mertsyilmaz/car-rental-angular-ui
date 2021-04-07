import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBrandComponent } from './detail-brand.component';

describe('DetailBrandComponent', () => {
  let component: DetailBrandComponent;
  let fixture: ComponentFixture<DetailBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
