import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcAdderComponent } from './npc-adder.component';

describe('NpcAdderComponent', () => {
  let component: NpcAdderComponent;
  let fixture: ComponentFixture<NpcAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
