import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // import ActivatedRoute
import { ContactService } from '../contact.service'; // import ContactService

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(params => {
      this.getStoreDetails(params['id']);
    });
  }

  getStoreDetails (id:any) {
    console.log('call service to get store details for id: ' + id);
  }

}
