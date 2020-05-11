// might have to require mongoose to work var Writing = require('./writingsModel');
let Writing = require('./writingsModel');

let createWriting = function(req, res) {
  const newWriting = new Writing({
      writing: req.body.writing,
  });
  newWriting.save()
  .then(item => {
      res.send("writing saved to database");
      })
      .catch(err => {
        res.status(err.code).json(err);
      });
  };

  let getAllWritings = function(req, res){
      Writing.find()
     .then(items =>{
        res.send(items)
        })  
    .catch((err) => {
        res.status(err.code).json(err);
    })
  };

  let getWriting = function(req, res){
      const id= req.params.id;
      Writing.findById(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(err.code).json(err);
        });
  };

  let editWriting = function( req, res){
    const id = req.params.id;
    Writing.findOneAndUpdate(id, req.body,{useFindAndModify: false})
    .then(item => {
     res.send(item);
      })
      .catch(err => {
        res.status(err.code).json(err);
      });
  };

  let deleteWriting = function(req, res) {
    Writing.findByIdAndRemove(req.params.id, (err, user) => {
        res.json({success: true, message: "writing deleted.", user})
      });
    };



  module.exports={createWriting, getAllWritings,getWriting, editWriting, deleteWriting};