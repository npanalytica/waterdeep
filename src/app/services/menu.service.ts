
export class MenuService {
	
	MIN_HEIGHT = 50
	MAX_HEIGHT = 140
	height : number
	padding : number

	constructor() {
		this.height = this.MAX_HEIGHT
		this.padding = this.MAX_HEIGHT
	}

	// Updates the menu height if the new value will not exceed MIN_HEIGHT
	onScroll(scroll : number) : void {
		let newHeight = this.MAX_HEIGHT - scroll
		this.height = newHeight < this.MIN_HEIGHT ? this.MIN_HEIGHT : newHeight
	}


	// Interpolates a value between max and min given the menu height
	// Uses a simple line of the form y = mx + b
	// The interpolation will return max if the menu is completely expanded
	// and will return min if the menu is completely collapsed
	interpolate(max : number, min : number) : number {
		let m = (max - min) / (this.MAX_HEIGHT - this.MIN_HEIGHT)
		let b = max - m * this.MAX_HEIGHT
		return m * this.height + b
	}
}