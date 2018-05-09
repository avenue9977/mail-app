import { Component, OnInit } from '@angular/core';
import { Email } from './email.model';
import { EmailService } from './email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css'],
  providers: [EmailService]
})
export class EmailsComponent implements OnInit {

  // selectedEmail: Email;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    // this.emailService.selectedEmail.subscribe((email: Email) => {
    //   this.selectedEmail = email;
    // });
  }

}
