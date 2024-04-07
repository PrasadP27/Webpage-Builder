const express = require('express')
const router = express.Router()

// router.get("/", (req, res) => {
//     res.render("home", {
//         title: null
//     })
// })

router.get("/", (req, res) => {
    res.render("builder", {
        title: ' | Builder',
        // // for grapesjs
        // 'grapesJS-script': '//unpkg.com/grapesjs',
        // 'grapesJS-style': '//unpkg.com/grapesjs/dist/css/grapes.min.css',
        // script: '/builder/grapesJS.js'
    })
})

module.exports = router
