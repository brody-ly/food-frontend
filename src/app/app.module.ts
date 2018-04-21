import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LetseatComponent } from './letseat/letseat.component';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {
      path: 'letseat',
      component: LetseatComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LetseatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }