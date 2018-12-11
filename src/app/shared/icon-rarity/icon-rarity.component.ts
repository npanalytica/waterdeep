import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'icon-rarity',
	templateUrl: './icon-rarity.component.html',
	styleUrls: ['./icon-rarity.component.scss']
})
export class IconRarityComponent implements OnInit {
	
	@Input() rarity : string
	symbol : string
	text : string

	constructor() { }
	
	ngOnInit() {
		this.symbol = this.rarity[0].toUpperCase()
		this.text = this.rarity.replace('_', ' ').toLowerCase()
	}

}
