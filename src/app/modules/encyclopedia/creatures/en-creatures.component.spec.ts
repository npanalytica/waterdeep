import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCreaturesComponent } from './en-creatures.component';

describe('EnCreaturesComponent', () => {
  let component: EnCreaturesComponent;
  let fixture: ComponentFixture<EnCreaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnCreaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCreaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
