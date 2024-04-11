const blocks = [
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

  //Hero 

  {
    id: 'hero-a',
    category: 'Hero',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=20 y=86 width=29 height=10 rx=2 fill="#7f9cf5" />
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
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
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
    <rect x=101 y=114 width=29 height=10 rx=2 fill="#7f9cf5" />
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
      <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
        <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
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
    <rect x=133 y=86 width=29 height=10 rx=2 fill="#7f9cf5" />
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
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
          <br class="hidden lg:inline-block">readymade gluten
        </h1>
        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </section>`
  },

  //content

  {
    id: 'about-a',
    category: 'About',
    label: `<svg viewBox="0 0 266 150" fill="none">
    <path fill="#F9F9F9" d="M0 0h266v150H0z" />
    <rect x=113 y=120 width=40 height=10 rx=2 fill="#7f9cf5" />
    <rect x=81 y=31 width=104.391 height=4 rx=2 fill="#a0aec0" />
    <rect x=96 y=20 width=74 height=5 rx=2.5 fill="#4a5568" />
    <rect x=85 y=39 width=97.365 height=4 rx=2 fill="#a0aec0" />
    <rect x=26 y=73 width=28 height=3 rx=1.5 fill="#4a5568" />
    <rect x=26 y=79 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=26 y=84 width=38 height=2 rx=1 fill="#a0aec0" />
    <rect x=26 y=89 width=24 height=2 rx=1 fill="#7f9cf5" />
    <rect x=20 y=62 width=1 height=39 rx=0.5 fill="#cbd5e0" />
    <rect x=86 y=73 width=28 height=3 rx=1.5 fill="#4a5568" />
    <rect x=86 y=79 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=86 y=84 width=38 height=2 rx=1 fill="#a0aec0" />
    <rect x=86 y=89 width=24 height=2 rx=1 fill="#7f9cf5" />
    <rect x=80 y=62 width=1 height=39 rx=0.5 fill="#cbd5e0" />
    <rect x=146.136 y=73 width=28.636 height=3 rx=1.5 fill="#4a5568" />
    <rect x=146.136 y=79 width=34.773 height=2 rx=1 fill="#a0aec0" />
    <rect x=146.136 y=84 width=38.864 height=2 rx=1 fill="#a0aec0" />
    <rect x=146.136 y=89 width=24.546 height=2 rx=1 fill="#7f9cf5" />
    <rect x=140 y=62 width=1.023 height=39 rx=0.511 fill="#cbd5e0" />
    <rect x=207.136 y=73 width=28.636 height=3 rx=1.5 fill="#4a5568" />
    <rect x=207.136 y=79 width=34.773 height=2 rx=1 fill="#a0aec0" />
    <rect x=207.136 y=84 width=38.864 height=2 rx=1 fill="#a0aec0" />
    <rect x=207.136 y=89 width=24.546 height=2 rx=1 fill="#7f9cf5" />
    <rect x=201 y=62 width=1.023 height=39 rx=0.511 fill="#cbd5e0" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
      </div>
      <div class="flex flex-wrap">
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
          <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
          <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
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
    <rect x=24 y=104 width=10 height=2 rx=1 fill="#7f9cf5" />
    <rect x=79 y=74 width=50 height=44 rx=2 fill="#e2e8f0" />
    <path
        d="M99.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L110 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=83 y=108 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=83 y=112 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=83 y=104 width=10 height=2 rx=1 fill="#7f9cf5" />
    <rect x=138 y=74 width=50 height=44 rx=2 fill="#e2e8f0" />
    <path
        d="M158.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L169 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=142 y=108 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=142 y=112 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=142 y=104 width=10 height=2 rx=1 fill="#7f9cf5" />
    <rect x=197 y=74 width=50 height=44 rx=2 fill="#e2e8f0" />
    <path
        d="M217.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L228 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z"
        stroke="#a0aec0" strokeLinecap="round" strokeLinejoin="round" />
    <rect x=201 y=108 width=28 height=2 rx=1 fill="#4a5568" />
    <rect x=201 y=112 width=34 height=2 rx=1 fill="#a0aec0" />
    <rect x=201 y=104 width=10 height=2 rx=1 fill="#7f9cf5" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content">
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content">
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content">
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content">
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
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
    <rect x=113 y=120 width=40 height=10 rx=2 fill="#7f9cf5" />
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
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
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
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
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
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
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
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
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
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
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
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
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
    <path d="M106 115a2 2 0 012-2h20a2 2 0 110 4h-20a2 2 0 01-2-2z" fill="#7f9cf5" />
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
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500">
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
            <a class="text-indigo-500 inline-flex items-center">Learn More
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
    <path d="M38 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z" fill="#7f9cf5" />
    <rect x=38 y=84 width=43 height=4 rx=2 fill="#4a5568" />
    <circle cx=105 cy=90 r=6 fill="#c3dafe" />
    <path
        d="M117 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM117 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z"
        fill="#a0aec0" />
    <path d="M117 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z" fill="#7f9cf5" />
    <rect x=117 y=84 width=43 height=4 rx=2 fill="#4a5568" />
    <circle cx=184 cy=90 r=6 fill="#c3dafe" />
    <path
        d="M196 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM196 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z"
        fill="#a0aec0" />
    <path d="M196 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z" fill="#7f9cf5" />
    <rect x=196 y=84 width=43 height=4 rx=2 fill="#4a5568" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
        <br class="hidden sm:block">Selfies Wayfarers
      </h1>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div class="p-4 md:w-1/3 flex">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
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
    <path d="M134 49a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z" fill="#7f9cf5" />
    <rect x=134 y=37 width=58 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=140 cy=66 r=6 fill="#c3dafe" />
    <path d="M134 84a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M134 89a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z" fill="#7f9cf5" />
    <rect x=134 y=77 width=58 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=140 cy=106 r=6 fill="#c3dafe" />
    <path d="M134 124a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M134 129a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z" fill="#7f9cf5" />
    <rect x=134 y=117 width=58 height=3 rx=1.5 fill="#4a5568" />
    <path
        d="M63.792 92h26.544a3.785 3.785 0 003.792-3.778V61.778A3.785 3.785 0 0090.336 58H63.792A3.785 3.785 0 0060 61.778v26.444A3.785 3.785 0 0063.792 92zm0 0l20.856-20.778 9.48 9.445M73.272 68.389a2.839 2.839 0 01-2.844 2.833 2.839 2.839 0 01-2.844-2.833 2.839 2.839 0 012.844-2.833 2.839 2.839 0 012.844 2.833z"
        stroke="#a0aec0" strokeWidth=3 strokeLinecap="round" strokeLinejoin="round" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-cover object-center h-full w-full" src="https://dummyimage.com/460x500">
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
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
    <path d="M44 86.5a1.5 1.5 0 011.5-1.5h19a1.5 1.5 0 010 3h-19a1.5 1.5 0 01-1.5-1.5z" fill="#7f9cf5" />
    <rect x=44 y=62 width=32 height=4 rx=2 fill="#4a5568" />
    <rect x=138.5 y=54.5 width=107 height=41 rx=1.5 fill="#F9F9F9" stroke="#cbd5e0" />
    <circle cx=150 cy=68 r=6 fill="#c3dafe" />
    <path
        d="M162 72.5a1.5 1.5 0 011.5-1.5h68a1.5 1.5 0 010 3h-68a1.5 1.5 0 01-1.5-1.5zM162 79.5a1.5 1.5 0 011.5-1.5h54a1.5 1.5 0 010 3h-54a1.5 1.5 0 01-1.5-1.5z"
        fill="#a0aec0" />
    <path d="M162 86.5a1.5 1.5 0 011.5-1.5h19a1.5 1.5 0 010 3h-19a1.5 1.5 0 01-1.5-1.5z" fill="#7f9cf5" />
    <rect x=162 y=62 width=32 height=4 rx=2 fill="#4a5568" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/2 md:w-full">
          <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/2 md:w-full">
          <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
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
    <rect x=113 y=41 width=40 height=3 rx=1.5 fill="#7f9cf5" />
    <circle cx=28 cy=86 r=3 fill="#7f9cf5" />
    <rect x=98 y=49 width=70 height=5 rx=2.5 fill="#4a5568" />
    <path d="M25 93a1 1 0 011-1h54a1 1 0 110 2H26a1 1 0 01-1-1zM25 98a1 1 0 011-1h44a1 1 0 110 2H26a1 1 0 01-1-1z"
        fill="#a0aec0" />
    <path d="M25 103a1 1 0 011-1h11a1 1 0 010 2H26a1 1 0 01-1-1z" fill="#7f9cf5" />
    <rect x=34 y=84.5 width=35 height=3 rx=1.5 fill="#4a5568" />
    <rect x=99 y=78 width=69 height=31 rx=2 fill="#e2e8f0" />
    <circle cx=107 cy=86 r=3 fill="#7f9cf5" />
    <path d="M104 93a1 1 0 011-1h54a1 1 0 010 2h-54a1 1 0 01-1-1zM104 98a1 1 0 011-1h44a1 1 0 010 2h-44a1 1 0 01-1-1z"
        fill="#a0aec0" />
    <path d="M104 103a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#7f9cf5" />
    <rect x=113 y=84.5 width=35 height=3 rx=1.5 fill="#4a5568" />
    <rect x=178 y=78 width=69 height=31 rx=2 fill="#e2e8f0" />
    <circle cx=186 cy=86 r=3 fill="#7f9cf5" />
    <path d="M183 93a1 1 0 011-1h54a1 1 0 010 2h-54a1 1 0 01-1-1zM183 98a1 1 0 011-1h44a1 1 0 010 2h-44a1 1 0 01-1-1z"
        fill="#a0aec0" />
    <path d="M183 103a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#7f9cf5" />
    <rect x=192 y=84.5 width=35 height=3 rx=1.5 fill="#4a5568" />
</svg>
`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
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
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
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
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
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
    <path d="M102 33a1 1 0 011-1h14a1 1 0 010 2h-14a1 1 0 01-1-1z" fill="#7f9cf5" />
    <rect x=102 y=21 width=40 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=88 cy=98 r=8 fill="#c3dafe" />
    <path d="M102 98a1 1 0 011-1h68a1 1 0 010 2h-68a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M102 103a1 1 0 011-1h14a1 1 0 010 2h-14a1 1 0 01-1-1z" fill="#7f9cf5" />
    <rect x=102 y=91 width=40 height=3 rx=1.5 fill="#4a5568" />
    <circle cx=178 cy=63 r=8 fill="#c3dafe" />
    <path d="M80 63a1 1 0 011-1h68a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#a0aec0" />
    <path d="M80 68a1 1 0 011-1h14a1 1 0 110 2H81a1 1 0 01-1-1z" fill="#7f9cf5" />
    <rect x=80 y=56 width=40 height=3 rx=1.5 fill="#4a5568" />
    <rect x=113 y=120 width=40 height=10 rx=2 fill="#7f9cf5" />
    <path d="M185.5 45a.5.5 0 010 1h-105a.5.5 0 010-1h105zM185.5 80a.5.5 0 010 1h-105a.5.5 0 010-1h105z"
        fill="#cbd5e0" />
</svg>`,
    content: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
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
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
      </div>
      <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
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
    <path d="M77 65a2 2 0 11-4 0 2 2 0 014 0z" fill="#7f9cf5" />
    <path d="M136 61a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M146 65a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M143 65a2 2 0 11-4 0 2 2 0 014 0z" fill="#7f9cf5" />
    <path d="M70 77a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M80 81a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M77 81a2 2 0 11-4 0 2 2 0 014 0z" fill="#7f9cf5" />
    <path d="M136 77a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M146 81a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M143 81a2 2 0 11-4 0 2 2 0 014 0z" fill="#7f9cf5" />
    <path d="M70 93a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M80 97a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M77 97a2 2 0 11-4 0 2 2 0 014 0z" fill="#7f9cf5" />
    <path d="M136 93a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z" fill="#e2e8f0" />
    <path d="M146 97a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#4a5568" />
    <path d="M143 97a2 2 0 11-4 0 2 2 0 014 0z" fill="#7f9cf5" />
    <rect x=81 y=31 width=104.391 height=4 rx=2 fill="#a0aec0" />
    <rect x=81 y=31 width=104.391 height=4 rx=2 fill="#a0aec0" />
    <rect x=96 y=20 width=74 height=5 rx=2.5 fill="#4a5568" />
    <rect x=97 y=39 width=73 height=4 rx=2 fill="#a0aec0" />
    <rect x=113 y=120 width=40 height=10 rx=2 fill="#7f9cf5" />
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
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Authentic Cliche Forage</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Kinfolk Chips Snackwave</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Coloring Book Ethical</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Typewriter Polaroid Cray</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Pack Truffaut Blue</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">The Catcher In The Rye</span>
          </div>
        </div>
      </div>
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    </div>
  </section>`
  },
  {
    id: '',
    category: '',
    label: ``,
    content: ``
  },
  {
    id: '',
    category: '',
    label: ``,
    content: ``
  },
  {
    id: '',
    category: '',
    label: ``,
    content: ``
  },
  {
    id: '',
    category: '',
    label: ``,
    content: ``
  },
  {
    id: '',
    category: '',
    label: ``,
    content: ``
  },
  {
    id: '',
    category: '',
    label: ``,
    content: ``
  },

]

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
    blocks: blocks
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