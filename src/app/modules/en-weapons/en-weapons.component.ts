import * as _ from 'underscore'
import { Component, OnInit } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
	selector: 'app-en-weapons',
	templateUrl: './en-weapons.component.html',
	styleUrls: ['./en-weapons.component.scss']
})

export class EnWeaponsComponent implements OnInit {
	
	loaded : Boolean = false
	weaponTypes : Array<any> = []

	constructor(db : AngularFireDatabase) {
		db.list('/weapons').valueChanges()
		.subscribe(res => {
			// Turn the Firebase response into an array
			let weapons = []
			for(let id in res) weapons.push(res[id])
			// Group all weapons by weapon type
			let groups = _.groupBy(weapons, 'family')
			// Create an array of weapon types
			for(let name in groups) {
				this.weaponTypes.push({
					name: name,
					weapons: groups[name]
				})
			}
			this.loaded = true
		})
	}
	
	ngOnInit() { }

}
