import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GitModule } from "./git/git.module";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    GitModule,
    //RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
