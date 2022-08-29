import { pluck, tap } from 'rxjs';
import { VehiclesAPI } from './model/vehicle';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  getVehicles(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient.get<VehiclesAPI>(`${ API }/vehicle`, { params }).pipe(
      pluck('vehicles'),
    )
  }
}
