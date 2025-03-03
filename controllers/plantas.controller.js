const Planta = require('../models/planta.models');

exports.get_agregar = (request, response, next) => {
    response.render('agregar_planta');
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const mi_planta = new Planta(requiest.body.nombre);
    mi_planta.save();

    response.redirect('/plantas/')

    //response.render('lista_plantas', {
    //    plantas: Planta.fetchAll,
    //});
}

exports.get_root = (request, response, next) => {
    response.render('lista_plantas', {
        plantas: Planta.fetchAll(),
    });
};

exports.get_regar =  (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  };