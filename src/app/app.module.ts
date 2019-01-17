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
	MatDialogModule,
	MatSnackBarModule,
	MatSliderModule,
	MatTabsModule
} from '@angular/material'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './modules/general/container/app.component'
import { PersonalAccountComponent } from './modules/character/account/personal-account.component'
import { RouterModule, Router } from '@angular/router'
import { ShopsComponent } from './modules/world/shops/shops.component'
// Firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from 'src/environments/environment'
import { ArraifyPipe, ToTextPipe, DamageToCharPipe, ToUnderscorePipe, FromUnderscorePipe, FormatBonusPipe } from 'src/lib/pipes'
import { ShopComponent } from './modules/world/shop/shop.component'
import { IconRarityComponent } from './shared/icon-rarity/icon-rarity.component'
import { EnMagicItemsComponent } from './modules/encyclopedia/magic-items/en-magic-items.component'
import { EnMagicItemComponent } from './modules/encyclopedia/magic-item/en-magic-item.component'
import { EnSpellsComponent } from './modules/encyclopedia/spells/en-spells.component'
import { EnSpellComponent } from './modules/encyclopedia/spell/en-spell.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EnWeaponsComponent } from './modules/encyclopedia/weapons/en-weapons.component'
import { MagicItemsFilterPipe } from './modules/encyclopedia/magic-items/en-magic-items.filter'
import { EnCreaturesComponent } from './modules/encyclopedia/creatures/en-creatures.component'
import { EnCreatureComponent } from './modules/encyclopedia/creature/en-creature.component'
import { CreaturesFilterPipe } from './modules/encyclopedia/creatures/en-creatures.filter'
import { StatBlockComponent } from './shared/stat-block/stat-block.component'
import { SearchComponent } from './modules/general/search/search.component'
import { SignInComponent } from './modules/general/sign-in/sign-in.component'
import { LoggedInGuard } from './guards/logged-in-guard.service'
import { CharacterInventoryComponent } from './modules/character/inventory/character-inventory.component'
import { CharacterEditComponent } from './modules/character/edit/character-edit.component'
import { CharacterSheetComponent } from './modules/character/sheet/character-sheet.component'
import { NumberSliderComponent } from './shared/number-slider/number-slider.component'
import { NumberPickerComponent } from './shared/number-picker/number-picker.component'
import { HpBarComponent } from './shared/hp-bar/hp-bar.component'
import { CharacterHeaderComponent } from './shared/character-header/character-header.component'
import { EncounterEditorComponent } from './modules/admin/encounter-editor/encounter-editor.component'
import { Routes } from 'src/app-routes';
import { NpcAdderComponent } from './shared/npc-adder/npc-adder.component';
import { AdminNPCEditorComponent } from './modules/admin/npc-editor/npc-editor.component';
import { TopMenuComponent } from './modules/general/top-menu/top-menu.component';

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
		FormatBonusPipe,
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
		CharacterInventoryComponent,
		CharacterHeaderComponent,
		CharacterEditComponent,
		CharacterSheetComponent,
		NumberSliderComponent,
		NumberPickerComponent,
		HpBarComponent,
		EncounterEditorComponent,
		NpcAdderComponent,
		AdminNPCEditorComponent,
		TopMenuComponent
	],
	imports: [
		// Router
		RouterModule.forRoot(Routes.routes),
		// Angular Modules
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
		MatSliderModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule
	],
	entryComponents: [
		EnMagicItemComponent,
		NumberPickerComponent,
		NpcAdderComponent
	],
	providers: [LoggedInGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
