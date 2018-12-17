import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SpellsService } from 'src/app/services/spells.service'

@Component({
	selector: 'app-en-spell',
	templateUrl: './en-spell.component.html',
	styleUrls: ['./en-spell.component.scss']
})

export class EnSpellComponent implements OnInit {
	
	spell : any

	constructor(route : ActivatedRoute, Spells : SpellsService) {
		route.paramMap.subscribe(params => {
			this.spell = Spells.get(params.get('id'))
		})
	}
	
	ngOnInit() { }

}
