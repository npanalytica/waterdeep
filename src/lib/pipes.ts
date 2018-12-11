import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'arraify' })
export class ArraifyPipe implements PipeTransform {
	transform(object : any) : any {
		let items = []
		for(let key in object) {
			items.push(object[key])
		}
		return items
	}
}

@Pipe({ name: 'toText' })
export class ToTextPipe implements PipeTransform {
	transform(id : string) : any {
		return id.split('_').join(' ')
	}
}