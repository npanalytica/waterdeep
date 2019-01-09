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

	creatures : Array<any>

	encounter = {
		enemies: []
	}

	constructor(
		public dialog : MatDialog,
		public snackBar : MatSnackBar,
		creatures : CreaturesService
	) {
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
		dialogRef.componentInstance.added = this.encounter.enemies
		dialogRef.componentInstance.onAdd = creature =>
			this.encounter.enemies.push(creature)
		dialogRef.componentInstance.onRemove = creature => {
			let index = this.encounter.enemies.indexOf(creature)
			this.encounter.enemies.splice(index, 1)
		}
		dialogRef.componentInstance.onClose = () => dialogRef.close()
	}

	get enemies() : Array<any> {
		return _.uniq(this.encounter.enemies)
	}

	get XP() : number {
		return Helpers.encounterXP(this.encounter.enemies)
	}

	// Returns the number of a specific enemy present in an encounter
	getEnemyCount(enemy : any) : number {
		let matches = _.where(this.encounter.enemies, {name: enemy.name})
		return matches.length
	}
	
	removeEnemy(enemy : any) : void {
		let index = this.encounter.enemies.indexOf(enemy)
		this.encounter.enemies.splice(index, 1)
	}

}
