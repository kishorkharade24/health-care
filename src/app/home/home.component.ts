import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpecialityServiceService } from '../services/speciality/speciality-service.service';
import { HospitalService } from '../services/hospital/hospital.service';
import { DoctorService } from '../services/doctor/doctor.service'; 

import { Speciality } from '../models/speciality';
import { Doctor } from '../models/doctor';

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

  /*specialityList: any = [{
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
  }];*/

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

  specialityList: Speciality[] = [];
  
  constructor(private route: ActivatedRoute, private router: Router, 
    private specialityService: SpecialityServiceService,
    private hospitalService: HospitalService,
    private doctorService: DoctorService) { }

  ngOnInit() {
    this.getSpecialities();
  }

  search() {
    this.router.navigate(['search'], {queryParams: {q: this.searchString}});
  }

  filterLocation(location) {

  }

  filterSpeciality(speciality) {
    console.log(speciality);
    this.getHospitalsBySpecialities(speciality);
  }

  filterSpecialist(specialist) {

  }

  goToAppointment() {
    this.router.navigate(['book-appointment']);
  }

  getSpecialities() {
    this.specialityService.getSpecialities().subscribe((response) => {
      //console.log("**************")
      //console.table(response);
      this.specialityList = response;
    });
  }

  getHospitalsBySpecialities(specialities: String) {
    this.hospitalService.getHospitalListBySpecialities(specialities).subscribe((response) => {
      console.log("************* Hospitals *************")
      console.table(response);
    });
  }
}
