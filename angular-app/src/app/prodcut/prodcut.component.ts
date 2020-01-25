import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-prodcut",
  templateUrl: "./prodcut.component.html",
  styleUrls: ["./prodcut.component.css"]
})
export class ProdcutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleClick() {
    const event = new CustomEvent("setReactState", {
      detail: { type: "INCREASE_CART" }
    });
    window.dispatchEvent(event);
  }
}
