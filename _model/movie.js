const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employee = new Schema(
  {
    title:{ type : String , unique : true, required : true },
    year:{ type: String, required : true },
    released:{ type: String, required : true },
    genero:{ type: String, required : true },
    director:{ type: String, required : true },
    actors:{ type: String, required : true },
    plot:{ type: String, required : true },
    ratings:{ type: String, required : true }
  },
  { collection: "Movies" }
);

module.exports = mongoose.model("movies", employee);