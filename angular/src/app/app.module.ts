import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

import { GlobalService } from './global.service';
import { LoginComponent } from './users/login/login.component';

import { TopmenuComponent } from './pages/topmenu/topmenu.component';

import { IndexComponent } from './pages/index/index.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DoctorControlComponent } from './users/admin/doctor-control/doctor-control.component';
import { DoctorAddComponent } from './users/admin/doctor-add/doctor-add.component';
import { NurseControlComponent } from './users/admin/nurse-control/nurse-control.component';
import { NurseAddComponent } from './users/admin/nurse-add/nurse-add.component';
import { PatientFormComponent } from './users/doctor/patient-form/patient-form.component';
import { DynamicFormQuestionComponent } from './questionare/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './questionare/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopmenuComponent,
    IndexComponent,
    AdminComponent,
    DoctorControlComponent,
    DoctorAddComponent,
    NurseControlComponent,
    NurseAddComponent,
    PatientFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTooltipModule,

    RouterModule.forRoot([
      { path: '', redirectTo: '/users', pathMatch: 'full' },
      { path: 'users', component: IndexComponent },
      { path: 'admin/doctor', component: DoctorControlComponent },
      { path: 'admin/nurse', component: NurseControlComponent },
      { path: 'doctor', component: PatientFormComponent }
    ])
  ],
  entryComponents: [
    LoginComponent,
    DoctorAddComponent,
    NurseAddComponent,
  ],
  providers: [
    GlobalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
