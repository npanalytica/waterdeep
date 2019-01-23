import { Component, ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuService } from 'src/app/services/menu.service';
import { MatSidenavContent } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.container.html',
	styleUrls: ['./app.container.scss']
})
export class AppComponent implements OnInit {

	@ViewChild('snav') snav
	@ViewChild('mainView') mainView : MatSidenavContent

	constructor(private MenuService : MenuService) {
	}

	ngOnInit() : void {
		this.MenuService.setSideNavRef(this.snav)
		this.MenuService.setMainView(this.mainView)
	}

}
