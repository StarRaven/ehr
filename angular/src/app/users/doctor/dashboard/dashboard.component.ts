import { ViewChild, Component, ElementRef, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent } from 'angular2-grid';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { GlobalService } from '../../../global.service';

import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../../questionare/question-base';
import { QuestionControlService } from '../../../questionare/question-control.service';
import { QuestionService } from '../../../questionare/question.service';

import * as Chart from 'chart.js';
import * as moment from 'moment';
import * as _ from 'lodash';

interface Box {
  title: string;
  id: number;
  config: any;
  widgetType: string;
  content: any;
}

interface Contact {
  avatar: string;
  name: string;
}

interface Form {
  type: string;
  date: string;
  form: number;
  show: boolean;
}

interface Info {
  label: string;
  value: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [QuestionControlService],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, AfterViewInit {
  questions: Array<Array<Array<QuestionBase<any>>>> = [];
  form: FormGroup;
  // @ViewChild('line') line: ElementRef;
  private FORM_DATA: Form[] = [];
  private data: any;
  private filter = '';
  // private chart: any;
  private boxes: Array<Box> = [];
  private rgb = '#efefef';
  private curNum;
  private oriboxes: Array<Box> = [];
  private gridConfig: NgGridConfig = <NgGridConfig>{
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
  private itemPositions: Array<any> = [];

  private dataSource = new MatTableDataSource<Contact>();
  // private dataSource_form = new MatTableDataSource<Form>();
  private displayedColumns = ['avatar', 'name'];
  // private displayedColumns_form = ['type', 'date', 'operation'];
  private setid;

  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // Chart Labels
  public lineChartLabels: string[] = [this.newDate(8, 8).format('DD MMM'), this.newDate(10, 8).format('DD MMM'),
  this.newDate(12, 8).format('DD MMM'),
  this.newDate(17, 8).format('DD MMM'), this.newDate(21, 8).format('DD MMM'), this.newDate(23, 8).format('DD MMM'),
  this.newDate(28, 8).format('DD MMM'), this.newDate(1, 9).format('DD MMM'), this.newDate(4, 9).format('DD MMM')];
  public lineChartType = 'line';
  public lineChartLegend = true;

  // Chart data
  public lineChartData: any[] = [
    { data: [50, 55, 60, 58, 57, 62, 67, 64, 60], label: 'Weight (kg)' },
    { data: [140, 150, 152, 154, 160, 162, 162, 164, 170], label: 'Height (cm)' }
  ];

  public lineChartOptions1: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // Chart Labels
  public lineChartLabels1: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  public lineChartType1 = 'line';
  public lineChartLegend1 = false;
  public lineChartColors1:Array<any> = [
    {
      backgroundColor: 'rgba(205,220,57,0.8)',
      borderColor: 'rgba(0,0,0,0.1)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
    },
    {
      backgroundColor: 'rgba(139,195,74,0.8)',
      borderColor: 'rgba(0,0,0,0.1)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
    },
    {
      backgroundColor: 'rgba(139,195,74,0.8)',
      borderColor: 'rgba(0,0,0,0.1)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
    },
    {
      backgroundColor: 'rgba(205,220,57,0.8)',
      borderColor: 'rgba(0,0,0,0.1)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
    },
    {
      backgroundColor: '#fff',
      borderColor: 'rgba(0,0,0,0.1)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
    }
  ];
  // Chart data
  public lineChartData1: any[] = [
    
    { data: [4.3,5.7,  7,7.9,8.6, 9.2, 9.75,10.2,10.6,10.9,11.2,11.5,11.8,12.1,12.4,12.7,  13,13.25,13.5,13.8,  14.05,14.3,14.55,14.8,15.1], label: '97th', fill: 1 },
    { data: [3.8,5.1,6.3,7.2,7.8, 8.4, 8.9, 9.3, 9.6,  10,10.3,10.5,10.8,11.1,11.3,11.6,11.8,  12,12.3,12.55,12.8,  12.95,13.15,13.4,13.7], label: '85th', fill: 2 },
    { data: [3.3,4.5,5.6,6.4,  7, 7.5,   8, 8.3, 8.6, 8.9, 9.2, 9.4, 9.6, 9.9,10.1,10.3,10.5,10.7,  11,11.2,11.4,11.6,11.8,  12,12.2], label: '50th', fill: 3 },
    { data: [2.8,3.8,4.9,5.65,6.2,6.7, 7.1, 7.4, 7.7,7.95, 8.2, 8.4, 8.6, 8.8,   9, 9.2, 9.4, 9.6, 9.8, 9.95,10.1,10.3,10.4,10.6,10.8], label: '15th', fill: 4 },
    { data: [2.4,3.4,4.4,5.1,5.65,6.05,6.45,6.75,  7, 7.2, 7.4, 7.6, 7.8,   8, 8.2, 8.4, 8.6, 8.75, 8.9,   9.05, 9.2, 9.35, 9.5, 9.65, 9.8], label: '3rd', fill: false }

  ];

  constructor(
    private router: Router,
    private global: GlobalService,
    private qcs: QuestionControlService,
    private qs: QuestionService
  ) {
    this.setid = 0;
    if (this.global.patientName=='Wulandari Sulistyo') {
      this.setid = 100; // mother
    } else if (this.global.patientName=='Suparman Herianto') {
      this.setid = 101; // child
    } else if (this.global.patientName=='Hasan Herianto') {
      this.setid = 102; // child
    }

    
      var question = this.qs.getQuestions(100);
      var result = _(question)
              .groupBy(x => x.group)
              .map((value, key) => (value))
              .value();
      this.questions.push(result);
      this.form = this.qcs.toFormGroup(question);
    
    
    for (let i=101; i<105; i++) {
    var question = this.qs.getQuestions(i);
    var result = _(question)
            .groupBy(x => x.group)
            .map((value, key) => (value))
            .value();
    this.questions.push(result);
    }
    
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
      content: '',
      title: '',
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
        'sizex': 35,
        'sizey': 1
      },
      {
        'dragHandle': '.handle',
        'col': 36,
        'row': 1,
        'sizex': 60,
        'sizey': 30
      },
      {
        'dragHandle': '.handle',
        'col': 1,
        'row': 121,
        'sizex': 95,
        'sizey': 55
      },
      {
        'dragHandle': '.handle',
        'col': 1,
        'row': 126,
        'sizex': 40,
        'sizey': 35
      }
      ];
    } else if (this.setid === 1) {
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
    } else if (this.setid === 100) {
      return [{
        'dragHandle': '.handle',
        'col': 1,
        'row': 121,
        'sizex': 95,
        'sizey': 90
      },
      {
        'dragHandle': '.handle',
        'col': 91,
        'row': 121,
        'sizex': 95,
        'sizey': 279 
      },
      {
        'dragHandle': '.handle',
        'col': 280,
        'row': 121,
        'sizex': 95,
        'sizey': 279 
      },
      ];
    }  else if (this.setid === 101) {
      return [{
        'dragHandle': '.handle',
        'col': 1,
        'row': 121,
        'sizex': 95,
        'sizey': 90
      },
      {
        'dragHandle': '.handle',
        'col': 91,
        'row': 121,
        'sizex': 95,
        'sizey': 279 
      },
      {
        'dragHandle': '.handle',
        'col': 280,
        'row': 121,
        'sizex': 95,
        'sizey': 279 
      },
      {
        'dragHandle': '.handle',
        'col': 280,
        'row': 121,
        'sizex': 95,
        'sizey': 279 
      },
      ];
    } 
  }

  private loadFakewidget() {
    if (this.setid === 0) {
      this.boxes[0].title = 'Basic Information';
      this.boxes[0].widgetType = 'information';
      this.boxes[0].content = [];
      let sampleInfo: Info = {
        label: 'Name: ',
        value: this.global.patientName
      };
      this.boxes[0].content.push(sampleInfo);
      sampleInfo = {
        label: 'Gender: ',
        value: 'Male'
      };
      this.boxes[0].content.push(sampleInfo);
      sampleInfo = {
        label: 'Age: ',
        value: '30'
      };
      this.boxes[0].content.push(sampleInfo);
      sampleInfo = {
        label: 'Birth: ',
        value: '14 Feb 1988'
      };
      this.boxes[0].content.push(sampleInfo);

      this.boxes[2].widgetType = 'form-list';
      this.boxes[2].title = 'Form List';
      this.boxes[1].widgetType = 'chart';
      this.boxes[1].title = 'Chart';
      this.boxes[1].content = {
        labels: this.lineChartLabels,
        datasets: this.lineChartData,
      };
    } else if (this.setid === 1) {
      this.boxes[0].widgetType = 'information';
      this.boxes[1].widgetType = 'chart';
      this.boxes[2].widgetType = 'form-list';
    } else if (this.setid === 100) {
      this.boxes[0].widgetType = 'info-form';
      this.boxes[0].content = 0;
      this.boxes[1].widgetType = 'pregnancy-form';
      this.boxes[1].content = 1;
      this.boxes[2].widgetType = 'pregnancy-form';
      this.boxes[2].content = 2;
    } else if (this.setid === 101) {
      this.boxes[0].widgetType = 'info-form';
      this.boxes[0].content = 3;
      this.boxes[1].widgetType = 'chart';
      this.boxes[1].title = 'Chart';
      this.boxes[1].content = {
        labels: this.lineChartLabels1,
        datasets: this.lineChartData1,
        colors: this.lineChartColors1,
        legends: this.lineChartLegend1
      };
      this.boxes[2].widgetType = 'pregnancy-form';
      this.boxes[2].content = 4;
      this.boxes[3].widgetType = 'pregnancy-form';
      this.boxes[3].content = 5;
    }  else if (this.setid === 102) {
      this.boxes[0].widgetType = 'info-form';
      this.boxes[0].content = 6;
      this.boxes[2].widgetType = 'pregnancy-form';
      this.boxes[2].content = 7;
      this.boxes[3].widgetType = 'pregnancy-form';
      this.boxes[4].content = 8;
    } 
    console.log(this.boxes);
  }

  private loadDashboard() {
    this.boxes = [];
    const dashconf = this._generateDefaultDashConfig(this.setid);
    for (let i = 0; i < dashconf.length; i++) {
      const conf = dashconf[i];
      conf.payload = 1 + i;
      this.boxes[i] = {
        title: '',
        id: i + 1,
        config: conf,
        widgetType: '',
        content: '',
      };
    }
    this.curNum = dashconf.length + 1;

    this.loadFakewidget();
  }

  newDate(day, month) {
    return moment().date(day).month(month);
  }

  loadFakeChart() {
  }

  ngAfterViewInit() {
    this.loadFakeChart();
  }

  ngOnInit() {
    this.loadDashboard();
    if ((this.setid !== 100)&&(this.setid !== 101)&&(this.setid !== 102)) {
    const ELEMENT_DATA: Contact[] = [
      { avatar: '1.png', name: 'Toby Moody' },
      { avatar: '2.png', name: 'Kathleen Erickson' },
      { avatar: '3.png', name: 'Freddie Nelson' },
      { avatar: '4.png', name: 'Duane Evans' },
      { avatar: '5.png', name: 'Vernon Henry' },
      { avatar: '6.png', name: 'Mary Townsend' },
      { avatar: '7.png', name: 'Lorene	Chapman' },
      { avatar: '8.png', name: 'Ginger	Mills' },
      { avatar: '9.png', name: 'Gordon	Miles' }
    ];
    this.dataSource = new MatTableDataSource<Contact>(ELEMENT_DATA);

    this.FORM_DATA = [
      { type: 'Initial Form', date: this.newDate(8, 8).format('DD MMM YYYY'), form: 1, show: true },
      { type: 'Following Form', date: this.newDate(10, 8).format('DD MMM YYYY'), form: 2, show: false },
      { type: 'Following Form', date: this.newDate(12, 8).format('DD MMM YYYY'), form: 2, show: true },
      { type: 'Following Form', date: this.newDate(17, 8).format('DD MMM YYYY'), form: 2, show: true },
      { type: 'Following Form', date: this.newDate(21, 8).format('DD MMM YYYY'), form: 2, show: true },
      { type: 'Following Form', date: this.newDate(23, 8).format('DD MMM YYYY'), form: 2, show: true },
      { type: 'Following Form', date: this.newDate(28, 8).format('DD MMM YYYY'), form: 2, show: true },
      { type: 'Following Form', date: this.newDate(1, 9).format('DD MMM YYYY'), form: 2, show: true },
      { type: 'Following Form', date: this.newDate(4, 9).format('DD MMM YYYY'), form: 2, show: true },
    ];
    // to make sure it gets value, wait to fix
    this.boxes[2].content = this.FORM_DATA;
    // this.dataSource_form = new MatTableDataSource<Form>(ELEMENT_DATA2);
    this.oriboxes = this.boxes;
    }
  }
}
