import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

ngOnInit() {
  }
 constructor(private modalService: NgbModal) {}
 loginModal(){
    this.modalService.open(LoginComponent, { size: 'sm' });
  }
  

}
