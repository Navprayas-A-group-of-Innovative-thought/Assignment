const router = require('express').Router();

//route here
router.route('/').get((req, res) => {
    res.send("please start routing\n");
});

module.exports = router
