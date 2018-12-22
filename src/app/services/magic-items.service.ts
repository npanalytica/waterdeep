import { Injectable } from '@angular/core';
import json from '../../assets/data/magic-items.json';
import { Helpers } from '../lib/helpers.js';

@Injectable({
	providedIn: 'root'
})
export class MagicItemsService {

	items : any = json
	array : Array<any> = null

	constructor() { }

	getList() : any {
		return this.items
	}

	getArray() : any {
		if(!this.array)
			this.array = Helpers.ObjectToArray(this.items)
		return this.array
	}

	get(id : string) : any {
		return this.items[id]
	}

}