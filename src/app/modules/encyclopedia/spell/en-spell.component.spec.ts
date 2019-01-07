import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnSpellComponent } from './en-spell.component';

describe('EnSpellComponent', () => {
  let component: EnSpellComponent;
  let fixture: ComponentFixture<EnSpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnSpellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
