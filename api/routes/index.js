const casaRoute = require('./casaRoutes');

module.exports = (app) => {
    app.use('/casas', casaRoute)
}