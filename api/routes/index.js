const casaRoute = require('./casaRoutes');
// const apartamentoRoute = require('./apartamentoRoutes');
// const terrenoRoute = require('./terrenoRoutes');
// const galpaoRoute = require('./galpaoRoutes');
// const escritorioRoute = require('./escritorioRoutes');

module.exports = (app) => {
    app.use('/casas', casaRoute)
    // app.use('/apartamentos', apartamentoRoute)
    // app.use('/terrenos', terrenoRoute)
    // app.use('/galpao', galpaoRoute)
    // app.use('/escritorios', escritorioRoute)
}