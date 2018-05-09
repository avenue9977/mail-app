import { Component, OnInit } from '@angular/core';
import { EmailItemComponent } from '../../email-list/email-item/email-item.component';
import { EmailService } from '../../email.service';

@Component({
  selector: 'app-email-send-item',
  templateUrl: './email-send-item.component.html',
  styleUrls: ['./email-send-item.component.css']
})
export class EmailSendItemComponent extends EmailItemComponent implements OnInit {

  constructor(emailService: EmailService) { 
    super(emailService);
  }

  ngOnInit() {
  }

}
