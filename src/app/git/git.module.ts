import { NgModule } from "@angular/core";
import { GitComponent } from "./git.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GitService } from "./git.service";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./profile.component";
import { ProfileRepo } from "./repo.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "/",
    component: GitComponent
  }
];

@NgModule({
  declarations: [GitComponent, ProfileComponent, ProfileRepo],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [GitComponent, ProfileComponent, ProfileRepo, RouterModule],
  providers: [
    {
      provide: GitService,
      useClass: GitService
    }
  ]
})
export class GitModule {}
