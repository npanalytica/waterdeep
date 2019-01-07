import { Constants } from './constants';

export class Helpers {

	static ObjectToArray(object : any) : Array<any> {
		let arr = []
		for(let key in object) {
			arr.push(object[key])
		}
		return arr
	}


	// Returns the total XP gain from a list of enemies
	static encounterXP(enemies : Array<any>) : number {
		// Add up the individual enemy XP
		let xp = 0
		enemies.forEach(enemy => {
			xp += Constants.challengeRatingXP[enemy.challenge_rating]
		})
		let n = enemies.length
		// Scale up XP based on swarm factor
		if(n == 2) {
			xp *= 1.5
		} else if (n >= 3 || n <=6) {
			xp *= 2.0
		} else if (n >= 7 || n <= 10) {
			xp *= 2.5
		} else if (n >= 11 || n <= 14) {
			xp *= 3.0
		} else if (n > 15) {
			xp *= 4
		}
		return xp
	}

}