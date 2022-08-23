import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, distinctUntilChanged, map, EMPTY, merge, } from 'rxjs';
import { VehicleDataService } from './vehicle-data.service';

const esperaDigitacao = 300;

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.css'],
})
export class VehicleDataComponent {
  vehicleDataInput = new FormControl();
  
  vin = '2FRHDUYS2Y63NHD22454';
  page = 1;

  teste$ = this.vehicleDataService.getVehiclesData().pipe();

  allVehicleData = this.vehicleDataService.getVehiclesData().pipe();

  searchVehicleData$ = this.vehicleDataInput.valueChanges.pipe(
    map((searchValue) => searchValue.trim()),
    debounceTime(esperaDigitacao),
    distinctUntilChanged(),
    switchMap((searchValue) =>
      searchValue.length >= 5
        ? this.vehicleDataService.getVehiclesData(searchValue)
        : EMPTY
    )
  );

  vehicleData$ = merge(this.allVehicleData, this.searchVehicleData$);

  constructor(private vehicleDataService: VehicleDataService) {}

  modelChangeFn(value: any) {
    this.vin = value;
  }
}
