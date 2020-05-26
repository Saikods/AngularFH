import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsitesComponent } from './topsites.component';

describe('TopsitesComponent', () => {
  let component: TopsitesComponent;
  let fixture: ComponentFixture<TopsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
