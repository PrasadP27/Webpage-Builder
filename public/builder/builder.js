const blocks = [
  //basics
  {
    id: 'text',
    category: 'Basic',
    label: `<svg viewBox="0 0 645 138" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#F5F5F5"/>
    <rect width=100% height=100% fill="white"/>
    <path d="M244.091 56.4545V51.4545H279V56.4545H264.364V98H258.727V56.4545H244.091ZM287.699 98V51.4545H315.79V56.4545H293.335V72.1818H314.335V77.1818H293.335V93H316.153V98H287.699ZM328.676 51.4545L340.676 70.8182H341.04L353.04 51.4545H359.676L345.04 74.7273L359.676 98H353.04L341.04 79H340.676L328.676 98H322.04L337.04 74.7273L322.04 51.4545H328.676ZM364.466 56.4545V51.4545H399.375V56.4545H384.739V98H379.102V56.4545H364.466Z" fill="#4A5568"/>
    </svg>`,
    content: `<h1 class="text-xl">Weblox</h1>`,
  }, {
    id: 'button',
    category: 'Basic',
    label: `<svg viewBox="0 0 645 138" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#F5F5F5"/>
    <rect width=100% height=100% fill="white"/>
    <path d="M233 54C233 45.7157 239.716 39 248 39H397C405.284 39 412 45.7157 412 54V84C412 92.2843 405.284 99 397 99H248C239.716 99 233 92.2843 233 84V54Z" fill="#3b82f6"/>
    <path d="M290.114 76V58.5455H296.216C297.432 58.5455 298.435 58.7557 299.224 59.1761C300.014 59.5909 300.602 60.1506 300.989 60.8551C301.375 61.554 301.568 62.3295 301.568 63.1818C301.568 63.9318 301.435 64.5511 301.168 65.0398C300.906 65.5284 300.56 65.9148 300.128 66.1989C299.702 66.483 299.239 66.6932 298.739 66.8295V67C299.273 67.0341 299.81 67.2216 300.349 67.5625C300.889 67.9034 301.341 68.392 301.705 69.0284C302.068 69.6648 302.25 70.4432 302.25 71.3636C302.25 72.2386 302.051 73.0256 301.653 73.7244C301.256 74.4233 300.628 74.9773 299.77 75.3864C298.912 75.7955 297.795 76 296.42 76H290.114ZM292.227 74.125H296.42C297.801 74.125 298.781 73.858 299.361 73.3239C299.946 72.7841 300.239 72.1307 300.239 71.3636C300.239 70.7727 300.088 70.2273 299.787 69.7273C299.486 69.2216 299.057 68.8182 298.5 68.517C297.943 68.2102 297.284 68.0568 296.523 68.0568H292.227V74.125ZM292.227 66.2159H296.148C296.784 66.2159 297.358 66.0909 297.869 65.8409C298.386 65.5909 298.795 65.2386 299.097 64.7841C299.403 64.3295 299.557 63.7955 299.557 63.1818C299.557 62.4148 299.29 61.7642 298.756 61.2301C298.222 60.6903 297.375 60.4205 296.216 60.4205H292.227V66.2159ZM313.7 70.6477V62.9091H315.712V76H313.7V73.7841H313.564C313.257 74.4489 312.78 75.0142 312.132 75.4801C311.484 75.9403 310.666 76.1705 309.678 76.1705C308.859 76.1705 308.132 75.9915 307.496 75.6335C306.859 75.2699 306.359 74.7244 305.996 73.9972C305.632 73.2642 305.45 72.3409 305.45 71.2273V62.9091H307.462V71.0909C307.462 72.0455 307.729 72.8068 308.263 73.375C308.803 73.9432 309.49 74.2273 310.325 74.2273C310.825 74.2273 311.334 74.0994 311.851 73.8438C312.374 73.5881 312.811 73.196 313.163 72.6676C313.521 72.1392 313.7 71.4659 313.7 70.6477ZM325.089 62.9091V64.6136H318.305V62.9091H325.089ZM320.282 59.7727H322.293V72.25C322.293 72.8182 322.376 73.2443 322.54 73.5284C322.711 73.8068 322.927 73.9943 323.188 74.0909C323.455 74.1818 323.737 74.2273 324.032 74.2273C324.254 74.2273 324.435 74.2159 324.577 74.1932C324.719 74.1648 324.833 74.142 324.918 74.125L325.327 75.9318C325.191 75.983 325.001 76.0341 324.756 76.0852C324.512 76.142 324.202 76.1705 323.827 76.1705C323.259 76.1705 322.702 76.0483 322.157 75.804C321.617 75.5597 321.168 75.1875 320.81 74.6875C320.458 74.1875 320.282 73.5568 320.282 72.7955V59.7727ZM333.808 62.9091V64.6136H327.023V62.9091H333.808ZM329.001 59.7727H331.012V72.25C331.012 72.8182 331.094 73.2443 331.259 73.5284C331.43 73.8068 331.646 73.9943 331.907 74.0909C332.174 74.1818 332.455 74.2273 332.751 74.2273C332.972 74.2273 333.154 74.2159 333.296 74.1932C333.438 74.1648 333.552 74.142 333.637 74.125L334.046 75.9318C333.91 75.983 333.719 76.0341 333.475 76.0852C333.231 76.142 332.921 76.1705 332.546 76.1705C331.978 76.1705 331.421 76.0483 330.876 75.804C330.336 75.5597 329.887 75.1875 329.529 74.6875C329.177 74.1875 329.001 73.5568 329.001 72.7955V59.7727ZM342.011 76.2727C340.829 76.2727 339.792 75.9915 338.9 75.429C338.013 74.8665 337.32 74.0795 336.82 73.0682C336.326 72.0568 336.079 70.875 336.079 69.5227C336.079 68.1591 336.326 66.9687 336.82 65.9517C337.32 64.9347 338.013 64.1449 338.9 63.5824C339.792 63.0199 340.829 62.7386 342.011 62.7386C343.192 62.7386 344.227 63.0199 345.113 63.5824C346.005 64.1449 346.698 64.9347 347.192 65.9517C347.692 66.9687 347.942 68.1591 347.942 69.5227C347.942 70.875 347.692 72.0568 347.192 73.0682C346.698 74.0795 346.005 74.8665 345.113 75.429C344.227 75.9915 343.192 76.2727 342.011 76.2727ZM342.011 74.4659C342.908 74.4659 343.647 74.2358 344.227 73.7756C344.806 73.3153 345.235 72.7102 345.513 71.9602C345.792 71.2102 345.931 70.3977 345.931 69.5227C345.931 68.6477 345.792 67.8324 345.513 67.0767C345.235 66.321 344.806 65.7102 344.227 65.2443C343.647 64.7784 342.908 64.5455 342.011 64.5455C341.113 64.5455 340.374 64.7784 339.795 65.2443C339.215 65.7102 338.786 66.321 338.508 67.0767C338.229 67.8324 338.09 68.6477 338.09 69.5227C338.09 70.3977 338.229 71.2102 338.508 71.9602C338.786 72.7102 339.215 73.3153 339.795 73.7756C340.374 74.2358 341.113 74.4659 342.011 74.4659ZM353.024 68.125V76H351.013V62.9091H352.956V64.9545H353.126C353.433 64.2898 353.899 63.7557 354.524 63.3523C355.149 62.9432 355.956 62.7386 356.945 62.7386C357.831 62.7386 358.607 62.9205 359.271 63.2841C359.936 63.642 360.453 64.1875 360.822 64.9205C361.192 65.6477 361.376 66.5682 361.376 67.6818V76H359.365V67.8182C359.365 66.7898 359.098 65.9886 358.564 65.4148C358.03 64.8352 357.297 64.5455 356.365 64.5455C355.723 64.5455 355.149 64.6847 354.643 64.9631C354.143 65.2415 353.749 65.6477 353.459 66.1818C353.169 66.7159 353.024 67.3636 353.024 68.125Z" fill="white"/>
    </svg>
    `,
    content: `<button class="flex m-5 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-md text-lg">Button</button>`,
  },

  // header

  {
    id: 'header-a',
    category: 'Header',
    label: `<svg fill="none" viewBox="0 0 266 150">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <path stroke="#e2e8f0" d="M266 38.5H0" />
    <rect x=217 y=14 width=29 height=10 rx=2 fill="#cbd5e0" />
    <circle cx=29 cy=19 r=9 fill="#3b82f6" />
    <rect x=150.132 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=171.264 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=192.396 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=129 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
</svg>`,
    content: `
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-10">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Weblox</span>
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
    <circle cx=29 cy=19 r=9 fill="#3b82f6" />
    <rect x=74.132 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=95.264 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=116.396 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=53 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <path fill="#cbd5e0" d="M45 8h1v22h-1z" />
</svg>
      `,
    content: `<header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-10">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Weblox</span>
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
    <circle cx=133 cy=19 r=9 fill="#3b82f6" />
    <rect x=62.264 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=41.132 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=83.396 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=20 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
</svg>`,
    content: `<header class="text-gray-600 body-font">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-10">
  <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    <a class="mr-5 hover:text-gray-900">First Link</a>
    <a class="mr-5 hover:text-gray-900">Second Link</a>
    <a class="mr-5 hover:text-gray-900">Third Link</a>
    <a class="hover:text-gray-900">Fourth Link</a>
  </nav>
  <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
    <span class="ml-3 text-xl">Weblox</span>
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
    <circle cx=29 cy=19 r=9 fill="#3b82f6" />
    <rect x=129.264 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=108.132 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=150.396 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
    <rect x=87 y=17 width=16.604 height=4 rx=2 fill="#4a5568" />
</svg>`,
    content: `<header class="text-gray-600 body-font">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-10">
  <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
    <span class="ml-3 text-xl">Weblox</span>
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

  //Hero 

  // https://dummyimage.com/720x600
  {
    id: 'hero-a',
    category: 'Hero',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=20 y=86 width=29 height=10 rx=2 fill="#3b82f6" />
    <rect x=55 y=86 width=29 height=10 rx=2 fill="#cbd5e0" />
    <rect x=20 y=64 width=104 height=4 rx=2 fill="#a0aec0" />
    <rect x=20 y=53 width=72 height=5 rx=2.5 fill="#4a5568" />
    <rect x=20 y=72 width=97 height=4 rx=2 fill="#a0aec0" />
    <path
        d="M176.778 92h26.444A3.778 3.778 0 00207 88.222V61.778A3.778 3.778 0 00203.222 58h-26.444A3.778 3.778 0 00173 61.778v26.444A3.778 3.778 0 00176.778 92zm0 0l20.778-20.778L207 80.667m-20.778-12.278a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z"
        stroke="#a0aec0" strokeWidth=3 strokeLinecap="round" strokeLinejoin="round" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
          <br class="hidden lg:inline-block">readymade gluten
        </h1>
        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded-xl" alt="hero" src="/assets/images/hero-a.webp">
      </div>
    </div>
  </section>`
  },
  {
    id: 'hero-b',
    category: 'Hero',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=136 y=114 width=29 height=10 rx=2 fill="#cbd5e0" />
    <rect x=101 y=114 width=29 height=10 rx=2 fill="#3b82f6" />
    <rect x=81 y=92 width=104 height=4 rx=2 fill="#a0aec0" />
    <rect x=97 y=81 width=72 height=5 rx=2.5 fill="#4a5568" />
    <rect x=85 y=100 width=97 height=4 rx=2 fill="#a0aec0" />
    <path
        d="M119.778 61h26.444A3.778 3.778 0 00150 57.222V30.778A3.778 3.778 0 00146.222 27h-26.444A3.778 3.778 0 00116 30.778v26.444A3.778 3.778 0 00119.778 61zm0 0l20.778-20.778L150 49.667m-20.778-12.278a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z"
        stroke="#a0aec0" strokeWidth=3 strokeLinecap="round" strokeLinejoin="round" />
</svg>
`,
    content: `<section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/assets/images/hero-b.webp">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
        <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </section>`
  },
  {
    id: 'hero-c',
    category: 'Hero',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=133 y=86 width=29 height=10 rx=2 fill="#3b82f6" />
    <rect x=168 y=86 width=29 height=10 rx=2 fill="#cbd5e0" />
    <rect x=133 y=64 width=104 height=4 rx=2 fill="#a0aec0" />
    <rect x=133 y=53 width=72 height=5 rx=2.5 fill="#4a5568" />
    <rect x=133 y=72 width=97 height=4 rx=2 fill="#a0aec0" />
    <path
        d="M62.778 92h26.444A3.778 3.778 0 0093 88.222V61.778A3.778 3.778 0 0089.222 58H62.778A3.778 3.778 0 0059 61.778v26.444A3.778 3.778 0 0062.778 92zm0 0l20.778-20.778L93 80.667M72.222 68.389a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z"
        stroke="#a0aec0" strokeWidth=3 strokeLinecap="round" strokeLinejoin="round" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="/assets/images/hero-c.webp">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
          <br class="hidden lg:inline-block">readymade gluten
        </h1>
        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </section>`
  },

  //about

  {
    id: 'about-a',
    category: 'About',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=113 y=120 width=40 height=10 rx=2 fill="#3b82f6" />
    <rect x=81 y=31 width=104.391 height=4 rx=2 fill="#a0aec0" />
    <rect x=96 y=20 width=74 height=5 rx=2.5 fill="#4a5568" />
    <rect x=85 y=39 width=97.365 height=4 rx=2 fill="#a0aec0" />
    <rect x=26 y=73 width=28 height=3 rx=1.5 fill="#4a5568" />
    <rect x=26 y=79 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=26 y=84 width=38 height=2 rx=1 fill="#a0aec0" />
    <rect x=26 y=89 width=24 height=2 rx=1 fill="#3b82f6" />
    <rect x=20 y=62 width=1 height=39 rx=0.5 fill="#cbd5e0" />
    <rect x=86 y=73 width=28 height=3 rx=1.5 fill="#4a5568" />
    <rect x=86 y=79 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=86 y=84 width=38 height=2 rx=1 fill="#a0aec0" />
    <rect x=86 y=89 width=24 height=2 rx=1 fill="#3b82f6" />
    <rect x=80 y=62 width=1 height=39 rx=0.5 fill="#cbd5e0" />
    <rect x=146.136 y=73 width=28.636 height=3 rx=1.5 fill="#4a5568" />
    <rect x=146.136 y=79 width=34.773 height=2 rx=1 fill="#a0aec0" />
    <rect x=146.136 y=84 width=38.864 height=2 rx=1 fill="#a0aec0" />
    <rect x=146.136 y=89 width=24.546 height=2 rx=1 fill="#3b82f6" />
    <rect x=140 y=62 width=1.023 height=39 rx=0.511 fill="#cbd5e0" />
    <rect x=207.136 y=73 width=28.636 height=3 rx=1.5 fill="#4a5568" />
    <rect x=207.136 y=79 width=34.773 height=2 rx=1 fill="#a0aec0" />
    <rect x=207.136 y=84 width=38.864 height=2 rx=1 fill="#a0aec0" />
    <rect x=207.136 y=89 width=24.546 height=2 rx=1 fill="#3b82f6" />
    <rect x=201 y=62 width=1.023 height=39 rx=0.511 fill="#cbd5e0" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
      </div>
      <div class="flex flex-wrap">
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <a class="text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <a class="text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
          <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <a class="text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
          <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <a class="text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
    </div>
  </section>`
  },
  {
    id: 'about-b',
    category: 'About',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=142 y=32 width=104.391 height=4 rx=2 fill="#a0aec0" />
    <rect x=20 y=32 width=74 height=5 rx=2.5 fill="#4a5568" />
    <rect x=142 y=40 width=77 height=4 rx=2 fill="#a0aec0" />
    <rect x=20 y=74 width=50 height=44 rx=2 fill="#e2e8f0" />
    <path
        d="M40.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L51 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=24 y=108 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=24 y=112 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=24 y=104 width=10 height=2 rx=1 fill="#3b82f6" />
    <rect x=79 y=74 width=50 height=44 rx=2 fill="#e2e8f0" />
    <path
        d="M99.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L110 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=83 y=108 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=83 y=112 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=83 y=104 width=10 height=2 rx=1 fill="#3b82f6" />
    <rect x=138 y=74 width=50 height=44 rx=2 fill="#e2e8f0" />
    <path
        d="M158.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L169 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=142 y=108 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=142 y=112 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=142 y=104 width=10 height=2 rx=1 fill="#3b82f6" />
    <rect x=197 y=74 width=50 height=44 rx=2 fill="#e2e8f0" />
    <path
        d="M217.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L228 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=201 y=108 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=201 y=112 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=201 y=104 width=10 height=2 rx=1 fill="#3b82f6" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
          <div class="h-1 w-20 bg-blue-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="/assets/images/about-d.webp" alt="content">
            <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="/assets/images/gallery-a.webp" alt="content">
            <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="/assets/images/gallery-b.webp" alt="content">
            <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="/assets/images/gallery-c.webp" alt="content">
            <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },
  {
    id: 'about-c',
    category: 'About',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=113 y=120 width=40 height=10 rx=2 fill="#3b82f6" />
    <rect x=81 y=31 width=104.391 height=4 rx=2 fill="#a0aec0" />
    <rect x=96 y=20 width=74 height=5 rx=2.5 fill="#4a5568" />
    <rect x=20.5 y=51.5 width=69 height=23 rx=1.5 fill="#F9F9F9" stroke="#cbd5e0" />
    <rect x=24 y=65 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=24 y=69 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=28 cy=59 r=4 fill="#c3dafe" />
    <rect x=98.5 y=51.5 width=69 height=23 rx=1.5 fill="#F9F9F9" stroke="#cbd5e0" />
    <rect x=102 y=65 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=102 y=69 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=106 cy=59 r=4 fill="#c3dafe" />
    <rect x=176.5 y=51.5 width=69 height=23 rx=1.5 fill="#F9F9F9" stroke="#cbd5e0" />
    <rect x=180 y=65 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=180 y=69 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=184 cy=59 r=4 fill="#c3dafe" />
    <rect x=20.5 y=81.5 width=69 height=23 rx=1.5 fill="#F9F9F9" stroke="#cbd5e0" />
    <rect x=24 y=95 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=24 y=99 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=28 cy=89 r=4 fill="#c3dafe" />
    <rect x=98.5 y=81.5 width=69 height=23 rx=1.5 fill="#F9F9F9" stroke="#cbd5e0" />
    <rect x=102 y=95 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=102 y=99 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=106 cy=89 r=4 fill="#c3dafe" />
    <rect x=176.5 y=81.5 width=69 height=23 rx=1.5 fill="#F9F9F9" stroke="#cbd5e0" />
    <rect x=180 y=95 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=180 y=99 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=184 cy=89 r=4 fill="#c3dafe" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
    </div>
  </section>`
  },
  {
    id: 'about-d',
    category: 'About',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <path d="M93 67.5a.5.5 0 011 0v62a.5.5 0 01-1 0v-62z" fill="#cbd5e0" />
    <path
        d="M106 83a2 2 0 012-2h103.337a2 2 0 110 4H108a2 2 0 01-2-2zM106 107a2 2 0 012-2h95a2 2 0 110 4h-95a2 2 0 01-2-2zM106 91a2 2 0 012-2h121a2 2 0 110 4H108a2 2 0 01-2-2zM106 99a2 2 0 012-2h82.957a2 2 0 010 4H108a2 2 0 01-2-2z"
        fill="#a0aec0" />
    <path d="M106 115a2 2 0 012-2h20a2 2 0 110 4h-20a2 2 0 01-2-2z" fill="#3b82f6" />
    <path d="M45 104a2 2 0 012-2h20a2 2 0 110 4H47a2 2 0 01-2-2z" fill="#4a5568" />
    <rect x=37 y=110 width=40 height=2 rx=1 fill="#a0aec0" />
    <rect x=35 y=120 width=44 height=2 rx=1 fill="#a0aec0" />
    <path d="M33 116a1 1 0 011-1h45a1 1 0 010 2H34a1 1 0 01-1-1z" fill="#a0aec0" />
    <path
        d="M122.889 47h20.222A2.889 2.889 0 00146 44.111V23.89a2.889 2.889 0 00-2.889-2.89h-20.222A2.889 2.889 0 00120 23.889V44.11a2.889 2.889 0 002.889 2.89zm0 0l15.889-15.889L146 38.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z"
        stroke="#a0aec0" strokeWidth=2 strokeLinecap="round" strokeLinejoin="round" />
    <circle cx=56.5 cy=85.5 r=10.5 fill="#e2e8f0" />
</svg>
`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="/assets/images/about-d.webp">
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img alt="content" class="object-cover object-center h-full w-full rounded-full bg-gray-100" src="/assets/images/avatar-2.webp">
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
              <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
              <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
            <a class="text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },

  //features

  {
    id: 'features-a',
    category: 'Features',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=96 y=39 width=74 height=5 rx=2.5 fill="#4a5568" />
    <circle cx=26 cy=90 r=6 fill="#c3dafe" />
    <rect x=82 y=48 width=102 height=5 rx=2.5 fill="#4a5568" />
    <path
        d="M38 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM38 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z"
        fill="#a0aec0" />
    <path d="M38 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <rect x=38 y=84 width=43 height=4 rx=2 fill="#4a5568" />
    <circle cx=105 cy=90 r=6 fill="#c3dafe" />
    <path
        d="M117 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM117 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z"
        fill="#a0aec0" />
    <path d="M117 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <rect x=117 y=84 width=43 height=4 rx=2 fill="#4a5568" />
    <circle cx=184 cy=90 r=6 fill="#c3dafe" />
    <path
        d="M196 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM196 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z"
        fill="#a0aec0" />
    <path d="M196 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <rect x=196 y=84 width=43 height=4 rx=2 fill="#4a5568" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
        <br class="hidden sm:block">Selfies Wayfarers
      </h1>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div class="p-4 md:w-1/3 flex">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },
  {
    id: 'features-b',
    category: 'Features',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <circle cx=140 cy=26 r=6 fill="#c3dafe" />
    <path d="M134 44a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M134 49a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z" fill="#3b82f6" />
    <rect x=134 y=37 width=58 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=140 cy=66 r=6 fill="#c3dafe" />
    <path d="M134 84a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M134 89a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z" fill="#3b82f6" />
    <rect x=134 y=77 width=58 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=140 cy=106 r=6 fill="#c3dafe" />
    <path d="M134 124a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M134 129a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z" fill="#3b82f6" />
    <rect x=134 y=117 width=58 height=3 rx=1.5 fill="#4a5568" />
    <path
        d="M63.792 92h26.544a3.785 3.785 0 003.792-3.778V61.778A3.785 3.785 0 0090.336 58H63.792A3.785 3.785 0 0060 61.778v26.444A3.785 3.785 0 0063.792 92zm0 0l20.856-20.778 9.48 9.445M73.272 68.389a2.839 2.839 0 01-2.844 2.833 2.839 2.839 0 01-2.844-2.833 2.839 2.839 0 012.844-2.833 2.839 2.839 0 012.844 2.833z"
        stroke="#a0aec0" strokeWidth=3 strokeLinecap="round" strokeLinejoin="round" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-cover object-center h-full w-full" src="/assets/images/features-b.webp">
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },
  {
    id: 'features-c',
    category: 'Features',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=20.5 y=54.5 width=107 height=41 rx=1.5 fill="#F9F9F9" stroke="#cbd5e0" />
    <circle cx=32 cy=68 r=6 fill="#c3dafe" />
    <path
        d="M44 72.5a1.5 1.5 0 011.5-1.5h68a1.5 1.5 0 010 3h-68a1.5 1.5 0 01-1.5-1.5zM44 79.5a1.5 1.5 0 011.5-1.5h54a1.5 1.5 0 010 3h-54a1.5 1.5 0 01-1.5-1.5z"
        fill="#a0aec0" />
    <path d="M44 86.5a1.5 1.5 0 011.5-1.5h19a1.5 1.5 0 010 3h-19a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <rect x=44 y=62 width=32 height=4 rx=2 fill="#4a5568" />
    <rect x=138.5 y=54.5 width=107 height=41 rx=1.5 fill="#F9F9F9" stroke="#cbd5e0" />
    <circle cx=150 cy=68 r=6 fill="#c3dafe" />
    <path
        d="M162 72.5a1.5 1.5 0 011.5-1.5h68a1.5 1.5 0 010 3h-68a1.5 1.5 0 01-1.5-1.5zM162 79.5a1.5 1.5 0 011.5-1.5h54a1.5 1.5 0 010 3h-54a1.5 1.5 0 01-1.5-1.5z"
        fill="#a0aec0" />
    <path d="M162 86.5a1.5 1.5 0 011.5-1.5h19a1.5 1.5 0 010 3h-19a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <rect x=162 y=62 width=32 height=4 rx=2 fill="#4a5568" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/2 md:w-full">
          <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/2 md:w-full">
          <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },
  {
    id: 'features-d',
    category: 'Features',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=20 y=78 width=69 height=31 rx=2 fill="#e2e8f0" />
    <rect x=113 y=41 width=40 height=3 rx=1.5 fill="#3b82f6" />
    <circle cx=28 cy=86 r=3 fill="#3b82f6" />
    <rect x=98 y=49 width=70 height=5 rx=2.5 fill="#4a5568" />
    <path d="M25 93a1 1 0 011-1h54a1 1 0 110 2H26a1 1 0 01-1-1zM25 98a1 1 0 011-1h44a1 1 0 110 2H26a1 1 0 01-1-1z"
        fill="#a0aec0" />
    <path d="M25 103a1 1 0 011-1h11a1 1 0 010 2H26a1 1 0 01-1-1z" fill="#3b82f6" />
    <rect x=34 y=84.5 width=35 height=3 rx=1.5 fill="#4a5568" />
    <rect x=99 y=78 width=69 height=31 rx=2 fill="#e2e8f0" />
    <circle cx=107 cy=86 r=3 fill="#3b82f6" />
    <path d="M104 93a1 1 0 011-1h54a1 1 0 010 2h-54a1 1 0 01-1-1zM104 98a1 1 0 011-1h44a1 1 0 010 2h-44a1 1 0 01-1-1z"
        fill="#a0aec0" />
    <path d="M104 103a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#3b82f6" />
    <rect x=113 y=84.5 width=35 height=3 rx=1.5 fill="#4a5568" />
    <rect x=178 y=78 width=69 height=31 rx=2 fill="#e2e8f0" />
    <circle cx=186 cy=86 r=3 fill="#3b82f6" />
    <path d="M183 93a1 1 0 011-1h54a1 1 0 010 2h-54a1 1 0 01-1-1zM183 98a1 1 0 011-1h44a1 1 0 010 2h-44a1 1 0 01-1-1z"
        fill="#a0aec0" />
    <path d="M183 103a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#3b82f6" />
    <rect x=192 y=84.5 width=35 height=3 rx=1.5 fill="#4a5568" />
</svg>
`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">Neptune</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },
  {
    id: 'features-e',
    category: 'Features',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <circle cx=88 cy=28 r=8 fill="#c3dafe" />
    <path d="M102 28a1 1 0 011-1h68a1 1 0 010 2h-68a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M102 33a1 1 0 011-1h14a1 1 0 010 2h-14a1 1 0 01-1-1z" fill="#3b82f6" />
    <rect x=102 y=21 width=40 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=88 cy=98 r=8 fill="#c3dafe" />
    <path d="M102 98a1 1 0 011-1h68a1 1 0 010 2h-68a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M102 103a1 1 0 011-1h14a1 1 0 010 2h-14a1 1 0 01-1-1z" fill="#3b82f6" />
    <rect x=102 y=91 width=40 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=178 cy=63 r=8 fill="#c3dafe" />
    <path d="M80 63a1 1 0 011-1h68a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M80 68a1 1 0 011-1h14a1 1 0 110 2H81a1 1 0 01-1-1z" fill="#3b82f6" />
    <rect x=80 y=56 width=40 height=3 rx=1.5 fill="#4a5568" />
    <rect x=113 y=120 width=40 height=10 rx=2 fill="#3b82f6" />
    <path d="M185.5 45a.5.5 0 010 1h-105a.5.5 0 010-1h105zM185.5 80a.5.5 0 010 1h-105a.5.5 0 010-1h105z"
        fill="#cbd5e0" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
      </div>
      <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <button class="flex mx-auto mt-20 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
    </div>
  </section>`
  },
  {
    id: 'features-f',
    category: 'Features',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <path d="M70 61a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M80 65a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M77 65a2 2 0 11-4 0 2 2 0 014 0z" fill="#3b82f6" />
    <path d="M136 61a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M146 65a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M143 65a2 2 0 11-4 0 2 2 0 014 0z" fill="#3b82f6" />
    <path d="M70 77a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M80 81a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M77 81a2 2 0 11-4 0 2 2 0 014 0z" fill="#3b82f6" />
    <path d="M136 77a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M146 81a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M143 81a2 2 0 11-4 0 2 2 0 014 0z" fill="#3b82f6" />
    <path d="M70 93a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M80 97a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M77 97a2 2 0 11-4 0 2 2 0 014 0z" fill="#3b82f6" />
    <path d="M136 93a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M146 97a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M143 97a2 2 0 11-4 0 2 2 0 014 0z" fill="#3b82f6" />
    <rect x=81 y=31 width=104.391 height=4 rx=2 fill="#a0aec0" />
    <rect x=81 y=31 width=104.391 height=4 rx=2 fill="#a0aec0" />
    <rect x=96 y=20 width=74 height=5 rx=2.5 fill="#4a5568" />
    <rect x=97 y=39 width=73 height=4 rx=2 fill="#a0aec0" />
    <rect x=113 y=120 width=40 height=10 rx=2 fill="#3b82f6" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      </div>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Authentic Cliche Forage</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Kinfolk Chips Snackwave</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Coloring Book Ethical</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Typewriter Polaroid Cray</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Pack Truffaut Blue</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">The Catcher In The Rye</span>
          </div>
        </div>
      </div>
      <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
    </div>
  </section>`
  },

  // gallery

  {
    id: 'gallery-a',
    category: 'Gallery',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=142 y=32 width=104.391 height=4 rx=2 fill="#a0aec0" />
    <rect x=20 y=32 width=74 height=5 rx=2.5 fill="#4a5568" />
    <rect x=142 y=40 width=77 height=4 rx=2 fill="#a0aec0" />
    <path fill="#e2e8f0" d="M20 61h55v27H20zM20 91h111v39H20z" />
    <path
        d="M70.556 118h10.888c.86 0 1.556-.696 1.556-1.556v-10.888c0-.86-.696-1.556-1.556-1.556H70.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556L83 113.333m-8.556-5.055a1.166 1.166 0 11-2.332 0 1.166 1.166 0 012.332 0z"
        stroke="#a0aec0" strokeWidth=1.2 strokeLinecap="round" strokeLinejoin="round" />
    <path fill="#e2e8f0" d="M78 61h53v27H78z" />
    <path
        d="M101.111 79h7.778A1.11 1.11 0 00110 77.889V70.11a1.11 1.11 0 00-1.111-1.11h-7.778A1.11 1.11 0 00100 70.111v7.778A1.11 1.11 0 00101.111 79zm0 0l6.111-6.111L110 75.667m-6.111-3.611a.833.833 0 11-1.666 0 .833.833 0 011.666 0zM44.111 79h7.778c.613 0 1.111-.498 1.111-1.111V70.11c0-.614-.498-1.111-1.111-1.111H44.11c-.613 0-1.111.498-1.111 1.111v7.778c0 .614.498 1.111 1.111 1.111zm0 0l6.111-6.111L53 75.667m-6.111-3.611a.833.833 0 11-1.667 0 .833.833 0 011.667 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <path fill="#e2e8f0" d="M134 103h56v27h-56z" />
    <path
        d="M158.111 122h7.778a1.11 1.11 0 001.111-1.111v-7.778a1.11 1.11 0 00-1.111-1.111h-7.778a1.11 1.11 0 00-1.111 1.111v7.778a1.11 1.11 0 001.111 1.111zm0 0l6.111-6.111 2.778 2.778m-6.111-3.611a.833.833 0 11-1.666 0 .833.833 0 011.666 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <path fill="#e2e8f0" d="M134 61h112v39H134zM193 103h53v27h-53z" />
    <path
        d="M215.111 122h7.778a1.11 1.11 0 001.111-1.111v-7.778a1.11 1.11 0 00-1.111-1.111h-7.778a1.11 1.11 0 00-1.111 1.111v7.778a1.11 1.11 0 001.111 1.111zm0 0l6.111-6.111 2.778 2.778m-6.111-3.611a.833.833 0 11-1.666 0 .833.833 0 011.666 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <path
        d="M184.556 87h10.888c.86 0 1.556-.696 1.556-1.556V74.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0z"
        stroke="#a0aec0" strokeWidth=1.2 strokeLinecap="round" strokeLinejoin="round" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex w-full mb-20 flex-wrap">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
      </div>
      <div class="flex flex-wrap md:-m-2 -m-1">
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="/assets/images/gallery-a.webp">
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="/assets/images/gallery-b.webp">
          </div>
          <div class="md:p-2 p-1 w-full">
            <img alt="gallery" class="w-full h-full object-cover object-center block" src="/assets/images/gallery-c.webp">
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img alt="gallery" class="w-full h-full object-cover object-center block" src="/assets/images/gallery-a.webp">
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="/assets/images/gallery-b.webp">
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="/assets/images/gallery-c.webp">
          </div>
        </div>
      </div>
    </div>
  </section>`
  },
  {
    id: 'gallery-b',
    category: 'Gallery',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <path fill="#e2e8f0" d="M71 84h62v38H71zM71 27h127v54H71zM136 84h62v38h-62z" />
    <path d="M93 54.5a1.5 1.5 0 011.5-1.5h77a1.5 1.5 0 010 3h-77a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0" />
    <path d="M123 61.5a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 010 3h-17a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <rect x=108 y=45 width=50 height=4 rx=2 fill="#4a5568" />
    <path d="M81 103.5a1.5 1.5 0 011.5-1.5h39a1.5 1.5 0 010 3h-39a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0" />
    <path d="M97 110.5a1.5 1.5 0 011.5-1.5h7a1.5 1.5 0 010 3h-7a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <rect x=89 y=94 width=26 height=4 rx=2 fill="#4a5568" />
    <path d="M146 103.5a1.5 1.5 0 011.5-1.5h39a1.5 1.5 0 010 3h-39a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0" />
    <path d="M162 110.5a1.5 1.5 0 011.5-1.5h7a1.5 1.5 0 010 3h-7a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <rect x=154 y=94 width=26 height=4 rx=2 fill="#4a5568" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-2/3 mx-auto">
        <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
          <img alt="gallery" class="w-full object-cover h-full object-center block opacity-30 absolute inset-0" src="/assets/images/gallery-a.webp">
          <div class="text-center relative z-10 w-full">
            <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
            <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
            <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="px-2 w-1/2">
            <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img alt="gallery" class="w-full object-cover h-full object-center block opacity-30 absolute inset-0" src="/assets/images/gallery-b.webp">
              <div class="text-center relative z-10 w-full">
                <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="px-2 w-1/2">
            <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img alt="gallery" class="w-full object-cover h-full object-center block opacity-30 absolute inset-0" src="/assets/images/gallery-c.webp">
              <div class="text-center relative z-10 w-full">
                <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },

  //pricing 

  {
    id: 'pricing-a',
    category: 'Pricing',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=96 y=22 width=74 height=5 rx=2.5 fill="#4a5568" />
    <rect x=87 y=31 width=92 height=4 rx=2 fill="#a0aec0" />
    <path d="M65.5 83a.5.5 0 010 1h-41a.5.5 0 010-1h41z" fill="#e2e8f0" />
    <rect x=20.5 y=69.5 width=49 height=58 rx=1.5 stroke="#cbd5e0" />
    <circle cx=26 cy=89 r=2 fill="#a0aec0" />
    <rect x=24 y=77 width=18 height=2 rx=1 fill="#4a5568" />
    <rect x=30 y=88 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=26 cy=95 r=2 fill="#a0aec0" />
    <rect x=30 y=94 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=26 cy=101 r=2 fill="#a0aec0" />
    <rect x=30 y=100 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=26 cy=107 r=2 fill="#a0aec0" />
    <rect x=30 y=106 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=24 y=73 width=10 height=2 rx=1 fill="#4a5568" />
    <path d="M24 116.5a2 2 0 012-2h38a2 2 0 012 2v4a2 2 0 01-2 2H26a2 2 0 01-2-2v-4z" fill="#a0aec0" />
    <path d="M124.5 83a.5.5 0 010 1h-41a.5.5 0 010-1h41z" fill="#e2e8f0" />
    <rect x=79.5 y=69.5 width=49 height=58 rx=1.5 stroke="#3b82f6" />
    <circle cx=85 cy=89 r=2 fill="#a0aec0" />
    <rect x=83 y=77 width=18 height=2 rx=1 fill="#4a5568" />
    <rect x=89 y=88 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=85 cy=95 r=2 fill="#a0aec0" />
    <rect x=89 y=94 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=85 cy=101 r=2 fill="#a0aec0" />
    <rect x=89 y=100 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=85 cy=107 r=2 fill="#a0aec0" />
    <rect x=89 y=106 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=83 y=73 width=10 height=2 rx=1 fill="#4a5568" />
    <path d="M183.5 83a.5.5 0 010 1h-41a.5.5 0 010-1h41z" fill="#e2e8f0" />
    <rect x=138.5 y=69.5 width=49 height=58 rx=1.5 stroke="#cbd5e0" />
    <circle cx=144 cy=89 r=2 fill="#a0aec0" />
    <rect x=142 y=77 width=18 height=2 rx=1 fill="#4a5568" />
    <rect x=148 y=88 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=144 cy=95 r=2 fill="#a0aec0" />
    <rect x=148 y=94 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=144 cy=101 r=2 fill="#a0aec0" />
    <rect x=148 y=100 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=144 cy=107 r=2 fill="#a0aec0" />
    <rect x=148 y=106 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=142 y=73 width=10 height=2 rx=1 fill="#4a5568" />
    <path d="M142 116.5a2 2 0 012-2h38a2 2 0 012 2v4a2 2 0 01-2 2h-38a2 2 0 01-2-2v-4z" fill="#a0aec0" />
    <path d="M83 116.5a2 2 0 012-2h38a2 2 0 012 2v4a2 2 0 01-2 2H85a2 2 0 01-2-2v-4z" fill="#3b82f6" />
    <path d="M242.5 83a.5.5 0 010 1h-41a.5.5 0 010-1h41z" fill="#e2e8f0" />
    <rect x=197.5 y=69.5 width=49 height=58 rx=1.5 stroke="#cbd5e0" />
    <circle cx=203 cy=89 r=2 fill="#a0aec0" />
    <rect x=201 y=77 width=18 height=2 rx=1 fill="#4a5568" />
    <rect x=207 y=88 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=203 cy=95 r=2 fill="#a0aec0" />
    <rect x=207 y=94 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=203 cy=101 r=2 fill="#a0aec0" />
    <rect x=207 y=100 width=34 height=2 rx=1 fill="#a0aec0" />
    <circle cx=203 cy=107 r=2 fill="#a0aec0" />
    <rect x=207 y=106 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=201 y=73 width=10 height=2 rx=1 fill="#4a5568" />
    <path d="M201 116.5a2 2 0 012-2h38a2 2 0 012 2v4a2 2 0 01-2 2h-38a2 2 0 01-2-2v-4z" fill="#a0aec0" />
    <path d="M118 43.5h30a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-30a1.5 1.5 0 01-1.5-1.5v-4a1.5 1.5 0 011.5-1.5z"
        stroke="#3b82f6" />
    <path fill="#3b82f6" d="M117 43h16v7h-16z" />
</svg>`,
    content: `<section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
        <div class="flex mx-auto border-2 border-blue-500 rounded overflow-hidden mt-6">
          <button class="py-1 px-4 bg-blue-500 text-white focus:outline-none">Monthly</button>
          <button class="py-1 px-4 focus:outline-none">Annually</button>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
            <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Vexillologist pitchfork
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Tumeric plaid portland
            </p>
            <p class="flex items-center text-gray-600 mb-6">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Mixtape chillwave tumeric
            </p>
            <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div class="h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden">
            <span class="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>$38</span>
              <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Vexillologist pitchfork
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Tumeric plaid portland
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Hexagon neutra unicorn
            </p>
            <p class="flex items-center text-gray-600 mb-6">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Mixtape chillwave tumeric
            </p>
            <button class="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>$56</span>
              <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Vexillologist pitchfork
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Tumeric plaid portland
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Hexagon neutra unicorn
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Vexillologist pitchfork
            </p>
            <p class="flex items-center text-gray-600 mb-6">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Mixtape chillwave tumeric
            </p>
            <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>$72</span>
              <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Vexillologist pitchfork
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Tumeric plaid portland
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Hexagon neutra unicorn
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Vexillologist pitchfork
            </p>
            <p class="flex items-center text-gray-600 mb-6">
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Mixtape chillwave tumeric
            </p>
            <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },
  {
    id: 'pricing-b',
    category: 'Pricing',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=110 y=20 width=46 height=5 rx=2.5 fill="#4a5568" />
    <rect x=87 y=29 width=92 height=4 rx=2 fill="#a0aec0" />
    <rect x=106 y=37 width=55 height=4 rx=2 fill="#a0aec0" />
    <rect x=50 y=57 width=167 height=11 rx=1 fill="#e2e8f0" />
    <rect x=55 y=61 width=39 height=3 rx=1.5 fill="#4a5568" />
    <rect x=55 y=121 width=19 height=3 rx=1.5 fill="#3b82f6" />
    <rect x=108 y=61 width=24 height=3 rx=1.5 fill="#4a5568" />
    <rect x=145 y=61 width=30 height=3 rx=1.5 fill="#4a5568" />
    <rect x=188 y=61 width=20 height=3 rx=1.5 fill="#4a5568" />
    <rect x=55 y=74 width=26 height=2 rx=1 fill="#a0aec0" />
    <rect x=108 y=74 width=12 height=2 rx=1 fill="#a0aec0" />
    <path d="M216.5 82a.5.5 0 010 1h-166a.5.5 0 010-1h166z" fill="#e2e8f0" />
    <rect x=145 y=74 width=13 height=2 rx=1 fill="#a0aec0" />
    <rect x=188 y=74 width=20 height=2 rx=1 fill="#a0aec0" />
    <rect x=55 y=89 width=39 height=2 rx=1 fill="#a0aec0" />
    <rect x=108 y=89 width=17 height=2 rx=1 fill="#a0aec0" />
    <path d="M216.5 97a.5.5 0 010 1h-166a.5.5 0 010-1h166z" fill="#e2e8f0" />
    <rect x=145 y=89 width=18 height=2 rx=1 fill="#a0aec0" />
    <rect x=188 y=89 width=13 height=2 rx=1 fill="#a0aec0" />
    <rect x=55 y=104 width=33 height=2 rx=1 fill="#a0aec0" />
    <rect x=108 y=104 width=14 height=2 rx=1 fill="#a0aec0" />
    <path d="M216.5 112a.5.5 0 010 1h-166a.5.5 0 010-1h166z" fill="#e2e8f0" />
    <rect x=182 y=119 width=31 height=10 rx=2 fill="#3b82f6" />
    <rect x=145 y=104 width=18 height=2 rx=1 fill="#a0aec0" />
    <rect x=188 y=104 width=20 height=2 rx=1 fill="#a0aec0" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
      </div>
      <div class="lg:w-2/3 w-full mx-auto overflow-auto">
        <table class="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
              <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3">Start</td>
              <td class="px-4 py-3">5 Mb/s</td>
              <td class="px-4 py-3">15 GB</td>
              <td class="px-4 py-3 text-lg text-gray-900">Free</td>
              <td class="w-10 text-center">
                <input name="plan" type="radio">
              </td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
              <td class="border-t-2 border-gray-200 w-10 text-center">
                <input name="plan" type="radio">
              </td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
              <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
              <td class="border-t-2 border-gray-200 w-10 text-center">
                <input name="plan" type="radio">
              </td>
            </tr>
            <tr>
              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
              <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                <input name="plan" type="radio">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
        <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Button</button>
      </div>
    </div>
  </section>`
  },

  //steps

  {
    id: 'step-a',
    category: 'Steps',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <path d="M24 28.5a.5.5 0 011 0v93a.5.5 0 01-1 0v-93z" fill="#cbd5e0" />
    <path d="M26 40.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#3b82f6" />
    <path d="M47 43a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z" fill="#a0aec0" />
    <rect x=47 y=36 width=35 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=36.5 cy=40.5 r=6.5 fill="#c3dafe" />
    <path d="M26 63.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#3b82f6" />
    <path d="M47 66a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z" fill="#a0aec0" />
    <rect x=47 y=59 width=35 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=36.5 cy=63.5 r=6.5 fill="#c3dafe" />
    <path d="M26 86.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#3b82f6" />
    <path d="M47 89a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z" fill="#a0aec0" />
    <rect x=47 y=82 width=35 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=36.5 cy=86.5 r=6.5 fill="#c3dafe" />
    <path d="M26 109.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#3b82f6" />
    <path d="M47 112a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z" fill="#a0aec0" />
    <rect x=47 y=105 width=35 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=36.5 cy=109.5 r=6.5 fill="#c3dafe" />
    <path
        d="M175.792 89h26.544a3.785 3.785 0 003.792-3.778V58.778A3.785 3.785 0 00202.336 55h-26.544A3.785 3.785 0 00172 58.778v26.444A3.785 3.785 0 00175.792 89zm0 0l20.856-20.778 9.48 9.445m-20.856-12.278a2.838 2.838 0 01-2.844 2.833 2.838 2.838 0 01-2.844-2.833 2.838 2.838 0 012.844-2.833 2.838 2.838 0 012.844 2.833z"
        stroke="#a0aec0" strokeWidth=3 strokeLinecap="round" strokeLinejoin="round" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">1</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Shooting Stars</h2>
            <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">2</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">The Catalyzer</h2>
            <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">3</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">The 400 Blows</h2>
            <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
      </div>
      <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">4</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Neptune</h2>
            <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },

  //team

  {
    id: 'team-a',
    category: 'Team',
    label: `<svg fill="none" viewBox="0 0 266 150">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=110 y=20 width=46 height=5 rx=2.5 fill="#4a5568" />
    <rect x=87 y=29 width=92 height=4 rx=2 fill="#a0aec0" />
    <path
        d="M39.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444H39.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944L51 61.666m-7.944-4.694a1.083 1.083 0 11-2.167 0 1.083 1.083 0 012.167 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=24 y=78 width=41 height=2 rx=1 fill="#a0aec0" />
    <rect x=29 y=82 width=32 height=2 rx=1 fill="#a0aec0" />
    <rect x=36 y=74 width=17 height=2 rx=1 fill="#4a5568" />
    <path
        d="M98.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444H98.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.61m-7.944-4.694a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=83 y=78 width=41 height=2 rx=1 fill="#a0aec0" />
    <rect x=88 y=82 width=32 height=2 rx=1 fill="#a0aec0" />
    <rect x=95 y=74 width=17 height=2 rx=1 fill="#4a5568" />
    <path
        d="M157.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.61m-7.944-4.694a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=142 y=78 width=41 height=2 rx=1 fill="#a0aec0" />
    <rect x=147 y=82 width=32 height=2 rx=1 fill="#a0aec0" />
    <rect x=154 y=74 width=17 height=2 rx=1 fill="#4a5568" />
    <path
        d="M216.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.61m-7.944-4.694a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=201 y=78 width=41 height=2 rx=1 fill="#a0aec0" />
    <rect x=206 y=82 width=32 height=2 rx=1 fill="#a0aec0" />
    <rect x=213 y=74 width=17 height=2 rx=1 fill="#4a5568" />
    <path
        d="M39.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444H39.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944L51 107.667m-7.944-4.695a1.084 1.084 0 11-2.167.001 1.084 1.084 0 012.167-.001z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=24 y=124 width=41 height=2 rx=1 fill="#a0aec0" />
    <rect x=29 y=128 width=32 height=2 rx=1 fill="#a0aec0" />
    <rect x=36 y=120 width=17 height=2 rx=1 fill="#4a5568" />
    <path
        d="M98.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444H98.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.611m-7.944-4.695a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=83 y=124 width=41 height=2 rx=1 fill="#a0aec0" />
    <rect x=88 y=128 width=32 height=2 rx=1 fill="#a0aec0" />
    <rect x=95 y=120 width=17 height=2 rx=1 fill="#4a5568" />
    <path
        d="M157.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.611m-7.944-4.695a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=142 y=124 width=41 height=2 rx=1 fill="#a0aec0" />
    <rect x=147 y=128 width=32 height=2 rx=1 fill="#a0aec0" />
    <rect x=154 y=120 width=17 height=2 rx=1 fill="#4a5568" />
    <path
        d="M216.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.611m-7.944-4.695a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=201 y=124 width=41 height=2 rx=1 fill="#a0aec0" />
    <rect x=206 y=128 width=32 height=2 rx=1 fill="#a0aec0" />
    <rect x=213 y=120 width=17 height=2 rx=1 fill="#4a5568" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/4 md:w-1/2">
          <div class="h-full flex flex-col items-center text-center border-2 rounded-lg p-1">
            <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 bg-gray-100 bg-gray-100" src="/assets/images/avatar-1.webp">
            <div class="w-full">
              <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
              <h3 class="text-gray-500 mb-3">UI Developer</h3>
              <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-flex">
                <a class="text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/4 md:w-1/2">
          <div class="h-full flex flex-col items-center text-center border-2 rounded-lg p-1">
            <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 bg-gray-100" src="/assets/images/avatar-2.webp">
            <div class="w-full">
              <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
              <h3 class="text-gray-500 mb-3">UI Developer</h3>
              <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-flex">
                <a class="text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/4 md:w-1/2">
          <div class="h-full flex flex-col items-center text-center border-2 rounded-lg p-1">
            <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 bg-gray-100" src="/assets/images/avatar-3.webp">
            <div class="w-full">
              <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
              <h3 class="text-gray-500 mb-3">UI Developer</h3>
              <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-flex">
                <a class="text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/4 md:w-1/2">
          <div class="h-full flex flex-col items-center text-center border-2 rounded-lg p-1">
            <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 bg-gray-100" src="/assets/images/avatar-4.webp">
            <div class="w-full">
              <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
              <h3 class="text-gray-500 mb-3">UI Developer</h3>
              <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-flex">
                <a class="text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },

  //cta
  {
    id: 'cta-a',
    category: 'CTA',
    label: `<svg fill="none" viewBox="0 0 266 150">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=20 y=68 width=119 height=5 rx=2.5 fill="#4a5568" />
    <rect x=20 y=77 width=92 height=5 rx=2.5 fill="#4a5568" />
    <rect x=206 y=70 width=40 height=10 rx=2 fill="#3b82f6" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.</h1>
        <button class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0">Button</button>
      </div>
    </div>
  </section>`
  },
  {
    id: 'cta-b',
    category: 'CTA',
    label: `<svg fill="none" viewBox="0 0 266 150">
    <path fill="#F9F9F9" d="M0 0h266v150H0z"></path>
    <rect x="20" y="68" width="26" height="5" rx="2.5" fill="#3b82f6"></rect>
    <rect x="20" y="77" width="92" height="5" rx="2.5" fill="#4a5568"></rect>
    <rect x="206" y="70" width="40" height="10" rx="2" fill="#cbd5e0"></rect>
    <rect x="160" y="70" width="40" height="10" rx="2" fill="#cbd5e0"></rect>
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
      <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
        <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
        <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
      </div>
      <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
            <span class="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">Download on the</span>
            <span class="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </section>`
  },

  //Testimonial

  {
    id: 'testimonial-a',
    category: 'Testimonial',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=25 y=57 width=104 height=62 rx=1 fill="#e2e8f0" />
    <circle cx=39.5 cy=105.5 r=7.5 fill="#cbd5e0" />
    <path d="M52 108a1 1 0 011-1h24a1 1 0 010 2H53a1 1 0 01-1-1z" fill="#a0aec0" />
    <rect x=52 y=101 width=43 height=3 rx=1.5 fill="#4a5568" />
    <rect x=32 y=75 width=76 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=32 y=81 width=88 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=32 y=87 width=83 height=3 rx=1.5 fill="#a0aec0" />
    <path
        d="M38.641 63h-2.182a.354.354 0 00-.36.349v2.119c0 .192.161.349.36.349h1.044c-.014.554-.146.999-.398 1.333-.198.263-.498.481-.9.653a.344.344 0 00-.177.468l.258.53c.084.17.29.245.468.17.475-.2.876-.452 1.204-.758.399-.375.672-.797.82-1.268.148-.472.222-1.115.222-1.93v-1.666a.354.354 0 00-.359-.349zM32.761 68.97c.47-.199.869-.451 1.198-.757.403-.375.678-.796.826-1.264.148-.467.222-1.112.222-1.934v-1.666a.354.354 0 00-.359-.349h-2.183a.354.354 0 00-.359.349v2.119c0 .192.161.349.36.349h1.044c-.014.554-.146.999-.398 1.333-.198.263-.498.481-.9.653a.344.344 0 00-.177.468l.258.529c.083.17.29.245.468.17z"
        fill="#a0aec0" />
    <rect x=137 y=57 width=104 height=62 rx=1 fill="#e2e8f0" />
    <circle cx=151.5 cy=105.5 r=7.5 fill="#cbd5e0" />
    <path d="M164 108a1 1 0 011-1h24a1 1 0 010 2h-24a1 1 0 01-1-1z" fill="#a0aec0" />
    <rect x=164 y=101 width=43 height=3 rx=1.5 fill="#4a5568" />
    <rect x=144 y=75 width=76 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=144 y=81 width=88 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=144 y=87 width=83 height=3 rx=1.5 fill="#a0aec0" />
    <path
        d="M150.641 63h-2.182a.354.354 0 00-.359.349v2.119c0 .192.16.349.359.349h1.044c-.014.554-.146.999-.398 1.333-.198.263-.498.481-.899.653a.344.344 0 00-.178.468l.258.53c.084.17.29.245.468.17.475-.2.876-.452 1.204-.758.399-.375.672-.797.82-1.268.148-.472.222-1.115.222-1.93v-1.666a.354.354 0 00-.359-.349zM144.761 68.97c.47-.199.869-.451 1.198-.757.403-.375.678-.796.826-1.264.148-.467.222-1.112.222-1.934v-1.666a.354.354 0 00-.359-.349h-2.183a.353.353 0 00-.358.349v2.119c0 .192.16.349.358.349h1.045c-.014.554-.146.999-.398 1.333-.198.263-.498.481-.899.653a.344.344 0 00-.178.468l.257.529c.084.17.291.245.469.17z"
        fill="#a0aec0" />
    <rect x=107 y=31 width=52 height=5 rx=2.5 fill="#4a5568" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/2 w-full">
          <div class="h-full bg-gray-100 p-8 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
            <a class="inline-flex items-center">
              <img alt="testimonial" src="/assets/images/avatar-1.webp" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-gray-400">
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                <span class="text-gray-500 text-sm">UI DEVELOPER</span>
              </span>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/2 w-full">
          <div class="h-full bg-gray-100 p-8 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
            <a class="inline-flex items-center">
              <img alt="testimonial" src="/assets/images/avatar-2.webp" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-gray-400">
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                <span class="text-gray-500 text-sm">DESIGNER</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  },
  {
    id: 'testimonial-b',
    category: 'Testimonial',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <path d="M21 77a2 2 0 012-2h59a2 2 0 110 4H23a2 2 0 01-2-2zM26 85a2 2 0 012-2h48.92a2 2 0 110 4H28a2 2 0 01-2-2z"
        fill="#a0aec0" />
    <path d="M38 104a2 2 0 012-2h25a2 2 0 110 4H40a2 2 0 01-2-2z" fill="#4a5568" />
    <path d="M26 69a2 2 0 012-2h48.92a2 2 0 110 4H28a2 2 0 01-2-2z" fill="#a0aec0" />
    <path d="M44 94.5a1.5 1.5 0 011.5-1.5h13.38a1.5 1.5 0 010 3H45.5a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <circle cx=53 cy=53 r=8 fill="#e2e8f0" />
    <path
        d="M102 77a2 2 0 012-2h59a2 2 0 110 4h-59a2 2 0 01-2-2zM107 85a2 2 0 012-2h48.92a2 2 0 110 4H109a2 2 0 01-2-2z"
        fill="#a0aec0" />
    <path d="M119 104a2 2 0 012-2h25a2 2 0 110 4h-25a2 2 0 01-2-2z" fill="#4a5568" />
    <path d="M107 69a2 2 0 012-2h48.92a2 2 0 110 4H109a2 2 0 01-2-2z" fill="#a0aec0" />
    <path d="M125 94.5a1.5 1.5 0 011.5-1.5h13.38a1.5 1.5 0 010 3H126.5a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <circle cx=134 cy=53 r=8 fill="#e2e8f0" />
    <path
        d="M183 77a2 2 0 012-2h59a2 2 0 110 4h-59a2 2 0 01-2-2zM188 85a2 2 0 012-2h48.92a2 2 0 110 4H190a2 2 0 01-2-2z"
        fill="#a0aec0" />
    <path d="M200 104a2 2 0 012-2h25a2 2 0 110 4h-25a2 2 0 01-2-2z" fill="#4a5568" />
    <path d="M188 69a2 2 0 012-2h48.92a2 2 0 110 4H190a2 2 0 01-2-2z" fill="#a0aec0" />
    <path d="M206 94.5a1.5 1.5 0 011.5-1.5h13.38a1.5 1.5 0 010 3H207.5a1.5 1.5 0 01-1.5-1.5z" fill="#3b82f6" />
    <circle cx=215 cy=53 r=8 fill="#e2e8f0" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/assets/images/avatar-1.webp">
            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p class="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/assets/images/avatar-2.webp">
            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
            <p class="text-gray-500">UI Develeoper</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 p-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/assets/images/avatar-3.webp">
            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
            <p class="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  },

  //contact

  {
    id: 'contact-c',
    category: 'Contact',
    label: `<svg fill="none" viewBox="0 0 266 150">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=113 y=117 width=40 height=10 rx=2 fill="#3b82f6" />
    <rect x=63 y=81 width=140 height=30 rx=2 fill="#cbd5e0" />
    <rect x=63 y=65 width=66 height=10 rx=2 fill="#cbd5e0" />
    <rect x=135 y=65 width=68 height=10 rx=2 fill="#cbd5e0" />
    <rect x=90 y=24 width=86 height=5 rx=2.5 fill="#4a5568" />
    <rect x=80 y=33 width=106 height=4 rx=2 fill="#a0aec0" />
    <rect x=85 y=41 width=97 height=4 rx=2 fill="#a0aec0" />
</svg>`,
    content: `<section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
          </div>
          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a class="text-blue-500">example@email.com</a>
            <p class="leading-normal my-5">49 Smith St.
              <br>Saint Cloud, MN 56301
            </p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  },

  //footer

  {
    id: 'footer-a',
    category: 'Footer',
    label: `<svg fill="none" viewBox="0 0 266 150">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=61 y=85 width=35 height=3 rx=1.5 fill="#4a5568" />
    <rect x=61 y=93 width=23 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=61 y=100 width=16 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=61 y=107 width=28 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=61 y=114 width=23 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=111 y=85 width=35 height=3 rx=1.5 fill="#4a5568" />
    <rect x=111 y=93 width=23 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=111 y=100 width=16 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=111 y=107 width=28 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=111 y=114 width=23 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=161 y=85 width=35 height=3 rx=1.5 fill="#4a5568" />
    <rect x=161 y=93 width=23 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=161 y=107 width=28 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=161 y=100 width=16 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=161 y=114 width=23 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=211 y=85 width=35 height=3 rx=1.5 fill="#4a5568" />
    <rect x=211 y=93 width=23 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=211 y=100 width=16 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=211 y=107 width=28 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=211 y=114 width=23 height=3 rx=1.5 fill="#a0aec0" />
    <path fill="#e2e8f0" d="M0 131h266v19H0z" />
    <rect x=20 y=139 width=41 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=222 y=139 width=25 height=3 rx=1.5 fill="#a0aec0" />
    <circle cx=29 cy=94 r=9 fill="#3b82f6" />
</svg>`,
    content: `<footer class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Weblox</span>
        </a>
        <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Weblox —
          <a href="https://weblox.onrender.com/" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@weblox</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>`,
  },
  {
    id: 'footer-b',
    category: 'Footer',
    label: `<svg fill="none" viewBox="0 0 266 150" ...props>
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <path stroke="#e2e8f0" d="M266 112.5H0" />
    <circle cx=29 cy=131 r=9 fill="#3b82f6" />
    <rect x=213 y=129 width=31 height=4 rx=2 fill="#a0aec0" />
    <rect x=53 y=129 width=45 height=4 rx=2 fill="#a0aec0" />
    <path fill="#cbd5e0" d="M45 120h1v22h-1z" />
</svg>`,
    content: `<footer class="text-gray-600 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Weblox</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Weblox —
        <a href="https://weblox.onrender.com/" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@weblox</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </footer>`,
  },
  {
    id: 'footer-c',
    category: 'Footer',
    label: `<svg fill="none" viewBox="0 0 266 150">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=63.385 y=76 width=32.308 height=3 rx=1.5 fill="#4a5568" />
    <rect x=63.385 y=84 width=21.231 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=63.385 y=91 width=14.769 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=63.385 y=98 width=25.846 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=63.385 y=105 width=21.231 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=20 y=76 width=32.308 height=3 rx=1.5 fill="#4a5568" />
    <rect x=20 y=84 width=21.231 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=20 y=91 width=14.769 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=20 y=98 width=25.846 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=20 y=105 width=21.231 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=107.692 y=76 width=32.308 height=3 rx=1.5 fill="#4a5568" />
    <rect x=163 y=76 width=32.308 height=3 rx=1.5 fill="#4a5568" />
    <rect x=107.692 y=84 width=21.231 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=107.692 y=91 width=14.769 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=107.692 y=98 width=25.846 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=107.692 y=105 width=21.231 height=3 rx=1.5 fill="#a0aec0" />
    <path d="M217 86a2 2 0 012-2h25a2 2 0 012 2v6a2 2 0 01-2 2h-25a2 2 0 01-2-2v-6z" fill="#3b82f6" />
    <rect x=163 y=84 width=50 height=10 rx=2 fill="#cbd5e0" />
    <path fill="#e2e8f0" d="M0 119h266v31H0z" />
    <circle cx=28.5 cy=134.5 r=8.5 fill="#3b82f6" />
    <rect x=45 y=133 width=30 height=3 rx=1.5 fill="#a0aec0" />
    <rect x=198 y=133 width=48 height=3 rx=1.5 fill="#a0aec0" />
</svg>`,
    content: `<footer class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap md:text-left text-center order-first">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
          <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
              <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Button</button>
          </div>
          <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
            <br class="lg:block hidden">waistcoat green juice
          </p>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Weblox</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Weblox —
          <a href="https://weblox.onrender.com/" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@weblox</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>`,
  },


]

const editor = grapesjs.init({
  container: '#editor',
  height: 'calc(100% - 56px)',
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
            label: '<img src="/assets/icons/desktop.svg" alt="desktop">',
            command: "set-device-desktop",
            active: true,
            togglable: false,
            attributes: {
              'title': 'Desktop View',
              'data-tooltip-pos': 'bottom',
            },
            className: 'active'
          },
          {
            id: "device-laptop",
            label: '<img src="/assets/icons/laptop.svg" alt="laptop">',
            command: "set-device-laptop",
            togglable: false,
            attributes: {
              'title': 'Laptop View',
              'data-tooltip-pos': 'bottom',
            },
          },
          {
            id: 'device-tablet',
            label: '<img src="/assets/icons/tablet.svg" alt="tablet">',
            command: 'set-device-tablet',
            togglable: false,
            attributes: {
              'title': 'Tablet view',
              'data-tooltip-pos': 'bottom',
            },
          },
          {
            id: "device-mobile",
            label: '<img src="/assets/icons/mobile.svg" alt="mobile">',
            command: "set-device-mobile",
            togglable: false,
            attributes: {
              'title': 'Mobile view',
              'data-tooltip-pos': 'bottom',
            },
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
            label: '<img src="/assets/icons/view-components.svg" alt="code">',
            command: "sw-visibility",
            attributes: {
              'title': 'View Components',
              'data-tooltip-pos': 'bottom',
            },
          },
          {
            id: 'code',
            className: 'btn-open-code',
            label: '<img src="/assets/icons/code.svg" alt="code">',
            command: 'export-template',
            context: 'export-template',
            attributes: {
              'title': 'Code',
              'data-tooltip-pos': 'bottom'
            },
          },
          {
            id: "undo",
            className: "btn-undo",
            label: "<img src='/assets/icons/undo.svg' alt='Undo'>",
            command: 'core:undo',
            context: "panel-basic-actions",
            attributes: {
              'title': 'Undo',
              'data-tooltip-pos': 'bottom',
            },
          },
          {
            id: "redo",
            className: "btn-redo",
            label: "<img src='/assets/icons/redo.svg' alt='Redo'>",
            command: "core:redo",
            context: "panel-basic-actions",
            attributes: {
              'title': 'Redo',
              'data-tooltip-pos': 'bottom',
            },
          },
          {
            id: "export",
            className: "btn-export",
            label: "<img src='/assets/icons/export.svg' alt='export'>",
            command: "export",
            attributes: {
              'title': 'Export Code',
              'data-tooltip-pos': 'bottom',
            },
          },
          {
            id: "guide",
            className: "btn-guide",
            label: "<img src='/assets/icons/question.svg' alt='guide'>",
            command: "guide",
            attributes: {
              'title': 'Beginner Guide',
              'data-tooltip-pos': 'bottom',
            },
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
        name: "Laptop",
        width: "1200px",
        widthMedia: "1500px"
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
    blocks: blocks
  },

  layerManager: {
    appendTo: '#layers-container'
  },

  selectorManager: {
    appendTo: '#styles-container',
    componentFirst: true
  },

  styleManager: {
    appendTo: '#styles',
    sectors: [{
      name: 'General',
      properties: [
        {
          extend: 'float',
          type: 'radio',
          default: 'none',
          options: [
            { value: 'none', className: 'fa fa-times' },
            { value: 'left', className: 'fa fa-align-left' },
            { value: 'right', className: 'fa fa-align-right' }
          ],
        },
        'display',
        { extend: 'position', type: 'select' },
        'top',
        'right',
        'left',
        'bottom',
      ],
    }, {
      name: 'Dimension',
      open: false,
      properties: [
        'width',
        {
          id: 'flex-width',
          type: 'integer',
          name: 'Width',
          units: ['px', '%'],
          property: 'flex-basis',
          toRequire: 1,
        },
        'height',
        'max-width',
        'min-width',
        'max-height',
        'min-height',
        'margin',
        'padding'
      ],
    }, {
      name: 'Typography',
      open: false,
      properties: [
        'font-family',
        'font-size',
        'font-weight',
        'letter-spacing',
        'color',
        'line-height',
        {
          extend: 'text-align',
          options: [
            { id: 'left', label: 'Left', className: 'fa fa-align-left' },
            { id: 'center', label: 'Center', className: 'fa fa-align-center' },
            { id: 'right', label: 'Right', className: 'fa fa-align-right' },
            { id: 'justify', label: 'Justify', className: 'fa fa-align-justify' }
          ],
        },
        {
          property: 'text-decoration',
          type: 'radio',
          default: 'none',
          options: [
            { id: 'none', label: 'None', className: 'fa fa-times' },
            { id: 'underline', label: 'underline', className: 'fa fa-underline' },
            { id: 'line-through', label: 'Line-through', className: 'fa fa-strikethrough' }
          ],
        },
        'text-shadow'
      ],
    }, {
      name: 'Decorations',
      open: false,
      properties: [
        'opacity',
        'border-radius',
        'border',
        'box-shadow',
        'background',
        { id: 'background-bg', property: 'background-color', type: 'bg' }
      ],
    }, {
      name: 'Extra',
      open: false,
      buildProps: [
        'transition',
        'perspective',
        'transform'
      ],
    },
    ],
  },

  traitManager: {
    appendTo: '#trait-container',
  },

  plugins: [
    'grapesjs-plugin-export',
    'grapesjs-tooltip',
    'grapesjs-touch'
  ],

  pluginsOpts: {
    'grapesjs-plugin-export': {
      root: {
        'index.html': (editor) => {
          const html = editor.getHtml();
          const head = `
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./css/style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css">
          </head>`;
          return `<html>${head}<body>${html}</body></html>`;
        },
        'css/style.css': editor => editor.getCss(),
      },
      filename: editor => `weblox_webpageBuilder-${new Date().toISOString().split('T')[0].split('-').reverse().join('_')}-${new Date().toTimeString().split(' ')[0].split(':').slice(0, 2).join(':')}.zip`,
    },
    'grapesjs-tooltip': {}
  }
});


//for devices
editor.Commands.add('set-device-desktop', {
  run: (editor) => editor.setDevice('Desktop'),
});

editor.Commands.add('set-device-laptop', {
  run: (editor) => editor.setDevice('Laptop'),
});

editor.Commands.add('set-device-tablet', {
  run: (editor) => editor.setDevice('Tablet'),
});

editor.Commands.add('set-device-mobile', {
  run: (editor) => editor.setDevice('Mobile'),
});

// Set the initial device
editor.setDevice('Desktop');


//for export code 
editor.Commands.add("export", {
  run: (editor) => {
    editor.runCommand('gjs-export-zip')

    document.querySelector('.popup').style.display = 'flex';
    document.querySelector('.popup').style.visibility = 'visible';
    document.querySelector('.popup .popup-container').style.transform = 'translateX(0)';
  }
})

//for guide
editor.Commands.add("guide", {
  run: (editor) => {
    editor.runCommand('go-to-guide');
  }
});

editor.Commands.add("go-to-guide", {
  run: () => {
    window.open('/guide', '_blank');
  }
});


// for active device with icon

const buttons = document.querySelectorAll('.panel_devices .gjs-pn-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
  });
});