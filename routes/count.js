const express = require('express');
const router = express.Router();

const Zip = require('../models/Zip')

router.get('/count/:state_code', async (req, res) => {

    try {
        const count = await Zip.find({ state_code: req.params.state_code },
            {
                _id: 0,
                state: 1,
                zip: 1,
            })

        const stateCode = count.map(item => item.state_code)

        const uniqueZip = [...new Set(count.map(item => item.zip))]
        console.log(uniqueZip)

        const zipTotal = uniqueZip.length;

        const counties = await Zip.find({ state_code: req.params.state_code }).distinct("county")

        const countyTotal = counties.length;

        const stateName = count[0].state;

        const totalCountyZip = await Zip.updateMany(

            { state_code: req.params.state_code },
            {
                $set: {
                    num_of_counties: countyTotal,
                    num_of_zips: zipTotal
                }
            }
        )


        res.json({
            stateName: stateName,
            stateCode: req.params.state_code,
            numberOfCounties: countyTotal,
            numberOfZipCodes: zipTotal
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});



































module.exports = router;