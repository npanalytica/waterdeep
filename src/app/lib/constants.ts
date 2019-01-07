
export class Constants {

	static SpellCastingClasses = [
		'Bard',
		'Cleric',
		'Druid',
		'Paladin',
		'Ranger',
		'Sorcerer',
		'Warlock',
		'Wizard'
	]

	static MainStats = [
		'strength',
		'dexterity',
		'constitution',
		'intelligence',
		'wisdom',
		'charisma'
	]

	static Proficiencies = [
		{ name: 'acrobatics', 		parent: 'dexterity' },
		{ name: 'animal_handling', 	parent: 'wisdom' },
		{ name: 'arcana', 			parent: 'intelligence' },
		{ name: 'athletics', 		parent: 'strength'},
		{ name: 'deception', 		parent: 'charisma' },
		{ name: 'history', 			parent: 'intelligence' },
		{ name: 'insight', 			parent: 'wisdom' },
		{ name: 'intimidation', 	parent: 'charisma' },
		{ name: 'investigation', 	parent: 'intelligence' },
		{ name: 'medicine', 		parent: 'wisdom' },
		{ name: 'nature', 			parent: 'intelligence' },
		{ name: 'perception', 		parent: 'wisdom' },
		{ name: 'performance', 		parent: 'charisma' },
		{ name: 'persuasion', 		parent: 'charisma' },
		{ name: 'religion', 		parent: 'intelligence' },
		{ name: 'sleight_of_hand', 	parent: 'dexterity' },
		{ name: 'stealth', 			parent: 'dexterity' },
		{ name: 'survival', 		parent: 'wisdom' }
	]

	/*static Proficiencies = [
		'acrobatics',
		'animal handling',
		'arcana',
		'athletics',
		'deception',
		'history',
		'insight',
		'intimidation',
		'investigation',
		'medicine',
		'nature',
		'perception',
		'performance',
		'persuasion',
		'religion',
		'sleight of hand',
		'stealth',
		'survival'
	]*/

	static MagicItemRarities = [
		{ name: 'common', 		alias: 'C', 	color: '#8c8c8c' },
		{ name: 'uncommon', 	alias: 'U', 	color: '#739cb7' },
		{ name: 'rare', 		alias: 'R', 	color: '#3c7c16' },
		{ name: 'very rare', 	alias: 'VR', 	color: '#bf9233' },
		{ name: 'legendary', 	alias: 'L', 	color: '#e46a2c' },
		{ name: 'varies', 		alias: 'V', 	color: '#E91E63' }
	]

	static MagicItemTypes = [
		'Armor',
		'Potion',
		'Ring',
		'Rod',
		'Staff',
		'Wand',
		'Weapon',
		'Wondrous item'
	]

	static CreatureTypes = [
		'aberration',
		'beast',
		'celestial',
		'construct',
		'dragon',
		'elemental',
		'fey',
		'fiend',
		'giant',
		'humanoid',
		'monstrosity',
		'ooze',
		'plant',
		'swarm',
		'undead'
	]

	static CreatureChallengeRatings = [
		'0',
		'1/8',
		'1/4',
		'1/2',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25',
		'26',
		'27',
		'28',
		'29',
		'30'
	]

	static challengeRatingXP = {
			'0': 10,
			'1/8': 25,
			'1/4': 50,
			'1/2': 100,
			'1': 200,
			'2': 450,
			'3': 700,
			'4': 1100,
			'5': 1800,
			'6': 2300,
			'7': 2900,
			'8': 3900,
			'9': 5000,
			'10': 5900,
			'11': 7200,
			'12': 8400,
			'13': 10000,
			'14': 11500,
			'15': 13000,
			'16': 15000,
			'17': 18000,
			'18': 20000,
			'19': 22000,
			'20': 25000,
			'21': 33000,
			'22': 41000,
			'23': 50000,
			'24': 62000,
			'25': 75000,
			'26': 90000,
			'27': 105000,
			'28': 120000,
			'29': 135000,
			'30': 155000
	}

}