import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LetseatComponent } from './letseat/letseat.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VoteComponent } from './vote/vote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: '',
    redirectTo: 'letseat',
    pathMatch: 'full',
  },
  {
      path: 'letseat',
      component: LetseatComponent,
      children: [
        {
          path:'vote',
          component: VoteComponent
        }
      ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LetseatComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
