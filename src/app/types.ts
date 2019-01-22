
export interface INavMenuAction {
	icon  : string // A material icon string
	name  : string // The text to be displayed
	fn    : Function // Function to call when executed
}

export interface ISearchResult {
	name : string
	type : string
	url  : Array<string>
}