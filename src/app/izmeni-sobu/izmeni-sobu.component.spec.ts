import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniSobuComponent } from './izmeni-sobu.component';

describe('IzmeniSobuComponent', () => {
  let component: IzmeniSobuComponent;
  let fixture: ComponentFixture<IzmeniSobuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniSobuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniSobuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
