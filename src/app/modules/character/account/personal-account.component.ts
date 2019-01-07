import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
	selector: 'app-personal-account',
	templateUrl: './personal-account.component.html',
	styleUrls: ['./personal-account.component.scss']
})

export class PersonalAccountComponent implements OnInit {

	constructor(private db : AngularFireDatabase) { }
	
	ngOnInit() { }

}
