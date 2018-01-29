import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
//import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { AgendaComponent } from './agenda/agenda.component';
//import { HttpUtilServiceMongoDB } from 'app/util/HttpUtilServiceMongoDB';

//MÓDULOS DE CLIENTES
import { PessoasComponent } from './pessoas/pessoas.component';
import { pessoasRouting } from './pessoas/pessoas.routing';
import { PessoasModule } from './pessoas/pessoas.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AgendaComponent,
    //PessoasComponent,
   // HttpUtilServiceMongoDB,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
   // MapsComponent,
    NotificationsComponent,
    UpgradeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    JsonpModule,
    ReactiveFormsModule,
    HttpModule,
    PessoasModule,
    pessoasRouting
   ],
  providers: [PessoasComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
