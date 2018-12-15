import * as _ from 'underscore'
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'filterMagicItems',
	pure: false
})
export class MagicItemsFilterPipe implements PipeTransform {
	transform(items : Array<any>, filter : any): any {
		if(!items) { return items }
		return _.filter(items, item => {
			let pass = true
			if(item.type !== filter.type && filter.type) pass = false
			if(item.rarity !== filter.rarity && filter.rarity) pass = false
			return pass
		})
	}
}