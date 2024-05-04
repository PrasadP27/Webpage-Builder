const express = require('express')
const router = express.Router()

//home page
const homeHeadTags = [`
    <link rel="stylesheet" href="/home/home.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

`]

const homeBodyTags = [`
    <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
    <script src="/home/home.js" defer></script>
`]
router.get("/", (req, res) => {
    res.render("home", {
        title: null,
        headTags: homeHeadTags,
        bodyTags: homeBodyTags
    })
})

//builder page
const builerHeadTags = [`
    <link rel="stylesheet" href="/builder/builder.css">

    <script src="//unpkg.com/grapesjs"></script>
    <link rel="stylesheet" href="//unpkg.com/grapesjs/dist/css/grapes.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intro.js/7.2.0/introjs.min.css" />

    <script src="//unpkg.com/grapesjs-plugin-export"></script>
    <script src="//unpkg.com/grapesjs-touch"></script>
`]

const builderBodyTags = [`
    <script src="https://cdnjs.cloudflare.com/ajax/libs/intro.js/7.2.0/intro.min.js"></script>
    <script src="/builder/builderCustom.js"></script>
    <script src="/builder/builder.js"></script>
    <script src="/builder/builderGuide.js"></script>
`]

router.get("/builder", (req, res) => {
    res.render("builder", {
        title: ' | Builder',
        headTags: builerHeadTags,
        bodyTags: builderBodyTags
    })
})


//guide page
const guideHeadTags = [`
    <link rel="stylesheet" href="/guide/guide.css">
`]

const guideBodyTags = [`
    <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
    <script src="/guide/guide.js" defer></script>
`]

router.get("/guide", (req, res) => {
    res.render("guide", {
        title: ' | Guide',
        headTags: guideHeadTags,
        bodyTags: guideBodyTags
    })
})

module.exports = router
