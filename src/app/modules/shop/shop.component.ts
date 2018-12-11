import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
	
	shop$ : Observable<any>
	cols : Array<string> = ['name', 'rarity', 'attunement', 'price']

	constructor(
		route : ActivatedRoute,
		db : AngularFireDatabase) {
		route.paramMap.subscribe(params => {
			let url = `/shops/${params.get('id')}`
			this.shop$ = db.object(url).valueChanges()
		})
	}
	
	ngOnInit() { }

}
