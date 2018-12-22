import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material'
import { NumberPickerComponent } from '../number-picker/number-picker.component'

@Component({
	selector: 'hp-bar',
	templateUrl: './hp-bar.component.html',
	styleUrls: ['./hp-bar.component.scss']
})
export class HpBarComponent implements OnInit {
	
	@Input() character : any
	@Output() onChange = new EventEmitter() // Emit when change is detected

	constructor(public dialog : MatDialog) { }
	
	ngOnInit() { }

	increase() : void {
		if(this.character.hp < this.character.max_hp) {
			this.character.hp++
			this.onChange.emit('complete')
		}
	}

	decrease() : void {
		this.character.hp--
		this.onChange.emit('complete')
	}

	showDialog(action : string) : void {
		let dialogRef = this.dialog.open(NumberPickerComponent, {});
	
		dialogRef.afterClosed().subscribe(number => {
			if(isNaN(number)) return
			number = parseInt(number)
			switch(action) {
				case 'add':
					let newValue = this.character.hp + number
					this.character.hp = newValue > this.character.max_hp ?
						this.character.max_hp : newValue
					this.onChange.emit('complete')
					break
				case 'substract':
					this.character.hp -= number
					this.onChange.emit('complete')
					break
				case 'set':
					this.character.hp = number
					this.onChange.emit('complete')
					break
			}
		});
	}

}
