
export class Helpers {

	static ObjectToArray(object : any) : Array<any> {
		let arr = []
		for(let key in object) {
			arr.push(object[key])
		}
		return arr
	}

}