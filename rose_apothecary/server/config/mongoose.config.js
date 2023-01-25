const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/apothecarydb', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log('Successfully connected to db')
}).catch((err)=>{
    console.log(err, 'The goose is loose')
})