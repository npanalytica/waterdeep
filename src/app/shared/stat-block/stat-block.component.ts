import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'stat-block',
	templateUrl: './stat-block.component.html',
	styleUrls: ['./stat-block.component.scss']
})
export class StatBlockComponent implements OnInit {
	
	@Input() creature : any

	constructor() { }
	
	ngOnInit() { }

	calculateBonus(value : number) : number {
		return Math.floor(value / 2 - 5)
	}

	save(stat : string) : number {
		return this.creature[`${stat}_save`] || this.calculateBonus(this.creature[stat])
	}

}
