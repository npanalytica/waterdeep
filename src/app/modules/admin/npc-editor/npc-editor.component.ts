import { Component, OnInit, HostListener } from '@angular/core'

@Component({
	selector: 'app-npc-editor',
	templateUrl: './npc-editor.component.html',
	styleUrls: ['./npc-editor.component.scss']
})
export class AdminNPCEditorComponent implements OnInit {
	
	constructor() { }
	
	fontSize = 10

	decrease() {
		this.fontSize--
	}

	ngOnInit() { }

}
