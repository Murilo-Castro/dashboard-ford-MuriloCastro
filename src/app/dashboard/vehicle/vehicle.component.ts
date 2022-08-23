import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VehicleService } from './vehicle.service';
import { merge, switchMap } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent {
  vehiclesInput = new FormControl();
  
  selcted = 'Ranger';
  page = 1;
  imgPath = 'assets/imgs/Ranger.png';

  allVehicles$ = this.vehicleService.getVehicles()
  .pipe();

  filtroPeloInput$ = this.vehiclesInput.valueChanges.pipe(  
    switchMap(selectValue => this.vehicleService.getVehicles(selectValue))
  );

  vehicles$ = merge(this.allVehicles$, this.filtroPeloInput$)

  constructor(private vehicleService: VehicleService) {}

  changeFn(e: any) {
    this.selcted = e.target.value;
    this.imgPath = `assets/imgs/${this.selcted}.png`
    console.log(this.imgPath)
  }
}
