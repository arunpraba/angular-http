import { Component } from "@angular/core";
import { GitService } from "./git.service";
@Component({
  selector: "app-git",
  templateUrl: "./git.component.html"
})
export class GitComponent {
  user = {
    name: "",
    sort: ""
  };
  responseData: any = [];
  isLoading = false;
  isView = false;
  isRepo = false;
  errMessage = "";
  totalItems: number = 0;
  userDetails: any;
  repoDetails: any;
  sort = ["followers", "repositories", "joined"];
  constructor(private gitService: GitService) {}

  getUser() {
    this.isLoading = true;

    let userDetails = this.user;
    this.gitService.getUsers(userDetails).subscribe(
      data => {
        this.isLoading = false;
        this.totalItems = data.total_count;
        this.responseData = data.items;
      },
      err => {
        this.errMessage = err;
        this.isLoading = false;
      }
    );
  }

  view(url: string, status) {
    console.log(url)
    if (status === "url") {
      this.isView = true;
      this.isRepo = false;
    } else if (status === "repo") {
      this.isRepo = true;
      this.isView = false;
    } else {
      this.isRepo = false;
      this.isView = false;
    }

    this.gitService.getDetails(url).subscribe(
      data => {
        if (status === "url") {
          this.userDetails = data;
        } else if (status === "repo") {
          this.repoDetails = data;
        }
      },
      err => console.log
    );
  }
}
