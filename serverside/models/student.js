const mongoose = require('mongoose');


//define a schema/ blueprint NOTE: id is not a part of schema 
const studentSchema = new mongoose.Schema({
firstName: { type: String, required: true},
lastName:  { type: String, required: true}
});


//use the blueprint to create the model
// paremeters: (model_name, schema_to_use, collections_name)
// module.exports is used to allow external access to the model)
 module.exports = mongoose.model('Student', studentSchema, 'Students');
//note capital s in the collection name                                                                                                     