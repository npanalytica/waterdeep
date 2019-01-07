import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
	
	loading : boolean = false
	notFound : boolean = false

	constructor(
		private session : SessionService,
		private router : Router,
		private db : AngularFireDatabase
	) { }
	
	ngOnInit() { }

	login(username : string) {
		this.loading = true
		this.notFound = false
		this.db.object(`/users/${username}`).valueChanges()
		.subscribe(user => {
			this.loading = false
			if(user) {
				this.session.setUser(username as string)
				this.router.navigate(['/'])
			} else {
				this.notFound = true
			}
		})
	}

}
