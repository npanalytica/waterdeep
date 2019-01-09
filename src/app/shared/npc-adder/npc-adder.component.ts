import * as _ from 'underscore'
import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { CreaturesService } from 'src/app/services/creatures.service'
import { Constants } from 'src/app/lib/constants';
import { MatSliderChange, MatDialog, MatSnackBar, MatSelectChange } from '@angular/material';
import { EnCreatureComponent } from 'src/app/modules/encyclopedia/creature/en-creature.component';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'npc-adder',
	templateUrl: './npc-adder.component.html',
	styleUrls: ['./npc-adder.component.scss']
})
export class NpcAdderComponent implements OnInit {
	
	filterDisplay = null

	showFilters = false

	filtered : Array<any>
	creatures : Array<any>
	creatureTypes : Array<string> = Constants.CreatureTypes

	MAX_RESULTS = 14
	MORE_RESULTS = 10
	n_displayed_results = this.MAX_RESULTS

	needle : string = ''
	selectedCR : number = -1
	selectedType : string = ''

	added : Array<any>

	onAdd : Function
	onRemove : Function
	onClose : Function

	constructor(
		public snackBar : MatSnackBar,
		public dialog : MatDialog,
		creatures : CreaturesService
	) {
		this.creatures = creatures.getArray()
		this.filtered = this.creatures
	}
	
	ngOnInit() { }

	onCloseDialog() : void {
		this.onClose()
	}

	addCreature($event : MouseEvent, enemy : any) {
		$event.stopPropagation()
		this.onAdd(enemy)
		let message = `Added "${enemy.name}"`
		let snackBarRef = this.snackBar.open(message, 'Undo', {
			duration: 2200
		})
		// Undo
		snackBarRef.onAction().subscribe(() => {
			this.onRemove(enemy)
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

	filterByName(needle : string) : void {
		let _needle = needle.toLowerCase()
		this.filter(creature => 
			creature.name.toLowerCase().indexOf(_needle) !== -1
		)
	}

	toggleFilterDisplay(value : string) {
		this.filterDisplay = this.filterDisplay == value ? null : value
	}

	filterByCR($event : MatSliderChange) : void {
		let needleCR = Constants.CreatureChallengeRatings[$event.value]
		this.filter(creature => 
			!needleCR || creature.challenge_rating == needleCR
		)
	}

	filterByType($event : MatSelectChange) : void {
		this.filter(creature => 
			!$event.value || creature.type == $event.value)
	}

	private filter(condition : Function) : void {
		let needle = this.needle.toLowerCase()
		let needleCR = Constants.CreatureChallengeRatings[this.selectedCR]
		this.n_displayed_results = this.MAX_RESULTS
		this.filtered = _.filter(this.creatures, creature => {
			let name = creature.name.toLowerCase()
			let cr = creature.challenge_rating
			return condition(creature)
		})
	}

	getNumberInList(creature : any) : number {
		let matches = _.where(this.added, { name: creature.name })
		return matches.length
	}

}
