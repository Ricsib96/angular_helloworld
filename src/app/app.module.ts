import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './core/components/topbar/topbar.component';
import { SearchPageComponent } from './features/search-page/components/search-page/search-page.component';
import { MovieCardComponent } from './features/search-page/components/movie-card/movie-card.component';
import { SearchBarComponent } from './features/search-page/components/search-bar/search-bar.component';
import { PaginatorComponent } from './features/search-page/components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SearchPageComponent,
    MovieCardComponent,
    SearchBarComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDividerModule,
    StoreModule.forRoot({}, {})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
