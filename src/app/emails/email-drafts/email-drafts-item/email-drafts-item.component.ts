import { Component, OnInit } from '@angular/core';
import { EmailItemComponent } from '../../email-list/email-item/email-item.component';
import { EmailService } from '../../email.service';

@Component({
  selector: 'app-email-drafts-item',
  templateUrl: './email-drafts-item.component.html',
  styleUrls: ['./email-drafts-item.component.css']
})
export class EmailDraftsItemComponent extends EmailItemComponent implements OnInit {

  constructor(emailService: EmailService) {
    super(emailService);
  }

  ngOnInit() {
  }

}
