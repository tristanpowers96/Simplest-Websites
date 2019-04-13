function loadBlocks(editor) {

  editor.BlockManager.add('heading-1.0', {
     label: `<h1 style="font-family: Cutive, serif">Heading 1</h1>`,
     category: {
       label: 'Headings 1',
       open: false,
     },
     attributes: {class: "heading-1.0"},
     filter: 'text',
     content: {
       type: 'text',
       style: {
         'font-family': 'Cutive, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Cutive');
        </style>
        <h1>Heading 1</h1>`,
     },
   });
  editor.BlockManager.add('heading-1.1', {
     label: `<h1 style="font-family: Copse, serif">Heading 1</h1>`,
     category: {
       label: 'Headings 1',
       open: false,
     },
     filter: 'text',
     content: {
       type: 'text',
       style: {
         'font-family': 'Copse, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Copse');
        </style>
        <h1>Heading 1</h1>`,
     },
   });
  editor.BlockManager.add('heading-1.2', {
     label: `<h1 style="font-family: Arvo, serif">Heading 1</h1>`,
     category: {
       label: 'Headings 1',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Arvo, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Arvo');
        </style>
        <h1>Heading 1</h1>`,
     },
   });
  editor.BlockManager.add('heading-1.3', {
     label: `<h1 style="font-family: Scope One, serif">Heading 1</h1>`,
     category: {
       label: 'Headings 1',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Scope One, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Scope+One');
        </style>
        <h1>Heading 1</h1>`,
     },
   });

  editor.BlockManager.add('heading-2.0', {
     label: `<h2 style="font-family: Cutive, serif">Heading 2</h2>`,
     category: {
       label: 'Headings 2',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Cutive, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Cutive');
        </style>
        <h1>Heading 2</h1>`,
     },
   });
  editor.BlockManager.add('heading-2.1', {
     label: `<h2 style="font-family: Copse, serif">Heading 2</h2>`,
     category: {
       label: 'Headings 2',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Copse, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Copse');
        </style>
        <h2>Heading 2</h2>`,
     },
   });
  editor.BlockManager.add('heading-2.2', {
     label: `<h2 style="font-family: Arvo, serif">Heading 2</h2>`,
     category: {
       label: 'Headings 2',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Arvo, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Arvo');
        </style>
        <h2>Heading 2</h2>`,
     },
   });
  editor.BlockManager.add('heading-2.3', {
     label: `<h2 style="font-family: Scope One, serif">Heading 2</h2>`,
     category: {
       label: 'Headings 2',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Scope One, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Scope+One');
        </style>
        <h2>Heading 2</h2>`,
     },
   });

  editor.BlockManager.add('heading-3.0', {
     label: `<h3 style="font-family: Cutive, serif">Heading 3</h3>`,
     category: {
       label: 'Headings 3',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Cutive, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Cutive');
        </style>
        <h1>Heading 3</h1>`,
     },
   });
  editor.BlockManager.add('heading-3.1', {
     label: `<h3 style="font-family: Copse, serif">Heading 3</h3>`,
     category: {
       label: 'Headings 3',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Copse, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Copse');
        </style>
        <h3>Heading 3</h3>`,
     },
   });
  editor.BlockManager.add('heading-3.2', {
     label: `<h3 style="font-family: Arvo, serif">Heading 3</h3>`,
     category: {
       label: 'Headings 3',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Arvo, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Arvo');
        </style>
        <h3>Heading 3</h3>`,
     },
   });
  editor.BlockManager.add('heading-3.3', {
     label: `<h3 style="font-family: Scope One, serif">Heading 3</h3>`,
     category: {
       label: 'Headings 3',
       open: false,
     },
     filter: 'text',
     content: {
       style: {
         'font-family': 'Scope One, serif',
         color: 'green',
       },

       content: `
        <style>
        @import url('https://fonts.googleapis.com/css?family=Scope+One');
        </style>
        <h3>Heading 3</h3>`,
     },
   });

  editor.BlockManager.add('body-1', {
    label: `<p style="font-family: 'Cormorant Garamond', serif;">Body text</p>`,
    type: 'my-type',
    category: {
      label: 'Body text',
      open: false,
    },
    filter: 'text',
    content: {
      style: {
        'font-family': 'Cormorant Garamond, serif',
        'margin': 'auto 50px auto 50px',
      },

      content: `
       <style>
       @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond');
       </style>
       <div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
       `,
    },
  });
  editor.BlockManager.add('body-2', {
    label: `<p style="font-family: 'Work Sans', sans-serif;">Body text</p>`,
    category: {
      label: 'Body text',
      open: false,
    },
    filter: 'text',
    content: {
      style: {
        'font-family': 'Work Sans, sans-serif',
      },

      content: `
       <style>
       @import url('https://fonts.googleapis.com/css?family=Work+Sans');
       </style>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       `,
    },
  });
  editor.BlockManager.add('body-3', {
    label: `<p style="font-family: 'Proza Libre', sans-serif;">Body text</p>`,
    category: {
      label: 'Body text',
      open: false,
    },
    filter: 'text',
    content: {
      style: {
        'font-family': 'Proza Libre, sans-serif',
      },

      content: `
       <style>
       @import url('https://fonts.googleapis.com/css?family=Proza+Libre');
       </style>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       `,
    },
  });
  editor.BlockManager.add('body-4', {
    label: `<p style="font-family: 'Trirong', serif;">Body text</p>`,
    category: {
      label: 'Body text',
      open: false,
    },
    filter: 'text',
    content: {
      style: {
        'font-family': 'Trirong, serif',
      },

      content: `
       <style>
       @import url('https://fonts.googleapis.com/css?family=Trirong');
       </style>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       `,
    },
  });
  editor.BlockManager.add('body-5', {
    label: `<p style="font-family: 'Taviraj', serif;">Body text</p>`,
    category: {
      label: 'Body text',
      open: false,
    },
    filter: 'text',
    content: {
      style: {
        'font-family': 'Taviraj, serif',
      },

      content: `
       <style>
       @import url('https://fonts.googleapis.com/css?family=Taviraj');
       </style>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       `,
    },
  });

  editor.BlockManager.add('button_1', {
    label: `<h2>Button</h2>`,
    category: 'Buttons',
    filter: 'buttons',
    attributes: {class: 'button-1'},
    content: {
      style: {
        'padding': '10px 30px 10px 30px',
        'max-width': '25%',
        'background-color': '#3333cc',
        'border-style': 'none',
        'border-radius': '5px',
        'transition': '0.2s',
      },
      content: `Button`,
    },
  });
  editor.BlockManager.add('button_2', {
    label: `<h2>Button</h2>`,
    category: 'Buttons',
    filter: 'buttons',
    attributes: {class: 'button-2'},
    content: {

      content: `
      <button type="button">Button</button>
      `,
    },
  });

  editor.BlockManager.add('header-1', {
    id: 'header-1',
    label: `<p><b>Simple header</b></p>`,
    filter: 'containers',
    category: 'Headers',
    content: {

      components: [
        {
          tagName: 'header',
          type: 'header',

          classes: ['container-fluid'],
          style: {
            width: '100%',
            display: 'flex',
            'flex-direction': 'row',
            'justify-content': 'space-between',
            'align-items': 'center',
            height: '25%',
            color: 'white',
            padding: '20px',
            'background-color': 'black'
          },
          components: [
            {
              tagName: 'img',
              type: 'image',
              classes: ['logo'],

              style: {
                position: 'relative',
                width: 'auto',
                'max-height': '50%',
              },
              attributes: {src: '/static/images/mock_logo.jpg'},
            },
            {
                tagName: 'nav',

                style: {
                  position: 'relative',
                  display: 'flex',
                  'justify-content': 'space-between',
                  'align-items': 'center',
                  height: '100%',
                },
                components: [
                  {
                    tagName: 'a',
                    type: 'link',

                    style: {
                      padding: '30px',
                      margin: '10px',
                      'font-family': 'Scope One, serif'
                    },
                    content: 'Home'
                  },
                  {
                    tagName: 'a',
                    type: 'link',

                    style: {
                      padding: '30px',
                      margin: '10px',
                      'font-family': 'Scope One, serif'
                    },
                    content: 'Page'
                  },
                  {
                    tagName: 'a',
                    type: 'link',

                    style: {
                      padding: '30px',
                      margin: '10px',
                      'font-family': 'Scope One, serif'
                    },
                    content: 'Page'
                  },
                ]
              },
          ]
        }
      ]
    }
  });

  editor.BlockManager.add('panel-1', {
    id: 'panel-1',
    label: `<p><b>Panel</b></p>`,
    filter: 'containers',
    attributes: {class: 'panel'},
    content: {

      components: [
        {
          tagName: 'div',
          type: 'box',

          style: {
            width: '100%',
            height: '75%',
            color: 'white',
          },
          components: [
            {
              tagName: 'div',
              type: 'box',
              style: {
                position: 'relative',
                width: '60%',
                height: '100%',
                float: 'left',
                'background': "url('/static/images/background_1600.jpg')",
                'background-size': 'cover',
              },
              components: [
                {
                  tagName: 'div',
                  type: 'default',
                  hoverable: false,

                  style: {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    'background-color': 'rgb(153, 51, 0, 0.6)',
                    'z-index': '2',
                  },
                }
              ]
            },
            {
                tagName: 'div',
                type: 'box',

                style: {
                  position: 'relative',
                  width: '40%',
                  height: '100%',
                  float: 'left',
                  'background-color': 'rgb(153, 51, 0)',
                },
                components: [
                  {
                    tagName: 'h2',
                    type: 'text',

                    style: {
                      padding: '30px',
                      'font-size': '36px',
                      'font-family': 'Scope One, serif'
                    },
                    content: 'Header'
                  },
                  {
                    tagName: 'p',
                    type: 'text',

                    style: {
                      'text-align': 'center',
                      'font-family': 'Taviraj, serif',
                      padding: '30px'
                    },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  },
                ]
              },
          ]
        }
      ]
    }
  });
  editor.BlockManager.add('list', {
    id: 'list-1',
    label: '<p><b>List</b></p>',
    filter: 'containers',

    style: {
      padding: '20px'
    },
    content: `
    <ul>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </ul>`
  });
}
