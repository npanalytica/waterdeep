import { Component, OnInit } from '@angular/core'
import { NavGroups } from './nav-items'

@Component({
	selector: 'side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
	
	NavGroups = NavGroups

	//selectedGroup = NavGroups[0]

	constructor() { }
	
	ngOnInit() { }

}
