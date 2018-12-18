import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SpellsService } from 'src/app/services/spells.service'
import { SessionService } from 'src/app/services/session.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
	selector: 'app-en-spell',
	templateUrl: './en-spell.component.html',
	styleUrls: ['./en-spell.component.scss']
})

export class EnSpellComponent implements OnInit {
	
	inventory : any
	loaded : boolean = false
	@Input('spell') spell : any

	constructor(
		private session : SessionService,
		private db : AngularFireDatabase,
		private route : ActivatedRoute,
		private Spells : SpellsService
	) { }
	
	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			if(!this.spell)
				this.spell = this.Spells.get(params.get('id'))
			let url = `/users/${this.session.user}/inventory/spellbook/${this.spell.id}`
			this.db.object(url).valueChanges().subscribe(res => {
				this.inventory = res
				this.loaded = true
			})
		})
	}

	addToInventory() : void {
		this.session.addObject('/inventory/spellbook', this.spell.id, this.spell)
	}

	removeFromInventory() : void {
		let url = `/inventory/spellbook/${this.spell.id}`
		this.session.removeObject(url)
	}

}
