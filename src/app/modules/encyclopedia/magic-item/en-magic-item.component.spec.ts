import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnMagicItemComponent } from './en-magic-item.component';

describe('EnMagicItemComponent', () => {
  let component: EnMagicItemComponent;
  let fixture: ComponentFixture<EnMagicItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnMagicItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnMagicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
