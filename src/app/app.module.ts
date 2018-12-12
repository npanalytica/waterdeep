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
	MatSelectModule
} from '@angular/material'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './modules/container/app.component';
import { PersonalAccountComponent } from './modules/personal-account/personal-account.component'
import { RouterModule } from '@angular/router';
import { ShopsComponent } from './modules/shops/shops.component';
// Firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from 'src/environments/environment';
import { ArraifyPipe, ToTextPipe } from 'src/lib/pipes';
import { ShopComponent } from './modules/shop/shop.component';
import { IconRarityComponent } from './shared/icon-rarity/icon-rarity.component';
import { EnMagicItemsComponent } from './modules/en-magic-items/en-magic-items.component';
import { EnMagicItemComponent } from './modules/en-magic-item/en-magic-item.component';
import { EnSpellsComponent } from './modules/en-spells/en-spells.component';
import { EnSpellComponent } from './modules/en-spell/en-spell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		PersonalAccountComponent,
		ShopsComponent,
		// Pipes
		ArraifyPipe,
		ToTextPipe,
		// Components
		ShopComponent,
		IconRarityComponent,
		EnMagicItemsComponent,
		EnMagicItemComponent,
		EnSpellsComponent,
		EnSpellComponent
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
		// Material imports
		MatAutocompleteModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
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
					path: '',
					component: PersonalAccountComponent
				},
				{
					path: 'corporate-account',
					component: PersonalAccountComponent
				},
				{
					path: 'contacts',
					component: PersonalAccountComponent
				},
				{
					path: 'maps',
					component: PersonalAccountComponent
				},
				{
					path: 'things-to-do',
					component: PersonalAccountComponent
				},
				{
					path: 'shops',
					component: ShopsComponent
				},
				{
					path: 'shops/:id',
					component: ShopComponent
				},
				{
					path: 'quests',
					component: PersonalAccountComponent
				},
				{
					path: 'encyclopaedia/magic-items/:id',
					component: EnMagicItemComponent
				},
				{
					path: 'encyclopaedia/spells',
					component: EnSpellsComponent
				},
				{
					path: 'encyclopaedia/spells/:id',
					component: EnSpellComponent
				}
			]
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
