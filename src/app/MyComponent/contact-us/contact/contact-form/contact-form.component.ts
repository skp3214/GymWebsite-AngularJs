import { Component, OnInit ,Inject} from '@angular/core';
import { Contact } from './contact';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  
  // constructor(private snackBar:MatSnackBar){}
  
  contactUs: Contact = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    query: ""

  }

  showDiv: boolean = false;
 
  ngOnInit() {
  }

  onSubmit(conform:NgForm) {

    this.showDiv = true;
    setTimeout(() => {
      conform.reset();
      this.showDiv = false;
    }, 5000); 
  }

  resetform(conform:NgForm){
    conform.reset();
  }

 
}
