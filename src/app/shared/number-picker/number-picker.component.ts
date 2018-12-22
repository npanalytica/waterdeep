import { Component, OnInit } from '@angular/core'
import { ErrorStateMatcher } from '@angular/material'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
	selector: 'number-picker',
	templateUrl: './number-picker.component.html',
	styleUrls: ['./number-picker.component.scss']
})
export class NumberPickerComponent implements OnInit {
	
	number : number

	numberControl = new FormControl('', [
		Validators.required,
		Validators.pattern(/^\d+$/)
	])

	constructor() { }
	
	ngOnInit() { }

}
