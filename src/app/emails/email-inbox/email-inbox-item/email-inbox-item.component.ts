import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../email.service';
import { EmailItemComponent } from '../../email-list/email-item/email-item.component';

@Component({
  selector: 'app-email-inbox-item',
  templateUrl: './email-inbox-item.component.html',
  styleUrls: ['./email-inbox-item.component.css']
})
export class EmailInboxItemComponent extends EmailItemComponent implements OnInit {
  
  constructor(emailService: EmailService) {
    super(emailService);
  }

  ngOnInit() {

  }

}
