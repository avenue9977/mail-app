import { Component, OnInit } from '@angular/core';

import { Email } from '../email.model';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  protected emails: Email[];
  hasEmails: boolean = true;

  constructor(protected emailService: EmailService) { }

  ngOnInit() {}

}
