import { CharacterSheetComponent } from './app/modules/character-sheet/character-sheet.component'
import { BestiaryComponent } from './app/modules/encyclopedia/bestiary/bestiary.component'

export class Routes {
	static routes = [
		/********************************************
		* 					ncyclopedia				*
		*********************************************/
		{
			path: '',
			component: CharacterSheetComponent
		},
		{
			path: 'encyclopedia/bestiary',
			component:  BestiaryComponent
		}
	]
}