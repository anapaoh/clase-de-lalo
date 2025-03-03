exports.get_agregar =  (request, response, next) => {
    response.send(html_header + html_form + html_footer);
    response.render('agregar_planta');
};


exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    plantas.push(request.body.nombre);
    let html = html_header;
    html += `<div class="columns">`;
    for(let planta of plantas) {
        html += `<div class="column">`;
        html += `<div class="card">
        <div class="card-content">
          <div class="content">`;
        html += planta;
        html += `</div>
                </div>
              </div>
            </div>`;
    }
    html += `</div>`;
    html += html_footer;
    response.send(html);
};

exports.get_regar =  (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  };