
const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('ok');
    next();
})
app.use((req, res, next)=>{
    res.json({resultat: 'l\'application express fonctionne bienn !'});
    next();
})
app.use((req, res, n)=>{
    res.status(201);
    console.log('fin pour la consolee');

})

module.exports = app;
