function loadStyles(editor) {

  editor.StyleManager.addProperty('spacing-sector', {
    name: 'Margin',
    property: 'margin',
    type: 'composite',
    open: false,
    properties: [
      {
        name: 'Top',
        type: 'integer',
        units: ['px', '%'],
        property: 'margin-top',
        defaults: 'auto',
      },
      {
        name: 'Bottom',
        type: 'integer',
        units: ['px', '%'],
        property: 'margin-bottom',
        defaults: 'auto',
      },
      {
        name: 'Left',
        type: 'integer',
        units: ['px', '%'],
        property: 'margin-left',
        defaults: '20px',
      },
      {
        name: 'Right',
        type: 'integer',
        units: ['px', '%'],
        property: 'margin-right',
        defaults: '20px',
      },
    ]
  });

  editor.StyleManager.addProperty('spacing-sector', {
      id: 'margin-preset',
      name: 'Margins',
      property: 'margin',
      type: 'select',
      defaults: 'auto',
      list: [
        { value: 'auto', name: 'Auto' },
        { value: '0', name: 'None' },
        { value: '2px', name: '2' },
        { value: '4px', name: '4' },
        { value: '8px', name: '8' },
        { value: '12px', name: '12' },
        { value: '24px', name: '24' },
      ],
  });

  editor.StyleManager.addProperty('spacing-sector', {
    name: 'Padding',
    property: 'padding',
    type: 'composite',
    properties: [
      {
        name: 'Top',
        type: 'integer',
        units: ['px', '%'],
        property: 'padding-top',
        defaults: 'auto',
      },
      {
        name: 'Bottom',
        type: 'integer',
        units: ['px', '%'],
        property: 'padding-bottom',
        defaults: 'auto',
      },
      {
        name: 'Left',
        type: 'integer',
        units: ['px', '%'],
        property: 'padding-left',
        defaults: '20px',
      },
      {
        name: 'Right',
        type: 'integer',
        units: ['px', '%'],
        property: 'padding-right',
        defaults: '20px',
      },
    ]
  });

  editor.StyleManager.addProperty('spacing-sector', {
    id: 'margin-preset',
    name: 'Margins',
    property: 'margin',
    type: 'select',
    defaults: 'auto',
    list: [
      { value: 'auto', name: 'Auto' },
      { value: '0', name: 'None' },
      { value: '2px', name: '2' },
      { value: '4px', name: '4' },
      { value: '8px', name: '8' },
      { value: '12px', name: '12' },
      { value: '24px', name: '24' },
    ],
  });

  editor.StyleManager.addType('my-type', {
   model: {
     style: {
       'margin-right': '20px',
       'margin-left': '20px',
     },
   },
   view: {},
   isType: (value) => {
     if (value && value.type == 'my-type') {
       return value;
     }
   },
  });
}
