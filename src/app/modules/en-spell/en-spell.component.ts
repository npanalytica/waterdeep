import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-en-spell',
	templateUrl: './en-spell.component.html',
	styleUrls: ['./en-spell.component.scss']
})

export class EnSpellComponent implements OnInit {
	
	spell$ : Observable<any>

	constructor(route : ActivatedRoute, db : AngularFireDatabase) {
		route.paramMap.subscribe(params => {
			this.spell$ = db.object(`/spells/${params.get('id')}`).valueChanges()
		})
	}
	
	ngOnInit() { }

}
