// PORT

process.env.PORT = process.env.PORT || 3000;

// ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// VENCIMIENTO DEL TOKEN

process.env.CADUCIDAD_TOKEN = 30 * 24 * 60 * 60;

// SEED de autentificacion

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// CLIENT_ID google

process.env.CLIENT_ID = '619840277064-5m9af6vils0scj9v1jeq39cjao0d50kb.apps.googleusercontent.com';

// BASE DE DATOS

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;