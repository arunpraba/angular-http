import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  template: `
    <div>
        <h3>Profile Details</h3>
        <pre>
        {{ userDetails | json }}
        </pre
        >
    </div>
  `
})
export class ProfileComponent implements OnInit {
  @Input() userDetails: any;
  ngOnInit() {}
}
