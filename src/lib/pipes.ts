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

// Finds all occurrences of a damage type and
// turns them into a single letter definition
// (E.g, slashing => s)
@Pipe({ name: 'damageToChar' })
export class DamageToCharPipe implements PipeTransform {
	transform(text : string) : string {
		return text
		.replace(/slashing/g, 's')
		.replace(/bludgeoning/g, 'b')
		.replace(/piercing/g, 'p')
	}
}


// Turns a string with spaces into a lowercase
// string with underscores
@Pipe({ name: 'toUnderscore' })
export class ToUnderscorePipe implements PipeTransform {
	transform(text : string) : string {
		return text
		.replace(/\s/g, '_')
		.toLowerCase()
	}
}