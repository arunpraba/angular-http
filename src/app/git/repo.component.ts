import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-repo",
  template: `
    <div>
      <h3>Repo Details</h3>
      <pre>
      {{ userDetails | json }}
      </pre
      >
    </div>
  `
})
export class ProfileRepo implements OnInit {
  @Input() userDetails: any;
  ngOnInit() {}
}
