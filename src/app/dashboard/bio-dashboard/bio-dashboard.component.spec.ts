import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDashboardComponent } from './bio-dashboard.component';

describe('BioDashboardComponent', () => {
  let component: BioDashboardComponent;
  let fixture: ComponentFixture<BioDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
