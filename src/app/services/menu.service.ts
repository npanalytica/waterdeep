import { MatSidenav } from '@angular/material';
import { INavMenuAction } from '../types';

export class MenuService {
	
	display : boolean = true
	header : string
	icon : string
	sideNav : MatSidenav // A reference to the side navigation element
	actions : Array<INavMenuAction>
	
	constructor() {
		this.header = 'Midgard DnD'
		this.icon = 'spiked-dragon-head'
	}

	setSideNavRef(element : MatSidenav) : void {
		this.sideNav = element
	}

	toggleSideNav() : void {
		if(this.sideNav) this.sideNav.toggle()
	}
	
}