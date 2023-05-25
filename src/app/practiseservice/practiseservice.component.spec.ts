import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseserviceComponent } from './practiseservice.component';

describe('PractiseserviceComponent', () => {
  let component: PractiseserviceComponent;
  let fixture: ComponentFixture<PractiseserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PractiseserviceComponent]
    });
    fixture = TestBed.createComponent(PractiseserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
