import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThermometerService {

  constructor() { }

  getTemperatura() : Observable<number>{
    return interval(1000)
            .pipe(
              map(data => 25 + (Math.random()*10))
            )
  }
}
