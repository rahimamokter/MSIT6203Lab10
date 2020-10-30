const mongoose = require('mongoose');
//specify where to find the schema
const Student = require('./models/student')
// connect and display the status
mongoose.connect('mongodb://localhost:27017/IT6203G12', { useNewUrlParser:true})
.then(() => { console.log("connected"); 
})
.catch(() => { console.log("error connecting");
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
