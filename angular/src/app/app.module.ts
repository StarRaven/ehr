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

import { AuthService } from './services/auth.service';
import { CustomerLoginService } from './services/users/customerlogin.service';
import { StoreLoginService } from './services/users/storelogin.service';
import { SalesmanLoginService } from './services/users/salesman-login.service';
import { CustomerRegisterService } from './services/users/customerregister.service';
import { StoreRegisterService } from './services/users/storeregister.service';
import { UsersComponent } from './components/users/users/users.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ShoppingComponent } from './components/buyer/shopping/shopping.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { StoremanageComponent } from './components/seller/storemanage/storemanage.component';
import { AddproductComponent } from './components/seller/addproduct/addproduct.component';

import { AddproductService } from './services/seller/addproduct.service';
import { UpdateproductService } from './services/seller/updateproduct.service';
import { AddsalesmanService } from './services/seller/addsalesman.service';
import { DeletesalesmanService } from './services/seller/deletesalesman.service';
import { UpdatesalesmanService } from './services/seller/updatesalesman.service';
import { ShowDetailComponent } from './components/buyer/show-detail/show-detail.component';
import { SalesmanmanageComponent } from './components/seller/salesmanmanage/salesmanmanage.component';
import { AddsalesmanComponent } from './components/seller/addsalesman/addsalesman.component';
import { TransactionsmanageComponent } from './components/seller/transactionsmanage/transactionsmanage.component';
import { AddtransactionService } from './services/buyer/addtransaction.service';
import { ApprovetransactionService } from './services/seller/approvetransaction.service';
import { CanceltransactionService } from './services/seller/canceltransaction.service';
import { CompletetransactionService } from './services/buyer/completetransaction.service';
import { MyorderComponent } from './components/buyer/myorder/myorder.component';
import { AggregationComponent } from './components/aggregation/aggregation.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdatesalesmanComponent } from './components/seller/updatesalesman/updatesalesman.component';
import { UpdateproductComponent } from './components/seller/updateproduct/updateproduct.component';
import { ProtectdlgComponent } from './components/protectdlg/protectdlg.component';
import { ManageComponent } from './components/admin/manage/manage.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';

import { IndexComponent } from './pages/index/index.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DoctorControlComponent } from './users/admin/doctor-control/doctor-control.component';
import { DoctorAddComponent } from './users/admin/doctor-add/doctor-add.component';
import { PatientFormComponent } from './users/doctor/patient-form/patient-form.component';
import { DynamicFormQuestionComponent } from './questionare/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './questionare/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingComponent,
    TopmenuComponent,
    StoremanageComponent,
    AddproductComponent,
    ShowDetailComponent,
    SalesmanmanageComponent,
    AddsalesmanComponent,
    TransactionsmanageComponent,
    MyorderComponent,
    AggregationComponent,
    FooterComponent,
    UpdatesalesmanComponent,
    UpdateproductComponent,
    ProtectdlgComponent,
    ManageComponent,
    AdminloginComponent,
    IndexComponent,
    AdminComponent,
    DoctorControlComponent,
    DoctorAddComponent,
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
      { path: 'admin', component: DoctorControlComponent },
      { path: 'doctor', component: PatientFormComponent },
      { path: 'store/manage', component: StoremanageComponent },
      { path: 'store/salesman', component: SalesmanmanageComponent },
      { path: 'transaction/manage', component: TransactionsmanageComponent },
      { path: 'myorders', component: MyorderComponent },
      { path: 'aggregation', component: AggregationComponent },
      { path: 'admin', component: AdminloginComponent },
      { path: 'admin/manage', component: ManageComponent },
    ])
  ],
  entryComponents: [
    LoginComponent,
    DoctorAddComponent,
    RegisterComponent,
    AddproductComponent,
    UpdateproductComponent,
    ShowDetailComponent,
    AddsalesmanComponent,
    UpdatesalesmanComponent,
    ProtectdlgComponent,
  ],
  providers: [
    AuthService,
    CustomerLoginService,
    StoreLoginService,
    SalesmanLoginService,
    CustomerRegisterService,
    StoreRegisterService,
    AddproductService,
    UpdateproductService,
    AddsalesmanService,
    DeletesalesmanService,
    UpdatesalesmanService,
    AddtransactionService,
    ApprovetransactionService,
    CanceltransactionService,
    CompletetransactionService,
    GlobalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
