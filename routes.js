const routes = require('next-routes')


module.exports = routes()
.add('index')
.add('info')
.add('search')
.add('browse')
.add('listing', '/listing/:boro/:slug')