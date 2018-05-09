import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { EmailListComponent } from '../email-list/email-list.component';
import { Email } from '../email.model';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css']
})
export class EmailInboxComponent extends EmailListComponent implements OnInit {

  constructor(emailService: EmailService) {
    super(emailService);
  }

  ngOnInit() {
    this.emailService.getInbox().subscribe(
      (emails: Email[]) => this.emails = emails
    );
  }

  ngDoCheck() {
    if(this.emails) {
      (this.emails.length > 0) ? this.hasEmails = true : this.hasEmails = false;
    } 
  }

}
