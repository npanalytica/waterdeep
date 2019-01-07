import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { SpellsService } from 'src/app/services/spells.service'
import { ISearchResult } from 'src/app/types'
import { CreaturesService } from 'src/app/services/creatures.service'
import { MagicItemsService } from 'src/app/services/magic-items.service'

@Component({
	selector: 'dnd-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	
	MAX_RESULTS : number = 50

	@Input() only : string // creatures, spells, magic-items
	@Output() onSelect = new EventEmitter()

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
			needle, this.spells, ['name'], 'spell', '/encyclopedia/spells')
		let magicItems = this.filter(
			needle, this.magicItems, ['name'], 'item', '/encyclopedia/magic-items')
		let creatures = this.filter(
			needle, this.creatures, ['name'], 'creature', '/encyclopedia/beastiary')
		if(!this.only) {
			this.results = spells.concat(magicItems).concat(creatures)
		} else {
			switch(this.only) {
				case 'creatures':
					this.results = creatures
					break
				case 'magic-items':
					this.results = magicItems
					break
				case 'spells':
					this.results = spells
					break
			}
		}
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
				originalItem: item,
				url: `${urlBase}/${item.id}`
			})
		})
		return filtered
	}

	addItem($event : MouseEvent, item : any) : void {
		$event.stopPropagation()
		this.onSelect.emit(item.originalItem)
	}

}
