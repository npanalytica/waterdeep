import { MatSidenav, MatSidenavContent } from '@angular/material';
import { INavMenuAction } from '../types';
import { ExtendedScrollToOptions } from '@angular/cdk/scrolling';

export class MenuService {
	
	display : boolean = true
	header : string
	icon : string
	sideNav : MatSidenav // A reference to the side navigation element
	mainView : MatSidenavContent
	actions : Array<INavMenuAction>
	
	constructor() {
		this.header = 'Midgard DnD'
		this.icon = 'spiked-dragon-head'
	}

	setSideNavRef(element : MatSidenav) : void {
		this.sideNav = element
	}

	setMainView(element : MatSidenavContent) : void {
		this.mainView = element
	}

	toggleSideNav() : void {
		if(this.sideNav) this.sideNav.toggle()
	}

	scrollToTop() : void {
		this.mainView.scrollTo({ top : 0})
	}
	
}