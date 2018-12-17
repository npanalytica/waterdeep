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

	calculateBonus(value : number) : string {
		let v = Math.floor(value / 2 - 5)
		return v > 0 ? `+${v}` : `${v}`
	}

}
