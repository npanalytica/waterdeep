import { Injectable } from '@angular/core'
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { SessionService } from '../services/session.service'

@Injectable()
export class LoggedInGuard implements CanActivate {
	
	constructor(
		private router: Router,
		private session : SessionService
	) { }
	
	canActivate(route, state: RouterStateSnapshot) {
		if(this.session.user) {
			return true
		} else {
			this.router.navigate(['sign-in'])
			return false
		}
	}

}
