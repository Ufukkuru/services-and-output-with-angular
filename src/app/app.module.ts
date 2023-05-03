import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { FormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';
import { BasketCountComponent } from './basket-count/basket-count.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    BasketComponent,
    BasketCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
