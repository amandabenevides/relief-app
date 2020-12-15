const User = require('../models/User');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {

        const { latitude, longitude, msg } = request.query;

        const msgArray = parseStringAsArray(msg);

        const users = await User.find({
            msg: {  
                $in: msgArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],

                    },
                    $maxDistance: 10000,
                }
            }
           


        });
       

     return response.json({users});

     



    }
}