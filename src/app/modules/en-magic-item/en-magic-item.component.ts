import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MagicItemsService } from 'src/app/services/magic-items.service';

@Component({
	selector: 'app-en-magic-item',
	templateUrl: './en-magic-item.component.html',
	styleUrls: ['./en-magic-item.component.scss']
})
export class EnMagicItemComponent implements OnInit {
	
	item : any

	constructor(route : ActivatedRoute, MagicItems : MagicItemsService) {
		route.paramMap.subscribe(params => {
			this.item = MagicItems.get(params.get('id'))
		})
	}
	
	ngOnInit() { }

}
