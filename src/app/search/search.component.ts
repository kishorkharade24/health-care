import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString: String = "";
  hospitalList: any = [{
      "name": "Apollo",
      "city": "Hyderabad"
    },
    {
      "name": "Apollo",
      "city": "Mumbai"
    },
    {
      "name": "Care",
      "city": "Hyderabad"
    },
    {
      "name": "Care",
      "city": "Mumbai"
    }
  ];

  filteredHospitalList: any = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchString = params['q'];

      this.getMatchingHospitals(this.searchString);
    });
  }

  getMatchingHospitals(searchString) {
    this.filteredHospitalList = [];
    this.hospitalList.forEach(hospital => {
      if (hospital.name.toUpperCase().indexOf(searchString.toUpperCase()) > -1 
        || hospital.city.toUpperCase().indexOf(searchString.toUpperCase()) > -1) {
        this.filteredHospitalList.push(hospital);
      }
    });
  }
}
