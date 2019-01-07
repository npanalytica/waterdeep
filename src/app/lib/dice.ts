
export class Dice {

	static Roll(diceString : string) : number {
		let parts = diceString.split('d')
		let number = parseInt(parts[0])
		let dice = parseInt(parts[1])
		let total = 0
		for(let i = 0; i < number; i++) {
			total += Math.floor(Math.random() * dice) + 1
		}
		return total
	}

}