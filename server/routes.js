// Load modules

var Product = require('./controller/product'),
	Channel = require('./controller/channel'),
    ModuleLinkUp = require('modulelinkup'),
    ModuleRoute =require('modulelinkup/index'),
    Static    = require('./static');
var getAllRoutes = [
        { method: 'GET',  path: '/{somethingss*}', config: Static.get },
        { method: 'POST', path: '/createProduct', config: Product.createProduct },
        { method: 'POST', path: '/searchProduct', config: Product.searchProduct },
        { method: 'POST', path: '/exportProduct', config: Product.exportProduct },
        
        { method: 'GET', path: '/getProduct/{id}', config: Product.getProductById },
        { method: 'PUT', path: '/updateProduct/{id}', config: Product.updateProduct },
        // { method: 'GET', path: '/getConfig', config: Product.getHostFromConfig },

        { method: 'POST', path: '/createChannel', config: Channel.createChannel },
        { method: 'GET', path: '/getChannel/{tenantId}', config: Channel.getChannelByTennantId }
    ];

    for(var i=0; i<ModuleRoute.endpoint.length; i++){
       getAllRoutes.push(ModuleRoute.endpoint[i]);  
    }
   
// API Server Endpoints
exports.endpoints = getAllRoutes;