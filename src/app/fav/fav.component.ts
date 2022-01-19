import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../service/contact.service';
@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  fav=this.contactServ.getItems();
  constructor(private contactServ:ContactServiceService) { }

  ngOnInit(): void {
  }

}
