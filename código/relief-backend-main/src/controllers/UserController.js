const axios = require('axios');
const User = require('../models/User');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {

    async index(request, response) {
     const users = await User.find();
     return response.json(users); 
    
    },

    async store(request, response) {
         
        const { name, inform, whatsapp, latitude, longitude, msg } = request.body;
        
            const msgArray = parseStringAsArray(msg);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
           user = await User.create({
            name: name,
            inform: inform,
            whatsapp: whatsapp,
            msg: msgArray,
            location,
          });  
        return response.json({ user });
       
    
    }
}

