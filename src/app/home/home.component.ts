import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchString: String = "";
  locationList: any = [{
    "name": "Hyderabad",
    "id": 1
  },
  {
    "name": "Mumbai",
    "id": 2
  },
  {
    "name": "Delhi",
    "id": 3
  }];

  specialityList: any = [{
    "name": "Allergy & Immunology",
    "id": 1
  },
  {
    "name": "Dermatology",
    "id": 2
  },
  {
    "name": "Neurology",
    "id": 3
  }];

  doctorsList: any = [{
    "name": "Tarun Singh",
    "id": 1,
    "hospital": "Care Hospital"
  },
  {
    "name": "Ross Geller",
    "id": 2,
    "hospital": "AIMS Hospital"
  },
  {
    "name": "John Snow",
    "id": 3,
    "hospital": "Apollo Hospital"
  }];
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['search'], {queryParams: {q: this.searchString}});
  }

  filterLocation(location) {

  }
  filterSpeciality(speciality) {
    
  }

  filterSpecialist(specialist) {

  }

  goToAppointment() {
    this.router.navigate(['book-appointment']);
  }
}
