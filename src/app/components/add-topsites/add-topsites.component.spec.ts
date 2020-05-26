import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopsitesComponent } from './add-topsites.component';

describe('AddTopsitesComponent', () => {
  let component: AddTopsitesComponent;
  let fixture: ComponentFixture<AddTopsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTopsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
