import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNPCEditorComponent } from './npc-editor.component';

describe('NpcEditorComponent', () => {
  let component: AdminNPCEditorComponent;
  let fixture: ComponentFixture<AdminNPCEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNPCEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNPCEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
