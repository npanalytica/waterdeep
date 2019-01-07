import { SignInComponent } from './app/modules/general/sign-in/sign-in.component'
import { CharacterSheetComponent } from './app/modules/character/sheet/character-sheet.component'
import { LoggedInGuard } from './app/guards/logged-in-guard.service'
import { CharacterInventoryComponent } from './app/modules/character/inventory/character-inventory.component'
import { CharacterEditComponent } from './app/modules/character/edit/character-edit.component'
import { PersonalAccountComponent } from './app/modules/character/account/personal-account.component'
import { ShopsComponent } from './app/modules/world/shops/shops.component'
import { ShopComponent } from './app/modules/world/shop/shop.component'
import { SearchComponent } from './app/modules/general/search/search.component'
import { EnMagicItemsComponent } from './app/modules/encyclopedia/magic-items/en-magic-items.component'
import { EnMagicItemComponent } from './app/modules/encyclopedia/magic-item/en-magic-item.component'
import { EnSpellsComponent } from './app/modules/encyclopedia/spells/en-spells.component'
import { EnSpellComponent } from './app/modules/encyclopedia/spell/en-spell.component'
import { EnWeaponsComponent } from './app/modules/encyclopedia/weapons/en-weapons.component'
import { EnCreaturesComponent } from './app/modules/encyclopedia/creatures/en-creatures.component'
import { EnCreatureComponent } from './app/modules/encyclopedia/creature/en-creature.component'
import { EncounterEditorComponent } from './app/modules/admin/encounter-editor/encounter-editor.component';

export class Routes {
	static routes = [
		/********************************************
		* 					General					*
		*********************************************/
		{
			path: 'sign-in',
			component: SignInComponent
		},
		/********************************************
		* 					Character				*
		*********************************************/
		{
			path: '',
			component: CharacterSheetComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'inventory',
			component: CharacterInventoryComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'edit',
			component: CharacterEditComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'corporate-account',
			component: PersonalAccountComponent
		},
		{
			path: 'contacts',
			component: PersonalAccountComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'maps',
			component: PersonalAccountComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'things-to-do',
			component: PersonalAccountComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'shops',
			component: ShopsComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'shops/:id',
			component: ShopComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'quests',
			component: PersonalAccountComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'search',
			component: SearchComponent,
			canActivate: [LoggedInGuard]
		},
		/********************************************
		* 				Encyclopedia				*
		*********************************************/
		{
			path: 'encyclopedia/magic-items',
			component: EnMagicItemsComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'encyclopedia/magic-items/:id',
			component: EnMagicItemComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'encyclopedia/spells',
			component: EnSpellsComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'encyclopedia/spells/:id',
			component: EnSpellComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'encyclopedia/weapons',
			component: EnWeaponsComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'encyclopedia/beastiary',
			component: EnCreaturesComponent,
			canActivate: [LoggedInGuard]
		},
		{
			path: 'encyclopedia/beastiary/:id',
			component: EnCreatureComponent,
			canActivate: [LoggedInGuard]
		},
		/********************************************
		* 					Admin					*
		*********************************************/
		{
			path: 'admin/encounter-editor',
			component: EncounterEditorComponent,
			canActivate: [LoggedInGuard]
		},
	]
}