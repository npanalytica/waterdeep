import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/lib/constants';
import { CreaturesService } from 'src/app/services/creatures.service';

@Component({
	selector: 'app-en-creature',
	templateUrl: './en-creature.component.html',
	styleUrls: ['./en-creature.component.scss']
})
export class EnCreatureComponent implements OnInit {

	creature : any

	constructor(route : ActivatedRoute, Creatures : CreaturesService) {
		route.paramMap.subscribe(params => {
			this.creature = Creatures.get(params.get('id'))
		})
	}

	getProficiencyString(creature : any) : string {
		let proficiencies = []
		Constants.Proficiencies.forEach(proficiency => {
			let score = creature[proficiency]
			if(score) {
				// Add a plus on positive scores
				let _score = score >= 0 ? `+${score}` : `${score}`
				proficiencies.push(`${proficiency} ${_score}`)
			}
		})
		return proficiencies.join(', ')
	}
	
	ngOnInit() { }

}
