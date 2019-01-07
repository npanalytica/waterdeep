import { Component } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs';

@Component({
	selector: 'app-shops',
	templateUrl: './shops.component.html',
	styleUrls: ['./shops.component.scss']
})
export class ShopsComponent {
	shops$ : Observable<any>

	constructor(db : AngularFireDatabase) {
		this.shops$ = db.list('/shops').valueChanges()
	}

}
