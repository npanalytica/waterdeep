import * as _ from 'underscore'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MenuService } from 'src/app/services/menu.service'
import { ICreature } from 'src/app/types'
import { AngularFireDatabase } from 'angularfire2/database'
import { CreatureTypeIcons } from 'src/lib/constants'

@Component({
	selector: 'app-bestiary',
	templateUrl: './bestiary.component.html',
	styleUrls: ['./bestiary.component.scss']
})
export class BestiaryComponent implements OnInit {
	
	loading : boolean = true
	bestiary : Array<ICreature>
	filtered : Array<ICreature>
	icons = CreatureTypeIcons
	@ViewChild('filterInput') filterInput


	constructor(
		private db : AngularFireDatabase,
		private Menu : MenuService
	) {
		this.setMenuData()
		this.db.list('creatures').valueChanges().subscribe(res => {
			this.loading = false
			this.bestiary = (res as Array<ICreature>)
			this.filtered = (res as Array<ICreature>)
		})
	}


	setMenuData() : void {
		this.Menu.header = 'Bestiary'
		this.Menu.actions = [
			{ icon: 'autorenew', name: 'Reset filters', fn: () => this.resetFilter() }
		]
	}

	getIcon(type : string) : string {
		return CreatureTypeIcons[type] 
			? CreatureTypeIcons[type] : CreatureTypeIcons['default']
	}
	
	ngOnInit() { }

	resetFilter() : void {
		this.fakeLoad()
		this.filtered = this.bestiary
	}

	filterBy(prop : string, value : string) {
		this.fakeLoad()
		this.filtered = _.filter(this.bestiary, creature => creature[prop] == value)
	}

	fakeLoad(time?) : void {
		time = time || 160
		this.loading = true
		this.Menu.scrollToTop()
		setTimeout(() => this.loading = false, time)
	}

	txtFilterVisible = false
	toggleTxtFilter() : void {
		this.txtFilterVisible = !this.txtFilterVisible
		if(this.txtFilterVisible) this.filterInput.nativeElement.focus()
	}

}
