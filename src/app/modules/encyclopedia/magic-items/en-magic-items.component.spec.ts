import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnMagicItemsComponent } from './en-magic-items.component';

describe('EnMagicItemsComponent', () => {
  let component: EnMagicItemsComponent;
  let fixture: ComponentFixture<EnMagicItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnMagicItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnMagicItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
