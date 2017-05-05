import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { OnkeyupComponent } from './onkeyup/onkeyup.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { OnkeyupEnterComponent } from './onkeyup-enter/onkeyup-enter.component';
import { ListOfMembersComponent } from './list-of-members/list-of-members.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    OnkeyupComponent,
    LoopBackComponent,
    OnkeyupEnterComponent,
    ListOfMembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
