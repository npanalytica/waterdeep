import * as _ from 'underscore'
import { Component, OnInit } from '@angular/core'
import { WeaponsService } from 'src/app/services/weapons.service'

@Component({
	selector: 'app-en-weapons',
	templateUrl: './en-weapons.component.html',
	styleUrls: ['./en-weapons.component.scss']
})

export class EnWeaponsComponent implements OnInit {
	
	loaded : Boolean = false
	weaponTypes : Array<any> = []
	weapons : Array<any>

	constructor(Weapons : WeaponsService) {

		this.weapons = Weapons.getArray()
		let groups = _.groupBy(this.weapons, 'family')
		for(let name in groups) {
			this.weaponTypes.push({
				name: name,
				weapons: groups[name]
			})
		}
	}
	
	ngOnInit() { }

}
