import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneComponent } from './one/one.component';
import { AppRoutingModule } from './app-routing.module';
import { TwoComponent } from './two/two.component';

@NgModule({
  imports: [BrowserModule, FormsModule,AppRoutingModule],
  declarations: [AppComponent, HelloComponent, OneComponent,TwoComponent],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
