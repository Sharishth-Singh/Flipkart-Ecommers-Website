const mongoose = require('mongoose');


const connect = () =>{
   mongoose.set('strictQuery', false);

   mongoose.connect(`mongodb+srv://sharishth:hY7LNNViEf29vUp@cluster0.z6sgz30.mongodb.net/?retryWrites=true&w=majority`,  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(()=>{
   console.log("database is connected");
  }).catch((err)=>{
      console.log(err)
   })
} 


module.exports = {connect}