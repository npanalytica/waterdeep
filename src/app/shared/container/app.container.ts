import { Component, ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuService } from 'src/app/services/menu.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.container.html',
	styleUrls: ['./app.container.scss']
})
export class AppComponent implements OnInit {

	@ViewChild('snav') snav

	constructor(private MenuService : MenuService) {
	}

	ngOnInit() : void {
		this.MenuService.setSideNavRef(this.snav)
	}

}
