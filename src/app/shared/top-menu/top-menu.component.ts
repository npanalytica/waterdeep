import { Component, Input, HostListener, Inject } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Devices } from 'src/app/lib/devices';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
	
	@Input() header : string

	coverOpacity : number // For hero to menu transition
	coords : string // For cover parallax
	headerLeftMargin : number // For getting the header out of the way of the menu btn
	headerBottomMargin : number // For getting the header out of the way of the menu btn
	headerFontSize : number // The header title font size in px
	subtitleFontSize : number // The header subtitle font size in px
	iconHeight : number // The height of the icon
	iconOpacity : number // The opacity of the icon

	constructor(private menu : MenuService, @Inject(DOCUMENT) private document : any) {
		this.updateValues()
	}

	@HostListener("window:scroll", []) onWindowScroll() {
		this.menu.onScroll(window.pageYOffset)
		this.updateValues()
	}

	private updateValues() {
		this.coords = `0% ${this.menu.height * 1.7}px`
		this.headerFontSize = this.menu.interpolate(22, 16)
		this.subtitleFontSize = this.menu.interpolate(18, 12)
		this.headerLeftMargin = this.menu.interpolate(12, 40)
		this.headerBottomMargin = this.menu.interpolate(14, 6)
		this.coverOpacity = this.menu.interpolate(0, 1)
		this.iconHeight = this.menu.interpolate(50, 30)
		this.iconOpacity = this.menu.interpolate(1, 0.6)
	}

	openFull() : void {
		let elem = document.documentElement;
		Devices.openFullscreen(elem)
	}

	toggleSidenav() : void {
		this.menu.sideNav.toggle()
	}
	
}
