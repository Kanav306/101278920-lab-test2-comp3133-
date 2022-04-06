export interface Mission {
  flight_number:  number,
  mission_name: string,
  mission_id: string[],
  upcoming: boolean,
  launch_year: string,
  launch_date_unix: number,
  launch_date_utc: Date,
  launch_date_local: Date,
  is_tentative: boolean,
  tentative_max_precision: string,
  tbd: boolean,
  launch_window: number,
}