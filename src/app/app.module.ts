import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatToolbarModule,
	MatProgressSpinnerModule,
	MatTableModule
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
		EnMagicItemComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		// Firebase
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		// Material imports
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatIconModule,
		MatListModule,
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
				}
			]
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
