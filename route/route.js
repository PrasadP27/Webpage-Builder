const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("home", {
        title: null,
        'grapesJS-script': null,
        'grapesJS-style': null
    })
})

router.get("/builder", (req, res) => {
    res.render("builder", {
        title: ' | Builder',
        // for grapesjs
        'grapesJS-script': '//unpkg.com/grapesjs',
        'grapesJS-style': '//unpkg.com/grapesjs/dist/css/grapes.min.css',
        script: 'js/grapesJS.js'
    })
})

module.exports = router
