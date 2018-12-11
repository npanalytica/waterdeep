import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRarityComponent } from './icon-rarity.component';

describe('IconRarityComponent', () => {
  let component: IconRarityComponent;
  let fixture: ComponentFixture<IconRarityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconRarityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
