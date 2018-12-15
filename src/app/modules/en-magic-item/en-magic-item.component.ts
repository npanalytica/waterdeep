import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-en-magic-item',
	templateUrl: './en-magic-item.component.html',
	styleUrls: ['./en-magic-item.component.scss']
})
export class EnMagicItemComponent implements OnInit {
	
	item$ : Observable<any>

	constructor(route : ActivatedRoute, db : AngularFireDatabase) {
		route.paramMap.subscribe(params => {
			let url = `/magic-items/${params.get('id')}`
			this.item$ = db.object(url).valueChanges()
		})
	}
	
	ngOnInit() { }

}
