export const MOCK_LIST_DATA = [
  {
    show: true,
    info: "parent 1",
    children: [
      {
        show: true,
        info: "parent 1 - child - 1",
        children: [
          {
            show: true,
            info: "parent 1 - child - child - 1",
            children: [
              {
                show: true,
                info: "parent 1 - child - child - child - 1",
                children: [
                  {
                    show: true,
                    info: "parent 1 - child - child - child - child - 1",
                    children: []
                  }
                ]
              }
            ]
          },
          { show: true, info: "parent 1 - child - child - 2", children: [] },
          { show: true, info: "parent 1 - child - child - 3", children: [] }
        ]
      },
      { show: true, info: "parent 1 - child - 2", children: [] }
    ]
  },
  {
    show: true,
    info: "parent 2",
    children: [
      {
        show: true,
        info: "parent 2 - child - 1",
        children: [
          { show: true, info: "parent 2 - child - child - 1", children: [] }
        ]
      }
    ]
  },
  {
    show: true,
    info: "parent - 3",
    children: [
      {
        show: true,
        info: "parent 3 - child - 1",
        children: [
          { show: true, info: "parent 3 - child - child - 1", children: [] }
        ]
      }
    ]
  }
];
