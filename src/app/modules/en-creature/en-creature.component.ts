import * as _ from 'underscore'
import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Constants } from 'src/app/lib/constants'
import { CreaturesService } from 'src/app/services/creatures.service'
import { AngularFireDatabase } from 'angularfire2/database'
import { SessionService } from 'src/app/services/session.service'

@Component({
	selector: 'app-en-creature',
	templateUrl: './en-creature.component.html',
	styleUrls: ['./en-creature.component.scss']
})
export class EnCreatureComponent implements OnInit {

	loaded : boolean = false
	@Input('creature') creature : any
	inventory : any

	constructor(
		private session : SessionService,
		private db : AngularFireDatabase,
		private route : ActivatedRoute,
		private Creatures : CreaturesService
	) { }

	getProficiencyString(creature : any) : string {
		let proficiencies = []
		let available = _.pluck(Constants.Proficiencies, 'name')
		available.forEach(proficiency => {
			let score = creature[proficiency]
			if(score) {
				// Add a plus on positive scores
				let _score = score >= 0 ? `+${score}` : `${score}`
				proficiencies.push(`${proficiency} ${_score}`)
			}
		})
		return proficiencies.join(', ')
	}
	
	ngOnInit() { 
		this.route.paramMap.subscribe(params => {
			if(!this.creature)
				this.creature = this.Creatures.get(params.get('id'))
			let url = `/users/${this.session.user}/inventory/familiars/${this.creature.id}`
			this.db.object(url).valueChanges().subscribe(res => {
				this.inventory = res
				this.loaded = true
			})
		})
	}

	addToInventory() : void {
		this.session.addObject('/inventory/familiars', this.creature.id, this.creature)
	}

	removeFromInventory() : void {
		let url = `/inventory/familiars/${this.creature.id}`
		this.session.removeObject(url)
	}

}
