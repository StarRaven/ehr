import {ViewChild, Component, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';
import {MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';

import * as Chart from 'chart.js';
import * as moment from 'moment';

interface Box {
  id: number;
  config: any;
  widgetType: string;
}

interface Contact {
  avatar: string;
  name: string;
}

interface Form {
  type: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('line') line: ElementRef;
  private chart: any;
  private boxes: Array < Box > = [];
  private rgb = '#efefef';
  private curNum;
  private gridConfig: NgGridConfig = < NgGridConfig > {
    'margins': [5],
    'draggable': true,
    'resizable': true,
    'max_cols': 0,
    'max_rows': 0,
    'visible_cols': 0,
    'visible_rows': 0,
    'min_cols': 1,
    'min_rows': 1,
    'col_width': 2,
    'row_height': 2,
    'cascade': 'up',
    'min_width': 50,
    'min_height': 50,
    'fix_to_grid': false,
    'auto_style': true,
    'auto_resize': false,
    'maintain_ratio': false,
    'prefer_new': false,
    'zoom_on_drag': false,
    'limit_to_screen': true
  };
  private itemPositions: Array < any > = [];

  private dataSource = new MatTableDataSource<Contact>();
  private dataSource_form = new MatTableDataSource<Form>();
  private displayedColumns = ['avatar', 'name'];
  private displayedColumns_form = ['type', 'date', 'operation'];
  private setid = 1;

  constructor(private router: Router) {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addBox(): void {
    const conf: NgGridItemConfig = this._generateDefaultItemConfig();
    conf.payload = this.curNum++;
    this.boxes.push({
      id: conf.payload,
      config: conf,
      widgetType: '',
    });
  }

  removeWidget(index: number): void {
    if (this.boxes[index]) {
      this.boxes.splice(index, 1);
    }
  }

  updateItem(index: number, event: NgGridItemEvent): void {
    // Do something here
  }

  onDrag(index: number, event: NgGridItemEvent): void {
    // Do something here
  }

  onResize(index: number, event: NgGridItemEvent): void {
    // Do something here
  }

  private _generateDefaultItemConfig(): NgGridItemConfig {
    return {
      'dragHandle': '.handle',
      'col': 1,
      'row': 1,
      'sizex': 1,
      'sizey': 1
    };
  }

  private _generateDefaultDashConfig(id: number): NgGridItemConfig[] {
    if (this.setid === 0) {
      return [{
          'dragHandle': '.handle',
          'col': 1,
          'row': 1,
          'sizex': 40,
          'sizey': 1
        },
        {
          'dragHandle': '.handle',
          'col': 45,
          'row': 1,
          'sizex': 80,
          'sizey': 60
        },
        {
          'dragHandle': '.handle',
          'col': 1,
          'row': 43,
          'sizex': 40,
          'sizey': 35
        },
        {
          'dragHandle': '.handle',
          'col': 1,
          'row': 1,
          'sizex': 124,
          'sizey': 45
        },
        {
          'dragHandle': '.handle',
          'col': 51,
          'row': 26,
          'sizex': 32,
          'sizey': 40
        },
        {
          'dragHandle': '.handle',
          'col': 83,
          'row': 26,
          'sizex': 1,
          'sizey': 1
        }
      ];
    }
    if (this.setid === 1) {
      return [{
          'dragHandle': '.handle',
          'col': 1,
          'row': 1,
          'sizex': 1,
          'sizey': 1
        },
        {
          'dragHandle': '.handle',
          'col': 31,
          'row': 1,
          'sizex': 100,
          'sizey': 43
        },
        {
          'dragHandle': '.handle',
          'col': 1,
          'row': 50,
          'sizex': 1,
          'sizey': 1
        },
        {
          'dragHandle': '.handle',
          'col': 51,
          'row': 1,
          'sizex': 75,
          'sizey': 1
        },
        {
          'dragHandle': '.handle',
          'col': 51,
          'row': 26,
          'sizex': 32,
          'sizey': 40
        },
        {
          'dragHandle': '.handle',
          'col': 83,
          'row': 26,
          'sizex': 1,
          'sizey': 1
        }
      ];
    }
  }

  private loadFakewidget() {
    if (this.setid === 0) {
      this.boxes[0].widgetType = 'information';
      this.boxes[1].widgetType = 'form';
      this.boxes[3].widgetType = 'chart';
    }
    if (this.setid === 1) {
      this.boxes[0].widgetType = 'information';
      this.boxes[1].widgetType = 'chart';
      this.boxes[2].widgetType = 'form';
    }
  }

  private loadDashboard() {
    this.setid = 1 - this.setid;

    this.boxes = [];
    const dashconf = this._generateDefaultDashConfig(this.setid);
    for (let i = 0; i < dashconf.length; i++) {
      const conf = dashconf[i];
      conf.payload = 1 + i;
      this.boxes[i] = {
        id: i + 1,
        config: conf,
        widgetType: ''
      };
    }
    this.curNum = dashconf.length + 1;

    this.loadFakewidget();
  }

  newDate(day, month) {
    return moment().date(day).month(month);
  }

  loadFakeChart() {
    const lineCtx = this.line.nativeElement.getContext('2d');
    const data = {
      labels: [this.newDate(8, 8), this.newDate(10, 8), this.newDate(12, 8),
        this.newDate(17, 8), this.newDate(21, 8), this.newDate(23, 8),
        this.newDate(28, 8), this.newDate(1, 9), this.newDate(4, 9)],
      datasets: [
          {
              label: 'Height (cm) ',
              backgroundColor: '#36A2EB',
              borderColor: '#36A2EB',
              fill: false,
              data: [140, 150, 152, 154, 160, 162, 162, 164, 170],
              lineTension: 0,
          },
          {
              label: 'Weight (kg) ',
              backgroundColor: '#FF6384',
              borderColor: '#FF6384',
              fill: false,
              data: [50, 55, 60, 58, 57, 62, 67, 64, 60],
              lineTension: 0,
          }
      ]
  };
  const options = {
    scales: {
        xAxes: [{
            ticks: {
                autoSkip : false,
                callback: function(value, index, values) {
                    return moment(value).format('DD MMM');
                }
            },
            gridLines : {
                display : false,
            }
        }],
        yAxes: [{
            ticks: {
                min: 50,
                max: 190,
               stepSize: 10
            }
        }],
    },
};
            this.chart = new Chart(
              lineCtx,
              {
                'type': 'line',
                'data': data,
                'options': options
              }
            );
  }

  ngAfterViewInit() {
    this.loadFakeChart();
  }
  ngOnInit() {
    this.loadDashboard();
    const ELEMENT_DATA: Contact[] = [
      {avatar: '1.png', name: 'Toby Moody'},
      {avatar: '2.png', name: 'Kathleen Erickson'},
      {avatar: '3.png', name: 'Freddie Nelson'},
      {avatar: '4.png', name: 'Duane Evans'},
      {avatar: '5.png', name: 'Vernon Henry'},
      {avatar: '6.png', name: 'Mary Townsend'},
      {avatar: '7.png', name: 'Lorene	Chapman'},
      {avatar: '8.png', name: 'Ginger	Mills'},
      {avatar: '9.png', name: 'Gordon	Miles'}
    ];
    this.dataSource = new MatTableDataSource<Contact>(ELEMENT_DATA);

    const ELEMENT_DATA2: Form[] = [
      {type: 'Initial Form', date: this.newDate(8, 8).format('DD MMM YYYY')},
      {type: 'Following Form', date: this.newDate(10, 8).format('DD MMM YYYY')},
      {type: 'Following Form', date: this.newDate(12, 8).format('DD MMM YYYY')},
      {type: 'Following Form', date: this.newDate(17, 8).format('DD MMM YYYY')},
      {type: 'Following Form', date: this.newDate(21, 8).format('DD MMM YYYY')},
      {type: 'Following Form', date: this.newDate(23, 8).format('DD MMM YYYY')},
      {type: 'Following Form', date: this.newDate(28, 8).format('DD MMM YYYY')},
      {type: 'Following Form', date: this.newDate(1, 9).format('DD MMM YYYY')},
      {type: 'Following Form', date: this.newDate(4, 9).format('DD MMM YYYY')},
    ];
    this.dataSource_form = new MatTableDataSource<Form>(ELEMENT_DATA2);
  }
}
