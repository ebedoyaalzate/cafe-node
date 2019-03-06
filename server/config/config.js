
// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ============================
//  Base de datos 
// ============================
let urlDB
if(process.env.NODE_ENV=== 'dev'){
    urlDB ='mongodb://localhost:27017/cafe'
}else{
    urlDB= "mongodb+srv://mongo:1234@cluster0-3vt2r.mongodb.net/test?retryWrites=true"  
}
process.env.urlDB= urlDB