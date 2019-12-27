import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Doctor } from '../../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient) { 
  }

  getDoctorListBySpecialitiesAndBranch(specialities: String, branchNbr: String): Observable<Doctor[]> {
    return this.httpClient
      .get<Doctor[]>(`${environment.apiURL}/get/getDoctorsBySpecialityAndBranch?specialities=${specialities}&branchNbr=${branchNbr}`);
  }
}
