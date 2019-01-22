import { Component, Input, HostListener, Inject } from '@angular/core'
import { MenuService } from 'src/app/services/menu.service'
import { DOCUMENT } from '@angular/common'
import { INavMenuAction } from 'src/app/types';

@Component({
	selector: 'top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
	
	@Input() header : string
	menu : MenuService

	constructor(private MenuService : MenuService) {
		this.menu = MenuService
	}

	toggleSideNav() : void {
		this.menu.toggleSideNav()
	}

	performAction(action : INavMenuAction) : void {
		action.fn()
	}

}
