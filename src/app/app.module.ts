import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompoundListComponent } from './compound-list/compound-list.component';
import { CompoundDetailsComponent } from './compound-details/compound-details.component';
import { CreateComponent } from './dialog/create/create.component';
import { UpdateComponent } from './dialog/update/update.component';
import { DeleteComponent } from './dialog/delete/delete.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

const routes:Routes = [
  {path:'',component:CompoundListComponent},
  {path:'compoundDetails/:id',component:CompoundDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CompoundListComponent,
    CompoundDetailsComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
