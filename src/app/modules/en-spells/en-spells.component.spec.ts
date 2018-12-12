import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnSpellsComponent } from './en-spells.component';

describe('EnSpellsComponent', () => {
  let component: EnSpellsComponent;
  let fixture: ComponentFixture<EnSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnSpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
