import * as _ from 'underscore'
import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { CreaturesService } from 'src/app/services/creatures.service'
import { Constants } from 'src/app/lib/constants';
import { MatSliderChange, MatDialog, MatSnackBar } from '@angular/material';
import { EnCreatureComponent } from 'src/app/modules/encyclopedia/creature/en-creature.component';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'npc-adder',
	templateUrl: './npc-adder.component.html',
	styleUrls: ['./npc-adder.component.scss']
})
export class NpcAdderComponent implements OnInit {
	
	filtered : Array<any>
	creatures : Array<any>
	creatureTypes : Array<Array<string>> = []

	MAX_RESULTS = 10
	MORE_RESULTS = 10
	n_displayed_results = this.MAX_RESULTS

	needle : string = ''
	selectedCR : number = -1
	selectedType : string = ''

	output : Function

	constructor(
		public snackBar : MatSnackBar,
		public dialog : MatDialog,
		creatures : CreaturesService
	) {
		this.creatures = creatures.getArray()
		this.filtered = this.creatures
		// Type filters
		this.creatureTypes[0] = Constants.CreatureTypes.slice(0, 8)
		this.creatureTypes[1] = Constants.CreatureTypes.slice(8, 15)
	}
	
	ngOnInit() { }

	addCreature($event : MouseEvent, enemy : any) {
		$event.stopPropagation()
		this.output(enemy)
		let message = `Added "${enemy.name}"`
		let snackBarRef = this.snackBar.open(message, 'Undo', {
			duration: 2200
		})
		// Undo
		snackBarRef.onAction().subscribe(() => {
			console.log('NO UNDO REMOVE', enemy.name)
		})
	}
	
	moreResults() {
		this.n_displayed_results += this.MORE_RESULTS
	}

	formatCRLabel(value: number | null) {
		return value == -1 ? 'All' :
			Constants.CreatureChallengeRatings[value]
	}

	showNPCDialog(creature : any) : void {
		let dialogRef = this.dialog.open(EnCreatureComponent, {
			width: '100%',
			height: '100%',
			panelClass: 'no-padding'
		})
		dialogRef.componentInstance.creature = creature
	}

	toggleSelectedType(value : string) {
		this.selectedType = value == this.selectedType ? null : value
		this.filter()
	}

	filter2($event : MatSliderChange) {
		this.selectedCR = $event.value
		this.filter()
	}

	filter() : void {
		let needle = this.needle.toLowerCase()
		let needleCR = Constants.CreatureChallengeRatings[this.selectedCR]
		this.n_displayed_results = this.MAX_RESULTS
		this.filtered = _.filter(this.creatures, creature => {
			let name = creature.name.toLowerCase()
			let cr = creature.challenge_rating
			return (
				// Name contains needle
				name.indexOf(needle) !== -1 &&
				// CR is either "All" or matches creature
				(!needleCR || cr == needleCR) &&
				// Type is null or matches creature
				(!this.selectedType || creature.type == this.selectedType)
			)
		})
	}

}
