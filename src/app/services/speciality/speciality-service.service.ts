import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Speciality } from '../../models/speciality';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialityServiceService {
  
  constructor(private httpClient: HttpClient) { 
  }

  getSpecialities(): Observable<Speciality[]> {
    return this.httpClient.get<Speciality[]>(`${environment.apiURL}/get/allspeciality`);
  }
}
