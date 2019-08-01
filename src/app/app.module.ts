import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SortableModule } from 'ngx-bootstrap/sortable';
// import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
    // SortableModule.forRoot(),
    // AccordionModule.forRoot(),
    // BrowserAnimationsModule,
    // MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
