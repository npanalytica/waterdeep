import { Component, OnInit, Input, HostListener } from '@angular/core';
import { isString } from 'util';

@Component({
	selector: 'top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
	
	@Input() header : string

	MIN_MENU_HEIGHT = 60
	MAX_MENU_HEIGHT = 200
	menuHeight = 200
	isFixed = false
	coverOpacity = 0

	constructor() { }
	
	ngOnInit() { }

	@HostListener("window:scroll", ['$event'])
	onWindowScroll(event) {
		let newHeight = this.MAX_MENU_HEIGHT - window.pageYOffset
		if(newHeight >= this.MIN_MENU_HEIGHT) {
			this.menuHeight = newHeight
		} else {
			this.menuHeight = this.MIN_MENU_HEIGHT
		}
		this.coverOpacity = window.pageYOffset  / this.MAX_MENU_HEIGHT
	}

}
