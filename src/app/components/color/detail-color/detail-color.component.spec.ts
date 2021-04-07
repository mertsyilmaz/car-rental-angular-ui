import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailColorComponent } from './detail-color.component';

describe('DetailColorComponent', () => {
  let component: DetailColorComponent;
  let fixture: ComponentFixture<DetailColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
