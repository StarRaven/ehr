import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Headers, Http } from '@angular/http';
import Chart from 'chart.js';

@Component({
  selector: 'app-aggregation',
  templateUrl: './aggregation.component.html',
  styleUrls: ['./aggregation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AggregationComponent implements OnInit {
  @ViewChild('salesbar') salesbar: ElementRef;
  @ViewChild('profitbar') profitbar: ElementRef;
  @ViewChild('categorybar') categorybar: ElementRef;
  @ViewChild('regiondonut') regiondonut: ElementRef;
  @ViewChild('businessbar') businessbar: ElementRef;
  labels1: Array<string> = [];
  data1: Array<number> = [];
  labels2: Array<string> = [];
  data2: Array<number> = [];
  labels3: Array<string> = [];
  data3: Array<number> = [];
  labels4: Array<string> = [];
  data4: Array<number> = [];
  labels5: Array<string> = [];
  data5: Array<number> = [];

  constructor(private http: Http, ) { }

  products_sales(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.get('/api/aggregation/products/sales', { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          this.labels1.push(entry[0]);
          this.data1.push(Number(entry[1]));
        };
        let salesbarCtx = this.salesbar.nativeElement.getContext('2d');
        var data = {
          labels: this.labels1,
          datasets: [{
            label: "Most Products Sales",
            data: this.data1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        };

        var chart = new Chart(
          salesbarCtx,
          {
            "type": 'bar',
            "data": data,
            "options": {
              "scales": {
                "yAxes": [{
                  "ticks": {
                    "beginAtZero": true
                  }
                }]
              },
              "title": {
                "display": true,
                "text": 'Most Products Sales',
                "fontSize": 24,
              },
              "legend": {
                "display": false,
              },
              "tooltips": {
                "mode": 'label',
              },
              "hover": {
                "mode": 'label'
              },
              "responsive": false,
              "maintainAspectRatio": false,
              "animation": {
                "animateScale": true,
                "animateRotate": false
              }
            }
          }
        );
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  products_profit(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/aggregation/products/profit', { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          this.labels2.push(entry[0]);
          this.data2.push(Number(entry[1]));
        };
        let profitbarCtx = this.profitbar.nativeElement.getContext('2d');
        var data = {
          labels: this.labels2,
          datasets: [{
            label: "Most Products Profit",
            data: this.data2,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        };

        var chart = new Chart(
          profitbarCtx,
          {
            "type": 'bar',
            "data": data,
            "options": {
              "scales": {
                "yAxes": [{
                  "ticks": {
                    "beginAtZero": true
                  }
                }]
              },
              "title": {
                "display": true,
                "text": 'Most Products Profit',
                "fontSize": 24,
              },
              "legend": {
                "display": false,
              },
              "tooltips": {
                "mode": 'label',
              },
              "hover": {
                "mode": 'label'
              },
              "responsive": false,
              "maintainAspectRatio": false,
              "animation": {
                "animateScale": true,
                "animateRotate": false
              }
            }
          }
        );
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  products_categories(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/aggregation/products/categories', { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          this.labels3.push(entry[0]);
          this.data3.push(Number(entry[1]));
        };
        let categorybarCtx = this.categorybar.nativeElement.getContext('2d');
        var data = {
          labels: this.labels3,
          datasets: [{
            label: "Most Popular Categories",
            data: this.data3,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        };

        var chart = new Chart(
          categorybarCtx,
          {
            "type": 'bar',
            "data": data,
            "options": {
              "scales": {
                "yAxes": [{
                  "ticks": {
                    "beginAtZero": true
                  }
                }]
              },
              "title": {
                "display": true,
                "text": 'Most Popular Categories',
                "fontSize": 24,
              },
              "legend": {
                "display": false,
              },
              "tooltips": {
                "mode": 'label',
              },
              "hover": {
                "mode": 'label'
              },
              "responsive": false,
              "maintainAspectRatio": false,
              "animation": {
                "animateScale": true,
                "animateRotate": false
              }
            }
          }
        );
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  regions_sales(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.get('/api/aggregation/regions', { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          this.labels4.push(entry[0]);
          this.data4.push(Number(entry[1]));
        };
        let regiondonutCtx = this.regiondonut.nativeElement.getContext('2d');
        var data = {
          labels: this.labels4,
          datasets: [
            {
              "data": this.data4,   // Example data
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
        };

        var chart = new Chart(
          regiondonutCtx,
          {
            "type": 'doughnut',
            "data": data,
            "options": {
              "title": {
                "display": true,
                "text": 'Regions vs Sales Volume',
                "fontSize": 24,
              },
              "legend": {
                "display": true,
                "position": 'right'
              },
              "scaleShowLabels": false,
              "responsive": false,
              "maintainAspectRatio": false,
              "cutoutPercentage": 0,
              "animation": {
                "animateScale": true,
                "animateRotate": false
              }
            }
          }
        );
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  business_buy(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.get('/api/aggregation/business', { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          this.labels5.push(entry[0]);
          this.data5.push(Number(entry[1]));
        };
        let businessbarCtx = this.businessbar.nativeElement.getContext('2d');
        var data = {
          labels: this.labels5,
          datasets: [{
            label: "Businesses Buying Most",
            data: this.data5,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        };

        var chart = new Chart(
          businessbarCtx,
          {
            "type": 'bar',
            "data": data,
            "options": {
              "scales": {
                "yAxes": [{
                  "ticks": {
                    "beginAtZero": true
                  }
                }]
              },
              "title": {
                "display": true,
                "text": 'Businesses Buying Most',
                "fontSize": 24,
              },
              "legend": {
                "display": false,
              },
              "tooltips": {
                "mode": 'label',
              },
              "hover": {
                "mode": 'label'
              },
              "responsive": false,
              "maintainAspectRatio": false,
              "animation": {
                "animateScale": true,
                "animateRotate": false
              }
            }
          }
        );
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

  ngOnInit() {
    this.products_sales();
    this.products_profit();
    this.products_categories();
    this.regions_sales();
    this.business_buy()
  }

}
