import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AngularFireDatabase } from 'angularfire2/database';
import { SessionService } from 'src/app/services/session.service';
import { Constants } from 'src/app/lib/constants';

@Component({
	selector: 'app-character-sheet',
	templateUrl: './character-sheet.component.html',
	styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
	
	character$ : Observable<any>
	proficiencies : Array<any>
	mainStats : Array<string>

	constructor(
		private session : SessionService,
		private db : AngularFireDatabase
	) {
		this.mainStats = Constants.MainStats
		this.proficiencies = Constants.Proficiencies
		let url = `/users/${session.user}`
		this.character$ = db.object(url).valueChanges()
	}
	
	ngOnInit() { }

	update(data) : void {
		this.db.object(`/users/${this.session.user}`).update(data)
	}

}
