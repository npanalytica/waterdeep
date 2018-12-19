import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'number-slider',
	templateUrl: './number-slider.component.html',
	styleUrls: ['./number-slider.component.scss']
})
export class NumberSliderComponent implements OnInit {
	
	@Input() even : boolean // If the row is even or odd
	@Input() name : string // The name to display in header
	@Input() image : string // The icon image to display next to the name
	@Input() object : any // The parent object whose property is being modified
	@Input() prop : string // The property in object to modify
	@Input() displayBonus : boolean = false // Whether or not to calculate the + bonus
	@Input() proficiency : string = null 	// Name of array containing proficiencies
											// (e.g, 'saves', 'proficiencies')
	@Input() isBonus : boolean = false // If number is raw bonus (e.g, athletics)
	@Output() onChange = new EventEmitter() // Emit when change is detected

	constructor() { }
	
	ngOnInit() { }

	increase() {
		this.object[this.prop]++
		this.onChange.emit('complete')
	}

	decrease() {
		this.object[this.prop]--
		this.onChange.emit('complete')
	}

	calculateStatBonus() : string {
		let mod = Math.floor((this.object[this.prop] - 10) / 2);
		return mod >= 0 ? `+${mod}` : `${mod}`
	}

	isProficient() : boolean {
		if(!this.proficiency) return
		let proficiencies = this.object[this.proficiency]
		let index = proficiencies.indexOf(this.prop)
		return index !== -1
	}

	toggleProficiency() : void {
		if(!this.proficiency) return
		let proficiencies = this.object[this.proficiency]
		let index = proficiencies.indexOf(this.prop)
		if(index === -1) {
			proficiencies.push(this.prop)
		} else {
			proficiencies.splice(index, 1)
		}
		this.onChange.emit()
	}

}
