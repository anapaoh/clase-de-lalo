const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false})); //esta línea cada vez que se manda algo de post, llega en bytes y lo tranforma en texto; lo transforma en un bojeto con el que se puede interactuar

//Middleware. Todo lo que se hace en express se usan middlewares.
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

const plantasRoutes = require('./routes/plantas.routes');

app.use('/plantas', plantasRoutes); //aquí lo que se hace es que se cuelguen todas las rutas plantas que aparezca ese archivo. 

app.use((request, response, next) => {
    console.log('Otro middleware!');
    
    //Manda la respuesta
    response.send('¡Hola mundo!'); 
});

app.listen(3000);