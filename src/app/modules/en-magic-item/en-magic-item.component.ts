import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-en-magic-item',
	templateUrl: './en-magic-item.component.html',
	styleUrls: ['./en-magic-item.component.scss']
})
export class EnMagicItemComponent implements OnInit {

	item = {
		name: 'Bag of tricks',
		rarity: 'uncommon',
		price: 350,
		description: `
		This ordinary bag, made from gray cloth appears empty.
		Reaching inside the bag, however, reveals the presence of a small, fuzzy object.
		The bag weighs 1/2 pounds.<br/><br/>
		You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet.
		When the object lands, it transforms into a creature you determine by rolling a d8 and
		consulting the table below. The creature vanishes at the next dawn or when it is reduced to 0 Hit Points.
		The creature is friendly to you and your companions, and it acts on Your Turn.<br/><br/>
		You can use a Bonus Action to Command how the creature moves and what action it takes on
		its next turn, or to give it general orders, such as to Attack your enemies. In the absence of
		such orders, the creature acts in a fashion appropriate to its Nature.
		<br/><br/>
		Once three fuzzy Objects have been pulled from the bag, the bag can't be used again until the next dawn.
		<br><br/>
		<table>
		<thead>
			<tr>
			<th>d8</th>
			<th>Creature</th>
			</tr>
		</thead>
		<tbody>
		<tr><td>1</td><td>Weasel</td></tr>
		<tr><td>2</td><td>Giant Rat</td></tr>
		<tr><td>3</td><td>Badger</td></tr>
		<tr><td>4</td><td>Boar</td></tr>
		<tr><td>5</td><td>Panther</td></tr>
		<tr><td>6</td><td>Giant Badger</td></tr>
		<tr><td>7</td><td>Dire Wolf</td></tr>
		<tr><td>8</td><td>Giant Elk</td></tr>
		</tbody>
		</table>
		`,
		sold_by: ['book_wyrms_treasure', 'steam_and_steel']
	}
	
  constructor() { }

  ngOnInit() {
  }

}
