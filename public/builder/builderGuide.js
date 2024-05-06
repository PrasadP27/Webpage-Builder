introJs().setOptions({
    steps: [
        {
            title: 'Welcome',
            intro: 'This is the <b>Weblox</b> Webpage builder. Lets walk through the elements of weblox!!'
        },
        {
            element: document.querySelector('#left-navbar #element-navbar'),
            title: 'Elements Section',
            intro: 'This is panel where it consists of all <b>elements for the website</b>.'
        },
        {
            element: document.querySelector('#main-content #top-navbar .panel_devices'),
            title: 'Devices',
            intro: 'Here you can test you website that is it suitable for all devices.'
        },
        {
            element: document.querySelector('#main-content #top-navbar .panel_basic_actions'),
            title: 'Basic Actions',
            intro: 'Here all the basic actions are present for the webpage.'
        },
        {
            element: document.querySelector('#main-content #editor'),
            title: 'Canvas',
            intro: 'This is the place where you can drag and drop, design components for your webpage.'
        },
        {
            element: document.querySelector('#main-content #top-navbar .panel_basic_actions .btn-export'),
            title: 'Export Code',
            intro: 'Once your webpage is created you can export you webpage code in zip file and use as you need...'
        },
        {
            element: document.querySelector('#main-content #top-navbar .panel_basic_actions .btn-guide'),
            title: 'Guide',
            intro: 'If you are facing any difficulties regarding style elements then you can visit this guide page.'
        },
        {
            title: 'All Set',
            intro: 'You are all set. Enjoy using <b>Weblox</b>'
        },
    ],
    tooltipClass: 'introCustom'
}).start()

