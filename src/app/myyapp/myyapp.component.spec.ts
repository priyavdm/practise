import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyyappComponent } from './myyapp.component';

describe('MyyappComponent', () => {
  let component: MyyappComponent;
  let fixture: ComponentFixture<MyyappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyyappComponent]
    });
    fixture = TestBed.createComponent(MyyappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
