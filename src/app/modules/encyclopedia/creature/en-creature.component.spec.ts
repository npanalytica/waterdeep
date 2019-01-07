import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCreatureComponent } from './en-creature.component';

describe('EnCreatureComponent', () => {
  let component: EnCreatureComponent;
  let fixture: ComponentFixture<EnCreatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnCreatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
