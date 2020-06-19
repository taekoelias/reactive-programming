import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { interval, Subject, Observable, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ThermometerService } from '../service/thermometer.service';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent implements OnInit, OnDestroy {

  iniciado = false;

  chart : Chart = [];

  temperatura$ : Observable<number>;

  private onDestroy$: Subject<void> = new Subject<void>();

  sub : Subscription;

  cor : string = "#3cba00"

  constructor(private thermometerService : ThermometerService) { }

  ngOnDestroy(){
    this.onDestroy$.next();
  }

  ngOnInit() {
    this.temperatura$ = this.thermometerService.getTemperatura();
    
    this.iniciaChart();  
  }

  private iniciaChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        datasets: [
          { data: [] }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  acompanhar(){

    this.sub = 
      this.thermometerService.getTemperatura()
        .pipe(
          takeUntil(this.onDestroy$)
        )
        .subscribe(
          data => {
            this.chart.data.labels.push(new Date().toISOString());
            this.chart.data.datasets.forEach((dataset) => {
                dataset.data.push(data);
                dataset.backgroundColor = this.cor
                dataset.fill = false;
            });
            this.chart.update();
          },
          err => console.log(err)
        );
  }

  reset(){
    this.sub.unsubscribe();
  }

}
