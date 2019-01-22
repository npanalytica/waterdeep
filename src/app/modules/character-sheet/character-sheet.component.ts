import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
	selector: 'app-character-sheet',
	templateUrl: './character-sheet.component.html',
	styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
	
	name = 'test'
	
	constructor(private Menu : MenuService) {
		this.Menu.actions = [
			{name: 'New character', icon: 'add', fn: () => this.action() },
			{name: 'Edit picture', icon: 'insert_photo', fn: this.action },
			{name: 'Find score', icon: 'score', fn: this.action} ,
		]
	}
	
	action() : void {
		console.log('action executed!!!', this.name)
	}
	
	ngOnInit() { }

}
