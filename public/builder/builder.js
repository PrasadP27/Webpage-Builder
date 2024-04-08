const editor = grapesjs.init({
  container: '#editor',
  height: '100%',
  width: '100%',
  fromElement: true,
  storageManager: false,

  panels: {
    defaults: [
      {
        id: "panel-devices",
        el: ".panel_devices",
        buttons: [
          {
            id: "device-desktop",
            label: '<img src="assets/icons/desktop.svg" alt="desktop">',
            command: "set-device-desktop",
            active: true,
            togglable: false,
          },
          {
            id: 'device-tablet',
            label: '<img src="assets/icons/tablet.svg" alt="tablet">',
            command: 'set-device-tablet',
            togglable: false,
          },
          {
            id: "device-mobile",
            label: '<img src="assets/icons/mobile.svg" alt="mobile">',
            command: "set-device-mobile",
            togglable: false
          }
        ]
      },
      {
        id: "panel-basic-actions",
        el: ".panel_basic_actions",
        buttons: [
          {
            id: "visibility",
            active: true,
            className: "btn-toggle-borders",
            label: '<img src="assets/icons/view-components.svg" alt="code">',
            command: "sw-visibility",
          },
          {
            id: 'export',
            className: 'btn-open-export',
            label: '<img src="assets/icons/code.svg" alt="code">',
            command: 'export-template',
            context: 'export-template',
          }
        ]
      }
    ]
  },

  deviceManager: {
    devices: [
      {
        name: "Desktop",
        width: ""
      },
      {
        name: "Tablet",
        width: "768px",
        widthMedia: "992px"
      },
      {
        name: "Mobile",
        width: "320px",
        widthMedia: "480px"
      }
    ]
  },

});


//for devices
editor.Commands.add('set-device-desktop', {
  run: (editor) => editor.setDevice('Desktop'),
});

editor.Commands.add('set-device-tablet', {
  run: (editor) => editor.setDevice('Tablet'),
});

editor.Commands.add('set-device-mobile', {
  run: (editor) => editor.setDevice('Mobile'),
});

// Set the initial device
editor.setDevice('Desktop');