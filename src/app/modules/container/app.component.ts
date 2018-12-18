import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SessionService } from 'src/app/services/session.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	session : SessionService
	loaded : boolean = false
	mobileQuery : MediaQueryList

	private _mobileQueryListener: () => void

	constructor(
		Session : SessionService,
		changeDetectorRef : ChangeDetectorRef,
		media : MediaMatcher
	) {
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
