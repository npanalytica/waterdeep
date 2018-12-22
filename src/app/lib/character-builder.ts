import { Constants } from './constants';

const DEFAULT_STAT_LEVEL = 10
const DEFAULT_PROFICIENCY_BONUS = 0

export class CharacterBuilder {

	static setDataIfMissing(data : any) {
		// Set basic data if none is defined
		data.name = data.name || 'Nuevo Personaje'
		data.class = data.class || 'Sin clase'
		data.race = data.race || 'Sin raza'
		data.max_hp = data.max_hp || 1
		data.ac = data.ac || 10
		data.hp = data.hp || 1
		data.speed = data.speed || 30
		data.initiative = data.initiative || 0
		// Set level if none is defined
		data.level = data.level || 1
		// Set stats & saving throws if none are defined
		Constants.MainStats.forEach(stat => {
			data[stat] = data[stat] || DEFAULT_STAT_LEVEL
			let save = `${stat}_save`
			data[save] = data[save] || DEFAULT_PROFICIENCY_BONUS
		})
		// Set proficiency bonus if none are defined
		Constants.Proficiencies.forEach(proficiency => {
			data[proficiency.name] =
				data[proficiency.name] || DEFAULT_PROFICIENCY_BONUS
		})
		// Set proficiency & saving throws array if none is defined
		data.proficiencies = data.proficiencies || []
		data.saves = data.saves || []
	}

	static calculateBonuses(character : any) {
		let proficiencyBonus = 	Math.floor((character.level - 1) / 4) + 2
		Constants.Proficiencies.forEach(proficiency => {
			// Base parent bonus
			let value = Math.floor((character[proficiency.parent] - 10) / 2)
			if(this.isProficient(character, proficiency.name))
				value += proficiencyBonus
			character[proficiency.name] = value
		})
		Constants.MainStats.forEach(stat => {
			// Base parent bonus
			let value = Math.floor((character[stat] - 10) / 2)
			if(this.hasSave(character, stat)) value += proficiencyBonus
			character[`${stat}_save`] = value
		})
	}

	private static isProficient(character : any, proficiency : string) {
		return character.proficiencies.indexOf(proficiency) !== -1
	}

	private static hasSave(character : any, stat : string) {
		let prop = `${stat}_save`
		return character.saves.indexOf(prop) !== -1
	}

}