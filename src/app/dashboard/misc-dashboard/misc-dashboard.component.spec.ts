import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscDashboardComponent } from './misc-dashboard.component';

describe('MiscDashboardComponent', () => {
  let component: MiscDashboardComponent;
  let fixture: ComponentFixture<MiscDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
