import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatToolbarModule,
	MatProgressSpinnerModule,
	MatTableModule,
	MatInputModule,
	MatAutocompleteModule,
	MatSelectModule,
	MatDialogModule
} from '@angular/material'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './modules/container/app.component';
import { PersonalAccountComponent } from './modules/personal-account/personal-account.component'
import { RouterModule } from '@angular/router';
import { ShopsComponent } from './modules/shops/shops.component';
// Firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from 'src/environments/environment'
import { ArraifyPipe, ToTextPipe, DamageToCharPipe, ToUnderscorePipe, FromUnderscorePipe } from 'src/lib/pipes';
import { ShopComponent } from './modules/shop/shop.component'
import { IconRarityComponent } from './shared/icon-rarity/icon-rarity.component';
import { EnMagicItemsComponent } from './modules/en-magic-items/en-magic-items.component';
import { EnMagicItemComponent } from './modules/en-magic-item/en-magic-item.component';
import { EnSpellsComponent } from './modules/en-spells/en-spells.component';
import { EnSpellComponent } from './modules/en-spell/en-spell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnWeaponsComponent } from './modules/en-weapons/en-weapons.component';
import { MagicItemsFilterPipe } from './modules/en-magic-items/en-magic-items.filter';
import { EnCreaturesComponent } from './modules/en-creatures/en-creatures.component';
import { EnCreatureComponent } from './modules/en-creature/en-creature.component';
import { CreaturesFilterPipe } from './modules/en-creatures/en-creatures.filter';
import { StatBlockComponent } from './shared/stat-block/stat-block.component';
import { SearchComponent } from './modules/search/search.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { LoggedInGuard } from './guards/logged-in-guard.service';
import { CharacterComponent } from './modules/character/character.component';
import { TestComponent } from './modules/test/test.component';
import { CharacterInventoryComponent } from './modules/character-inventory/character-inventory.component';
import { CharacterHeaderComponent } from './shared/character-header/character-header.component';
import { CharacterEditComponent } from './modules/character-edit/character-edit.component';
import { CharacterSheetComponent } from './modules/character-sheet/character-sheet.component';
import { NumberSliderComponent } from './shared/number-slider/number-slider.component';


@NgModule({
	declarations: [
		AppComponent,
		PersonalAccountComponent,
		ShopsComponent,
		// Pipes
		ArraifyPipe,
		ToTextPipe,
		ToUnderscorePipe,
		FromUnderscorePipe,
		DamageToCharPipe,
		CreaturesFilterPipe,
		MagicItemsFilterPipe,
		// Components
		ShopComponent,
		IconRarityComponent,
		EnMagicItemsComponent,
		EnMagicItemComponent,
		EnSpellsComponent,
		EnSpellComponent,
		EnWeaponsComponent,
		EnCreaturesComponent,
		EnCreatureComponent,
		StatBlockComponent,
		SearchComponent,
		SignInComponent,
		CharacterComponent,
		TestComponent,
		CharacterInventoryComponent,
		CharacterHeaderComponent,
		CharacterEditComponent,
		CharacterSheetComponent,
		NumberSliderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		// Firebase
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		// Material imports
		MatAutocompleteModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatDialogModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatSelectModule,
		MatSidenavModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatToolbarModule,
		RouterModule.forRoot(
			[
				{
					path: 'sign-in',
					component: SignInComponent
				},
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
				{
					path: 'encyclopaedia/magic-items',
					component: EnMagicItemsComponent,
					canActivate: [LoggedInGuard]
				},
				{
					path: 'encyclopaedia/magic-items/:id',
					component: EnMagicItemComponent,
					canActivate: [LoggedInGuard]
				},
				{
					path: 'encyclopaedia/spells',
					component: EnSpellsComponent,
					canActivate: [LoggedInGuard]
				},
				{
					path: 'encyclopaedia/spells/:id',
					component: EnSpellComponent,
					canActivate: [LoggedInGuard]
				},
				{
					path: 'encyclopaedia/weapons',
					component: EnWeaponsComponent,
					canActivate: [LoggedInGuard]
				},
				{
					path: 'encyclopaedia/beastiary',
					component: EnCreaturesComponent,
					canActivate: [LoggedInGuard]
				},
				{
					path: 'encyclopaedia/beastiary/:id',
					component: EnCreatureComponent,
					canActivate: [LoggedInGuard]
				}
			]
		)
	],
	entryComponents: [
		TestComponent,
		EnMagicItemComponent
	],
	providers: [LoggedInGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
