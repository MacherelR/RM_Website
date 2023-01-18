import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    new Contact('/Remy Macherel', 'https://www.linkedin.com/in/r%C3%A9my-macherel-32a438174/', 'linkedin', 'linkedin'),
    new Contact('remymacherel98@gmail.com', 'mailto:remymacherel98@gmail.com', 'email', 'envelope'),
    new Contact('/MacherelR', 'https://github.com/MacherelR', 'github', 'github'),
  ];
}
