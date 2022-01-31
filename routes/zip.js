const express = require('express');
const router = express.Router();

const Zip = require('../models/Zip')



router.get('/', async (req, res) => {
    try {

        const zipCode = await Zip.find({ zips: req.id })

        console.log(zipCode);

        res.json(zipCode)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

router.get('/:zip', async (req, res) => {
    try {

        const zipCode = await Zip.find({ zip: req.params.zip },
            {
                _id: 0,
                city: 1,
                county: 1,
                state: 1,
                state_code: 1
            });

        console.log(zipCode);
        res.json({
            City: zipCode[0].city,
            County: zipCode[0].county,
            State: zipCode[0].state,
            State_Code: zipCode[0].state_code
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});




module.exports = router;