import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Hospital } from '../../models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private httpClient: HttpClient) { 
  }

  getHospitalListBySpecialities(specialities: String): Observable<Hospital[]> {
    return this.httpClient.get<Hospital[]>(`${environment.apiURL}/get/getHospitalsBySpeciality?specialities=${specialities}`);
  }
}
