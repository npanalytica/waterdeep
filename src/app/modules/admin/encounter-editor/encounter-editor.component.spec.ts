import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterEditorComponent } from './encounter-editor.component';

describe('EncounterEditorComponent', () => {
  let component: EncounterEditorComponent;
  let fixture: ComponentFixture<EncounterEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
