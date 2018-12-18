import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class SessionService {

	user : string = null
	inventory$ : Observable<any>

	constructor(private db : AngularFireDatabase) {
		this.user = localStorage.getItem('user')
	}

	setUser(user : string) {
		localStorage.setItem('user', user)
		this.user = user
	}

	addObject(route : string, id : string, object : any) {
		let url = `/users/${this.user}/${route}/${id}`
		this.db.object(url).set(object)
	}

	removeObject(route : string) {
		let url = `/users/${this.user}/${route}`
		this.db.object(url).remove()
	}
	
}
