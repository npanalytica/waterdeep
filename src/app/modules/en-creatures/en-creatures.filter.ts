import * as _ from 'underscore'
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'filterCreatures',
	pure: false
})
export class CreaturesFilterPipe implements PipeTransform {
	transform(items : Array<any>, filter : any): any {
		if(!items) { return items }
		return _.filter(items, item => {
			let pass = true
			if(item.type !== filter.type && filter.type) pass = false
			if(!filter.crs.includes(item.challenge_rating) && filter.crs.length > 0) pass = false
			return pass
		})
	}
}