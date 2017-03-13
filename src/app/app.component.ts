import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic Components App';

  items = [];

  first = [
    {
      type: 'row',
      items: [
        {
          type: 'widget',
          width: 2,
          items: [
            {
              type: 'tile',
              name: 'Header'
            },
            {
              type: 'row',
              items: [
                {
                  type: 'column',
                  width: 1,
                  items: [
                    {
                      type: 'tile',
                      name: 'Tile 1'
                    },
                    {
                      type: 'tile',
                      name: 'Tile 2'
                    },
                    {
                      type: 'tile',
                      name: 'Tile 2'
                    }
                  ]
                },
                {
                  type: 'column',
                  width: 2,
                }
              ]
            }
          ]
        },
        {
          type: 'widget',
          width: 1
        }
      ]
    },
    {
      type: 'row',
      items: [
        {
          type: 'widget',
          width: 1
        },
        {
          type: 'widget',
          width: 1
        }
      ]
    }
  ]

  second = [
    {
      type: 'row',
      items: [
        {
          type: 'widget',
          width: 2,
        },
        {
          type: 'widget',
          width: 1
        }
      ]
    },
    {
      type: 'row',
      items: [
        {
          type: 'widget',
          width: 1
        },
        {
          type: 'widget',
          width: 2
        }
      ]
    }
  ]

  last = [
    {
      type: 'row',
      items: [
        {
          type: 'widget',
          width: 2,
          items: [
            {
              type: 'tile',
              name: 'Header'
            },
            {
              type: 'row',
              items: [
                {
                  type: 'column',
                  width: 1,
                  items: [
                    {
                      type: 'tile',
                      name: 'Tile 1'
                    },
                    {
                      type: 'tile',
                      name: 'Tile 2'
                    },
                    {
                      type: 'tile',
                      name: 'Tile 2'
                    }
                  ]
                },
                {
                  type: 'column',
                  width: 2,
                }
              ]
            }
          ]
        },
        {
          type: 'widget',
          width: 1,
          items: [
            {
              type: 'tile',
              name: 'Header'
            },
            {
              type: 'row',
              items: [
                {
                  type: 'column',
                  width: 1,
                  items: [
                    {
                      type: 'tile',
                      name: 'Tile 1'
                    },
                    {
                      type: 'tile',
                      name: 'Tile 2'
                    },
                    {
                      type: 'tile',
                      name: 'Tile 2'
                    }
                  ]
                },
                {
                  type: 'column',
                  width: 2,
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  ngOnInit() {
    this.items = [...this.first];
  }

  updateMetadata(key) {
    const matadataMap = {
      first: this.first,
      second: this.second,
      last: this.last
    };

    this.items = [...matadataMap[key]];
  } 
}
