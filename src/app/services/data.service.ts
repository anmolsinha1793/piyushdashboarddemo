import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataStash$ = new BehaviorSubject({});
  constructor() { }
  setDataStash = (data: object) => this.dataStash$.next(data);
  getDataStash = () => this.dataStash$.asObservable();
}
