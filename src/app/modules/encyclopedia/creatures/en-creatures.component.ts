import * as _ from 'underscore'
import { Component, OnInit } from '@angular/core'
import { Constants } from 'src/app/lib/constants';
import { CreaturesService } from 'src/app/services/creatures.service'

@Component({
	selector: 'app-en-creatures',
	templateUrl: './en-creatures.component.html',
	styleUrls: ['./en-creatures.component.scss']
})
export class EnCreaturesComponent implements OnInit {
	
	creatures : Array<any>

	creatureTypes = []
	creaturesCR = []
	selectedType : string = null
	selectedCRS : Array<string> = []
	filterView : string = 'types'

	constructor(Creatures : CreaturesService) {

		this.creatures = Creatures.getArray()

		// Challenge rating filters
		this.creaturesCR[0] = Constants.CreatureChallengeRatings.slice(0, 7)
		this.creaturesCR[1] = Constants.CreatureChallengeRatings.slice(7, 14)
		this.creaturesCR[2] = Constants.CreatureChallengeRatings.slice(14, 21)
		this.creaturesCR[3] = Constants.CreatureChallengeRatings.slice(21, 28)
		this.creaturesCR[4] = Constants.CreatureChallengeRatings.slice(28, 34)

		// Type filters
		this.creatureTypes[0] = Constants.CreatureTypes.slice(0, 8)
		this.creatureTypes[1] = Constants.CreatureTypes.slice(8, 15)
	}
	
	ngOnInit() { }

	toggleSelectedType(value : string) {
		this.selectedType = value == this.selectedType ? null : value
	}

	CRisSelected(value : string) {
		return this.selectedCRS.includes(value)
	}

	toggleSelectedCRS(value : string) {
		let index = this.selectedCRS.indexOf(value)
		if(index !== -1) {
			this.selectedCRS.splice(index, 1)
		} else {
			this.selectedCRS.push(value)
		}
	}

}
