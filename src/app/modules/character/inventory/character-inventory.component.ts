import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { SessionService } from 'src/app/services/session.service'
import { AngularFireDatabase } from 'angularfire2/database'
import { MatDialog } from '@angular/material'
import { EnMagicItemComponent } from '../../encyclopedia/magic-item/en-magic-item.component'
import { EnCreatureComponent } from '../../encyclopedia/creature/en-creature.component'
import { EnSpellComponent } from '../../encyclopedia/spell/en-spell.component'

@Component({
  selector: 'app-character-inventory',
  templateUrl: './character-inventory.component.html',
  styleUrls: ['./character-inventory.component.scss']
})
export class CharacterInventoryComponent implements OnInit {

	character$ : Observable<any>

	constructor(
		private session : SessionService,
		db : AngularFireDatabase,
		public dialog : MatDialog
	) {
		let url = `/users/${session.user}`
		this.character$ = db.object(url).valueChanges()
	}
	
	ngOnInit() { }

	openDialog(type : string, item : any) {
		let component = this.getDialogComponent(type)
		let dialogRef = this.dialog.open(component, {
			width: '100%',
			height: '100%',
			panelClass: 'no-padding'
		})
		dialogRef.componentInstance[type] = item
	}

	private getDialogComponent(type : string) : any {
		switch(type) {
			case 'item': return EnMagicItemComponent
			case 'creature': return EnCreatureComponent
			case 'spell': return EnSpellComponent
		}
	}

}
