import * as _ from 'underscore'
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


@Pipe({ name: 'toInitials' })
export class ToInitialsPipe implements PipeTransform {
	transform(text : string) : any {
		return _.map(text.split(' '), item => item[0]).join('').toUpperCase()
	}
}


@Pipe({ name: 'maxLength' })
export class MaxLengthPipe implements PipeTransform {
	transform(text : string, max: number, repl: 'string') : any {
		return text.length > max ? repl : text
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


// Reverses the toUnderscore Pipe
@Pipe({ name: 'fromUnderscore' })
export class FromUnderscorePipe implements PipeTransform {
	transform(text : string) : string {
		return text
		.replace(/\_/g, ' ')
		.toLowerCase()
	}
}


// Ads a + symbol to positive numbers
@Pipe({ name: 'formatBonus' })
export class FormatBonusPipe implements PipeTransform {
	transform(value : number) : string {
		return value >= 0 ? `+${value}` : `${value}`
	}
}