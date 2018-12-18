import { Component, OnInit } from '@angular/core'
import { SpellsService } from 'src/app/services/spells.service'
import { ISearchResult } from 'src/app/types'
import { CreaturesService } from 'src/app/services/creatures.service'
import { MagicItemsService } from 'src/app/services/magic-items.service'

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	
	MAX_RESULTS : number = 25

	spells : Array<any>
	magicItems : Array<any>
	creatures : Array<any>
	results : Array<ISearchResult> = []

	constructor(
		Spells : SpellsService,
		Creatures : CreaturesService,
		MagicItems : MagicItemsService
	) {
		this.creatures = Creatures.getArray()
		this.spells = Spells.getArray()
		this.magicItems = MagicItems.getArray()
	}

	search(needle : string) {
		if(needle.length == 0) {
			this.results = []
			return
		}
		let spells = this.filter(
			needle, this.spells, ['name'], 'spell', '/encyclopaedia/spells')
		let magicItems = this.filter(
			needle, this.magicItems, ['name'], 'item', '/encyclopaedia/magic-items')
		let creatures = this.filter(
			needle, this.creatures, ['name'], 'creature', '/encyclopaedia/beastiary')
		this.results = spells.concat(magicItems).concat(creatures)
	}
	
	ngOnInit() { }

	filter(
		needle : string,
		items : Array<any>,
		properties: Array<string>,
		type : string,
		urlBase : string
	) : Array<ISearchResult> {
		needle = needle.toLowerCase()
		let filtered = []
		items.forEach(item => {
			let pass = true
			properties.forEach(property => {
				if(!item[property].toLowerCase().includes(needle)) pass = false
			})
			if(pass) filtered.push({
				name: item.name,
				type: type,
				url: `${urlBase}/${item.id}`
			})
		})
		return filtered
	}

}
