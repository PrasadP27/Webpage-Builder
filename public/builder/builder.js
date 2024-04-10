const editor = grapesjs.init({
  container: '#editor',
  height: '100%',
  width: '100%',
  fromElement: true,
  storageManager: false,

  canvas: {
    styles: [
      'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css',
    ],
  },

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

  blockManager: {
    appendTo: '#blocks',
    blocks: [
      // header
      
      {
        id: 'header-a',
        category: 'Header',
        label: `<svg fill="none" viewBox="0 0 266 150">
        <path fill="#F9F9F9" d="M0 0h266v150H0z" />
        <path stroke="#e2e8f0" d="M266 38.5H0" />
        <rect x=217 y=14 width=29 height=10 rx=2 fill="#cbd5e0" />
        <circle cx=29 cy=19 r=9 fill="#7f9cf5" />
        <rect x=150.132 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=171.264 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=192.396 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=129 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    </svg>`,
        content: `
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>`,
      },
      {
        id: 'header-b',
        category: 'Header',
        label: `<svg fill="none" viewBox="0 0 266 150">
        <path fill="#F9F9F9" d="M0 0h266v150H0z" />
        <path stroke="#e2e8f0" d="M266 38.5H0" />
        <rect x=141 y=14 width=29 height=10 rx=2 fill="#cbd5e0" />
        <circle cx=29 cy=19 r=9 fill="#7f9cf5" />
        <rect x=74.132 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=95.264 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=116.396 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=53 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <path fill="#cbd5e0" d="M45 8h1v22h-1z" />
    </svg>
          `,
        content: `<header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>`,
      },
      {
        id: 'header-c',
        category: 'Header',
        label: `<svg fill="none" viewBox="0 0 266 150">
        <path fill="#F9F9F9" d="M0 0h266v150H0z" />
        <path stroke="#e2e8f0" d="M266 38.5H0" />
        <rect x=217 y=14 width=29 height=10 rx=2 fill="#cbd5e0" />
        <circle cx=133 cy=19 r=9 fill="#7f9cf5" />
        <rect x=62.264 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=41.132 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=83.396 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=20 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    </svg>`,
        content: `<header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a class="mr-5 hover:text-gray-900">First Link</a>
        <a class="mr-5 hover:text-gray-900">Second Link</a>
        <a class="mr-5 hover:text-gray-900">Third Link</a>
        <a class="hover:text-gray-900">Fourth Link</a>
      </nav>
      <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>`
      },
      {
        id: 'header-d',
        category: 'Header',
        label: `<svg fill="none" viewBox="0 0 266 150">
        <path fill="#F9F9F9" d="M0 0h266v150H0z" />
        <path stroke="#e2e8f0" d="M266 38.5H0" />
        <rect x=217 y=14 width=29 height=10 rx=2 fill="#cbd5e0" />
        <circle cx=29 cy=19 r=9 fill="#7f9cf5" />
        <rect x=129.264 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=108.132 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=150.396 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
        <rect x=87 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    </svg>`,
        content: `<header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">First Link</a>
        <a class="mr-5 hover:text-gray-900">Second Link</a>
        <a class="mr-5 hover:text-gray-900">Third Link</a>
        <a class="mr-5 hover:text-gray-900">Fourth Link</a>
      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>`
      },

    ]
  },

layerManager: {
  appendTo: '#layers-container'
},

selectorManager: {
  appendTo: '#styles-container'
},

traitManager: {
  appendTo: '#trait-container',
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