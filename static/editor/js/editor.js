$(function() {
  function activate(wrapper, filter = null) {
    deactivate();
    $wrapper = $(wrapper);
    $wrapper.addClass("active");
    const blocks = editor.BlockManager.getAll();
    if (filter) {
      const filtered = blocks.filter(block => block.get('filter') == filter);
      editor.BlockManager.render(filtered);
    } else {
      editor.BlockManager.render();
    }

  };

  function deactivate() {
    $(".layers-container-wrapper, .styles-container-wrapper, .traits-container-wrapper, .blocks-container-wrapper, .text-editor-wrapper").removeClass("active");
    editor.Commands.stop('show-styles');
    editor.Commands.stop('show-traits');
    editor.Commands.stop('edit-text');
  };

  $(".panel_button").click(function() {
    activate("." + $(this).attr("child"), $(this).attr("filter"));
  });

  $(".exit").click(function() {
    deactivate();
  });
  var defaultToolbar = [
    {
      attributes: {
        class: 'toolbar-edit',
      },
      style: {
        color: 'black',
      },
      command: 'edit-text',
    },
    {
      attributes: {
        class: 'toolbar-style',
      },
      command: 'show-styles'
    },
    {
      attributes: {
        class: 'toolbar-settings',
      },
      command: 'show-traits',
    },
    {
      attributes: {
        class: 'toolbar-duplicate',
      },
      command: 'tlb-clone',
    },
    {
      attributes: {
        class: 'toolbar-move',
        draggable: true,
      },
      command: 'tlb-move',
    }
  ];
  const editor = grapesjs.init({
    autorender: 0,
    container: "#gjs",
    canvas: {
      styles: ['https://fonts.googleapis.com/css?family=Arvo|Copse|Cutive|Lora:700|Scope+One|Trocchi|Cormorant+Garamond|Proza+Libre|Taviraj|Trirong|Work+Sans'],
    },
    toolbar: [
      {
        attributes: {
          class: 'toolbar-edit',
        },
        style: {
          color: 'black',
        },
        command: 'edit-text',
      },
      {
        attributes: {
          class: 'toolbar-style',
        },
        command: 'show-styles'
      },
      {
        attributes: {
          class: 'toolbar-settings',
        },
        command: 'show-traits',
      },
      {
        attributes: {
          class: 'toolbar-duplicate',
        },
        command: 'tlb-clone',
      },
      {
        attributes: {
          class: 'toolbar-move',
          draggable: true,
        },
        command: 'tlb-move',
      }
    ],
    fromElement: true,
    height: '100vh',
    width: '100%',
    storageManager: {
      type: null
    },
    layerManager: {
      appendTo: '.layers-container'
    },
    panels: {
      defaults: []
    },
    traitManager: {
      appendTo: '.traits-container',
    },
    selectorManager: {
      appendTo: '.styles-container',
    },
    styleManager: {
      appendTo: '.styles-container',
      sectors: [{
          name: 'Dimension',
          open: false,
          buildProps: ['width', 'min-height', 'border-radius', 'position'],
          properties: [{
              type: 'integer',
              name: 'The width',
              property: 'width',
              units: ['px', '%'],
              defaults: 'auto',
              min: 0,
            },
            {
              type: 'select',
              name: 'border radius',
              property: 'border-radius',
              defaults: '0',
              options: [{
                  value: '0',
                  name: 'Square'
                },
                {
                  value: '2px',
                  name: 'Slightly round'
                },
                {
                  value: '5px',
                  name: 'Rounder'
                },
                {
                  value: '10px',
                  name: 'Very round'
                },
                {
                  value: '50%',
                  name: 'Circle'
                },
              ],
            },
          ]
        },
        {
          id: 'spacing-sector',
          name: 'Spacing',
          open: false,
          buildProps: [],
          properties: []
        },
        {
          name: 'Text',
          open: false,
          buildProps: ['text-align', 'font-family', 'font-style', 'font-size'],
          properties: [{
              type: 'integer',
              name: 'The width',
              property: 'width',
              units: ['px', '%'],
              defaults: 'auto',
              min: 0,
            },
            {
              type: 'select',
              name: 'font',
              property: 'font-family',
              options: [{
                  value: 'Arial',
                  name: 'Arial'
                },
                {
                  value: 'Helvetica',
                  name: 'Helvetica'
                },
                {
                  value: 'Times New Roman',
                  name: 'Times New Roman'
                },
                {
                  value: 'Times',
                  name: 'Times'
                },
                {
                  value: 'Courier New',
                  name: 'Courier New'
                },
                {
                  value: 'Courier',
                  name: 'Courier'
                },
                {
                  value: 'Palatino, Georgia, serif',
                  name: 'Palatino'
                },
                {
                  value: 'Garamond',
                  name: 'Garamond'
                },
              ],
            }
          ]
        }, {
          name: 'Extra',
          open: false,
          buildProps: ['background-color', 'box-shadow', 'custom-prop'],
          properties: [{
            id: 'custom-prop',
            name: 'Custom Label',
            property: 'font-size',
            type: 'select',
            defaults: '32px',
            options: [{
                value: '12px',
                name: 'Tiny'
              },
              {
                value: '18px',
                name: 'Medium'
              },
              {
                value: '32px',
                name: 'Big'
              },
            ],
          }]
        }
      ]
    },
    blockManager: {
      appendTo: '.blocks-container',
      blocks: [
        {
          id: 'col',
          filter: 'containers',
          category: {
            label: 'Headings 1',
            open: true,
          },
          label: `<p><b>Two Columns</b></p>`,
          attributes: {
            class: 'gjs-fonts gjs-f-b2'
          },
          open: true,
          content: `
          <style>
            .col-2-wrapper {
              position: relative;
              width: 50%;
              height: auto;
              min-height: 300px;
              margin: auto;
            }
            .col-2 {
              position: relative;
              float: left;
              padding: 10px;
              width: 50%;
            }
          </style>
          <div class='col-2-wrapper'>
            <div class='col-2'>
              <p>Content here</p>
            </div>
            <div class='col-2'>
              <p>Content here</p>
            </div>
          </div>`,
        },
        {
          id: 'col-3',
          category: 'Containers',
          label: `<p><b>Three Columns</b></p>`,
          attributes: {
            class: 'gjs-fonts gjs-f-b3'
          },
          content: `
          <style>
            .col-3-wrapper {
              position: relative;
              width: 80%;
              height: auto;
              min-height: 300px;
              margin: auto;
            }
            .col-3 {
              float: left;
              padding: 20px;
              width: 33.3%;
            }
          </style>
          <div class='col-3-wrapper'>
            <div class='col-3'>
              <p>Content here</p>
            </div>
            <div class='col-3'>
              <p>Content here</p>
            </div>
            <div class='col-3'>
              <p>Content here</p>
            </div>
          </div>`,
        },
        {
          id: 'col-4',
          category: 'Containers',
          label: `<p><b>Variable Columns</b></p>`,
          attributes: {
            class: 'gjs-fonts gjs-f-b1'
          },
          content: `
          <style>
            .col-4-wrapper {
              position: relative;
              width: 80%;
              height: auto;
              min-height: 300px;
              margin: auto;
            }
            .col-4 {
              float: left;
              padding: 20px;
              width: 25%;
            }
          </style>
          <div class='col-4-wrapper'>
            <div class='col-4'>
              <p>Content here</p>
            </div>
            <div class='col-4'>
              <p>Content here</p>
            </div>
            <div class='col-4'>
              <p>Content here</p>
            </div>
            <div class='col-4'>
              <p>Content here</p>
            </div>
          </div>`,
        },
        {
          id: 'image',
          category: 'Content',
          label: `<p><b>Image</b></p>
          <img src='/static/svg/file-media.svg'`,
          select: true,
          content: {
            type: 'image'
          },
          activate: true,
        },
      ]
    },
  });

  var comps = editor.DomComponents;
  var defaultType = comps.getType('default');
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;
  comps.addType('default', {
    model: {
      defaults: {
        toolbar: defaultToolbar,
      },
    },
  });
  comps.addType('text', {
    model: {
      defaults: {
        toolbar: defaultToolbar,
      },
    },
  });

  loadStyles(editor, defaultToolbar);
  loadTraits(editor, defaultToolbar);
  loadBlocks(editor);
  loadCommands(editor, defaultToolbar);

  editor.render();


  editor.Commands.add('show-styles', {

    run(editor, sender) {
      activate($(".styles-container-wrapper"));
    },
    stop(editor, sender) {
      deactivate($(".styles-container-wrapper"));
    },
  });

  editor.Commands.add('show-traits', {

    run(editor, sender) {
      activate($(".traits-container-wrapper"));
    },
    stop(editor, sender) {
      deactivate($(".traits-container-wrapper"));
    },
  });

  editor.Commands.add('edit-text', {
    run(editor, sender) {
      activate($(".text-editor-wrapper"));
    },
    stop(editor, sender) {
      deactivate();
    },
  });

  editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
  });
  editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [{
      id: 'visibility',
      active: true,
      className: 'btn-toggle-borders',
      label: '<u>B</u>',
      command: 'sw-visibility',
    }, {
      id: 'export',
      className: 'btn-open-export',
      label: 'Exp',
      command: 'export-template',
      context: 'export-template',
    }, {
      id: 'show-json',
      className: 'btn-show-json',
      label: 'JSON',
      context: 'show-json',
      command(editor) {
        editor.Modal.setTitle('Components JSON')
          .setContent(`<textarea style="width: 100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
          .open();
      },
    }],
  });

});
