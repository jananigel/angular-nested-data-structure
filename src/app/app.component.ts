import { Component } from '@angular/core';

interface List {
  show: boolean;
  info: string;
  children: List[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  mockData: List[] = [
      {
        show: true,
        info: 'parent 1',
        children: [
          {
            show: true,
            info: 'parent 1 - child - 1',
            children: [
              { show: true, info: 'parent 1 - child - child - 1', children: [
                  { show: true, info: 'parent 1 - child - child - child - 1', children: [
                    { show: true, info: 'parent 1 - child - child - child - child - 1', children: [] }
                  ] }
                ]
              },
              { show: true, info: 'parent 1 - child - child - 2', children: [] },
              { show: true, info: 'parent 1 - child - child - 3', children: [] },
            ],
          },
          { show: true, info: 'parent 1 - child - 2', children: [] },
        ],
      },
      {
        show: true,
        info: 'parent 2',
        children: [
          { show: true, info: 'parent 2 - child - 1', children: [
            { show: true, info: 'parent 2 - child - child - 1' , children: [] }
          ] }
        ],
      },
      {
        show: true,
        info: 'parent - 3',
        children: [
          { show: true, info: 'parent 3 - child - 1', children: [
            { show: true , info: 'parent 3 - child - child - 1', children: [] }
          ] }
        ],
      },
    ];

    constructor() {
      this.mockData = this.extractNestedData(this.mockData);
      console.log('show data = ', this.mockData);
    }

    extractNestedData(data: List[]): List[] {
      const showData = data.filter((value) => value.show);
      showData.forEach((value) => {
        if (value.children) {
          value.children = this.extractNestedData(value.children);
       }
      });
      return showData;
    }
}
