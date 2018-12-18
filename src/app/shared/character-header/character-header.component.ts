import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'character-header',
	templateUrl: './character-header.component.html',
	styleUrls: ['./character-header.component.scss']
})
export class CharacterHeaderComponent implements OnInit {
	
	@Input() character : any
	@Input() active : string

	constructor() { }
	
	ngOnInit() { }

}
