import { Component, OnInit } from '@angular/core'
import { Constants } from 'src/app/lib/constants'
import { AngularFireDatabase } from 'angularfire2/database'
import { SessionService } from 'src/app/services/session.service'
import { CharacterBuilder } from 'src/app/lib/character-builder'

@Component({
	selector: 'app-character-edit',
	templateUrl: './character-edit.component.html',
	styleUrls: ['./character-edit.component.scss']
})
export class CharacterEditComponent {
	
	loaded : boolean = false
	character : any

	characterUrl : string
	stats : Array<any>
	proficiencies : Array<any>

	constructor(
		private session : SessionService,
		private db : AngularFireDatabase
	) {
		this.stats = Constants.MainStats
		this.proficiencies = Constants.Proficiencies

		this.characterUrl = `/users/${session.user}`
		db.object(this.characterUrl).valueChanges().subscribe(res => {
			if(!this.loaded) {
				this.character = res
				CharacterBuilder.setDataIfMissing(this.character)
				this.loaded = true
			}
		})
	}

	update() {
		this.db.object(this.characterUrl).update(this.character)
	}

	calculateBonuses() {
		CharacterBuilder.calculateBonuses(this.character)
		this.update()
	}

}
