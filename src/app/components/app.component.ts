import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cities: any[];
  public countries: any[];
  public form;
  public ind;
  
 constructor(private modalService: NgbModal) {}
ngOnInit() {
  this.form = new FormGroup({
     city: new FormControl(''),
     country: new FormControl('')
  })
  
  
  
   this.cities = [
       {id: 1, name: "Karachi"},
       {id: 2, name: "Dehli"},
       {id: 3, name: "Dhaka"},
       {id: 4, name: "London"},
       {id: 5, name: "Riyadh"}
     ];
       this.countries = [
       {id: 1, name: "Karachi", country:"pakistan" },
       {id: 2, name: "Dehli", country: "india"},
       {id: 3, name: "Dhaka", country: "Bangladesh"},
       {id: 4, name: "London", country: "England"},
       {id: 5, name: "Riyadh" , country: "Saudi Arabia" }
     ];
 }
 
 
 getcountry(data){
  this.ind = this.countries.find(item => item.name === data)
   
 }
//  compareFn(c1: Country, c2: Country): boolean {
//     return c1 && c2 ? c1.id === c2.id : c1 === c2;
// }
 signupModal(){
    this.modalService.open(SignupComponent, { size: 'lg' });
  }
}
