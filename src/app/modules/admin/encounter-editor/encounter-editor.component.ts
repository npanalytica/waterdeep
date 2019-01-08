import * as _ from 'underscore'
import { Component, OnInit } from '@angular/core'
import { CreaturesService } from 'src/app/services/creatures.service'
import { Helpers } from 'src/app/lib/helpers';
import { Constants } from 'src/app/lib/constants';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NpcAdderComponent } from 'src/app/shared/npc-adder/npc-adder.component';

@Component({
	selector: 'app-encounter-editor',
	templateUrl: './encounter-editor.component.html',
	styleUrls: ['./encounter-editor.component.scss']
})
export class EncounterEditorComponent implements OnInit {

	enemiesList : Array<any>
	creatures : Array<any>

	constructor(
		public dialog : MatDialog,
		public snackBar : MatSnackBar,
		creatures : CreaturesService
	) {
		this.enemiesList = []
		this.creatures = creatures.getList()
	}
	
	ngOnInit() {
		//this.showCreatures()
	}

	showCreatures() : void {
		const dialogRef = this.dialog.open(
			NpcAdderComponent, {
			width: '100%',
			height: '100%',
			panelClass: 'no-padding'
		})
		dialogRef.componentInstance.output = function(creature) {
			console.log('shit', creature)
		}
	}

	addCreature(enemy) {
		console.log(enemy)
		let message = `Added "${enemy.name}"`
		this.snackBar.open(message, 'wtf?', {
			duration: 2000
		})
		this.enemiesList.push(enemy)
	}

	get enemies() : Array<any> {
		return _.uniq(this.enemiesList)
	}

	get XP() : number {
		return Helpers.encounterXP(this.enemiesList)
	}

	// Returns the number of a specific enemy present in an encounter
	getEnemyCount(enemy : any) : number {
		let matches = _.where(this.enemiesList, {name: enemy.name})
		return matches.length
	}
	
	removeEnemy(enemy : any) : void {
		let index = this.enemiesList.indexOf(enemy)
		this.enemiesList.splice(index, 1)
	}

}
