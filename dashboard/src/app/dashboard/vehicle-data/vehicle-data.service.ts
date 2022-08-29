import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VehiclesDataAPI } from './model/vehicle-data';


const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  constructor(private httpClient: HttpClient) { }

  getVehiclesData(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient.get<VehiclesDataAPI>(`${ API }/vehicleData`, { params }).pipe(
      pluck('vehicleData'),
    )
  }
}
