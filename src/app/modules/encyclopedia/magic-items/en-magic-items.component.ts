import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/lib/constants';
import { MagicItemsService } from 'src/app/services/magic-items.service';

@Component({
	selector: 'app-en-magic-items',
	templateUrl: './en-magic-items.component.html',
	styleUrls: ['./en-magic-items.component.scss']
})
export class EnMagicItemsComponent implements OnInit {
	
	items : Array<any>
	itemTypes : Array<string> = Constants.MagicItemTypes
	itemRarities : Array<any> = Constants.MagicItemRarities
	selectedRarity : string = null
	selectedType : string = null

	constructor(MagicItems : MagicItemsService) {
		this.items = MagicItems.getArray()
	}
	
	ngOnInit() { }

	toggleSelectedRarity(value : string) {
		this.selectedRarity = value == this.selectedRarity ? null : value
	}

	toggleSelectedType(value : string) {
		this.selectedType = value == this.selectedType ? null : value
	}

}
