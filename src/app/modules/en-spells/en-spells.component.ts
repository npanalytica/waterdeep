import * as _ from 'underscore'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { FormControl } from '@angular/forms'
import { map, startWith } from 'rxjs/operators'
import { Router } from '@angular/router'
import { Constants } from 'src/app/lib/constants'
import { SpellsService } from 'src/app/services/spells.service'

@Component({
	selector: 'app-en-spells',
	templateUrl: './en-spells.component.html',
	styleUrls: ['./en-spells.component.scss']
})

export class EnSpellsComponent implements OnInit {
	
	loaded = false
	control = new FormControl()
	classes : Array<string>
	selectedClass : string
	spells : Array<any> = []
	levels : Array<any>
	filteredSpells : Observable<string[]>

	constructor(
		private router : Router,
		Spells : SpellsService) {
		this.classes = Constants.SpellCastingClasses
		this.spells = Spells.getArray()
		this.levels = this._groupByLevel(this.spells)
	}
	
	ngOnInit() {
		this.filteredSpells = this.control.valueChanges
			.pipe(
				startWith(''),
				map(value => this._filter(value))
			)
	}


	/*
	*  Takes an array of spells and returns an array of spells grouped
	*  by level.
	* { name : string, spells : Array<spell> }
	*/
	private _groupByLevel(spells : Array<any>) : Array<any> {
		let spellsByLevel = _.groupBy(spells, 'level')
		let grouping = []
		for(let level in spellsByLevel) {
			grouping.push({
				name: level,
				spells: spellsByLevel[level]
			})
		}
		return _.sortBy(grouping, g => g.name == 'Cantrip' ? 0 : g.name[0])
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase()
		return this.spells.filter(spell =>
			spell.name.toLowerCase().includes(filterValue)
		)
	}

	updateSelectedClass(className : string) : void {
		this.selectedClass = this.selectedClass == className ? null : className
		this.filterSpells()
	}

	filterSpells() : void {
		let filtered = _.filter(this.spells, spell => 
			spell.class.includes(this.selectedClass)
		)
		if(this.selectedClass == 'Todas' || !this.selectedClass)
			filtered = this.spells
		this.levels = this._groupByLevel(filtered)
	}

	goToSpell(spell) : void {
		this.router.navigate(['/encyclopaedia', 'spells', spell.id])
	}

}
