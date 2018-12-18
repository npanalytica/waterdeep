import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagicItemsService } from 'src/app/services/magic-items.service';
import { SessionService } from 'src/app/services/session.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
	selector: 'app-en-magic-item',
	templateUrl: './en-magic-item.component.html',
	styleUrls: ['./en-magic-item.component.scss']
})
export class EnMagicItemComponent implements OnInit {
	
	loaded : boolean = true
	@Input('item') item : any
	inventory : any

	constructor(
		private session : SessionService,
		private db : AngularFireDatabase,
		private route : ActivatedRoute,
		private MagicItems : MagicItemsService
	) { }
	
	ngOnInit() {
		// Else load inventory
		this.route.paramMap.subscribe(params => {
			if(!this.item)
				this.item = this.MagicItems.get(params.get('id'))
			let url = `/users/${this.session.user}/inventory/magic-items/${this.item.id}`
			this.db.object(url).valueChanges().subscribe(res => {
				this.inventory = res
				this.loaded = true
			})
		})
	}

	loadInventory() {
		
	}

	addToInventory() : void {
		this.session.addObject('/inventory/magic-items', this.item.id, this.item)
	}

	removeFromInventory() : void {
		let url = `/inventory/magic-items/${this.item.id}`
		this.session.removeObject(url)
	}

}
