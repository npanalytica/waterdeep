import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Constants } from 'src/app/lib/constants';

@Component({
	selector: 'app-en-magic-items',
	templateUrl: './en-magic-items.component.html',
	styleUrls: ['./en-magic-items.component.scss']
})
export class EnMagicItemsComponent implements OnInit {
	
	items$ : Observable<any>
	itemTypes : Array<string> = Constants.MagicItemTypes
	itemRarities : Array<any> = Constants.MagicItemRarities
	selectedRarity : string = null
	selectedType : string = null

	constructor(db : AngularFireDatabase) {
		this.items$ = db.list('/magic-items').valueChanges()
	}
	
	ngOnInit() { }

	toggleSelectedRarity(value : string) {
		this.selectedRarity = value == this.selectedRarity ? null : value
	}

	toggleSelectedType(value : string) {
		this.selectedType = value == this.selectedType ? null : value
	}

}
