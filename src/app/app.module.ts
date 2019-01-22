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
	MatTabsModule,
	MatMenuModule
} from '@angular/material'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './shared/container/app.container'
import { RouterModule, Router } from '@angular/router'
// Firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from 'src/environments/environment'
import { ArraifyPipe, ToTextPipe, DamageToCharPipe, ToUnderscorePipe, FromUnderscorePipe, FormatBonusPipe } from 'src/lib/pipes'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Routes } from 'src/app-routes'
import { TopMenuComponent } from './shared/top-menu/top-menu.component'
import { MenuService } from './services/menu.service';
import { CharacterSheetComponent } from './modules/character-sheet/character-sheet.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';

@NgModule({
	declarations: [
		AppComponent,
		// Pipes
		ArraifyPipe,
		ToTextPipe,
		ToUnderscorePipe,
		FromUnderscorePipe,
		DamageToCharPipe,
		FormatBonusPipe,
		CharacterSheetComponent,
		// Components
		SideNavComponent,
		CharacterSheetComponent,
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
		MatMenuModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule
	],
	entryComponents: [],
	providers: [
		MenuService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
