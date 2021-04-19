import { Component } from "@angular/core";
import { MOCK_LIST_DATA } from "./mock-data/mock-data";

interface List {
  show: boolean;
  info: string;
  children: List[];
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  mockData: List[] = MOCK_LIST_DATA;

  constructor() {
    this.mockData = this.extractNestedData(this.mockData);
    console.log("show data = ", this.mockData);
  }

  extractNestedData(data: List[]): List[] {
    const showData = data.filter(value => value.show);
    showData.forEach(value => {
      if (value.children) {
        value.children = this.extractNestedData(value.children);
      }
    });
    return showData;
  }
}
