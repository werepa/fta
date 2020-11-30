import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { CountdownModule } from "ngx-countdown";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CountdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
