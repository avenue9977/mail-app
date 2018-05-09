import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../../email.model';
import { EmailService } from '../../email.service';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {

  @Input() email: Email;
  @Input() id: number;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    
  }

  trimContent(message) {
    return message.substr(0, 60) + "\u2026";
  }

  deleteEmail() {
    this.emailService.deleteMail(this.id).subscribe();
  }
}
