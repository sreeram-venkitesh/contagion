const express = require('express');
const path = require('path');

const app = express()
app.use(express.static('public'))

const PORT = 3000

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.listen(process.env.PORT || PORT,()=>{
    console.log('Listening to local port')
})
