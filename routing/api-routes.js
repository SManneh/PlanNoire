// Import in our db models
const db = require('../models');

module.exports = function(app) {

    // API Requests for /api/product
    // Below code controls what happens when a request is made to /api/vendors
  
    // GET Request
    // Responds with all the vendors
    app.get('/api/vendors', function(req, res) {
      db.Vendors.findAll({}).then(function(rows) {
        res.json(rows)
      }).catch(function(error) {
        res.json({ error: error });
      });
    });

    
  
    app.get('/api/vendors/:vendor_category', function(req, res){

      db.Vendors.findAll({where : {vendor_category: req.params.vendor_category, isApproved:true}})
      .then(function(data){
          res.json(data);
      }).catch(function(error){
          res.json({ error: error });
      })
      });


      app.get("/api/vendor/:id", function(req,res){
        db.Vendors.findAll({where:{id:req.params.id}})
        .then(function(response){
          console.log(response)
          res.json(response);
        }).catch(function(error){
          res.json({error:error});
        })
      
      })

      app.post('/api/vendors', function(req,res) {
        const newVendor = req.body;
        console.log(newVendor)
        db.Vendors.create({
          name: newVendor.name,
          vendor_category: newVendor.vendorCat,
          phone_number: newVendor.number,
          email: newVendor.email,
          instagram_name: newVendor.igName,
          image: newVendor.image,
        }).then(result => {
            res.send(result)
        })

      });






}