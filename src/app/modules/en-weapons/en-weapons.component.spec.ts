import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWeaponsComponent } from './en-weapons.component';

describe('EnWeaponsComponent', () => {
  let component: EnWeaponsComponent;
  let fixture: ComponentFixture<EnWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
