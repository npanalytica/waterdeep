import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SessionService } from 'src/app/services/session.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.container.html',
	styleUrls: ['./app.container.scss']
})
export class AppComponent {

	session : SessionService
	loaded : boolean = false
	mobileQuery : MediaQueryList
	menu : MenuService

	private _mobileQueryListener: () => void

	constructor(
		Session : SessionService,
		Menu : MenuService,
		changeDetectorRef : ChangeDetectorRef,
		media : MediaMatcher
	) {
		this.menu = Menu
		this.session = Session
		this.mobileQuery = media.matchMedia('(max-width: 1200px)')
		this._mobileQueryListener = () => changeDetectorRef.detectChanges()
		this.mobileQuery.addListener(this._mobileQueryListener)
	}

	ngOnDestroy() : void {
		this.mobileQuery.removeListener(this._mobileQueryListener)
	}

	search() {
		console.log('searching!')
	}

}
