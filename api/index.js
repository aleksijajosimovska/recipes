const router = require('express').Router();

router.route('/')
.get((req, res) => {
    res.json({
        msg:'Hello there'
    })
})

module.exports = router;