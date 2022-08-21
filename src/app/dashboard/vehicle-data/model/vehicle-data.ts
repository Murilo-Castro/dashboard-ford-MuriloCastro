export interface VehiclesData extends Array<VehicleData> {}

export interface VehicleData {
  id: number | string;
  vin: number | string;
  odometer: number | string;
  tirePressure: number | string;
  status: string;
  batteryStatus: string;
  fuelLevel: number | string;
  lat: number | string;
  long: number | string;
}

export interface VehiclesDataAPI {
  vehicleData: VehiclesData;
}
