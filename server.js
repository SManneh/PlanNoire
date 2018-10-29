// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');

const app = express();

// Defines a PORT for the server to listen for requests
const PORT = 8080;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// -----------------

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

// Import Database Models
// =============================================================
const db = require('./models');
// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  console.log('Database is synced!');

  db.Vendors.create({
    name:"Deejay Rell",
    vendor_category:"Deejay",
    phone_number:"4694322566",
    email:"deejayrell@gmail.com",
    instagram_name:"@deejayrell"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"DJ Bode",
    vendor_category:"Deejay",
    phone_number:"6825616715",
    email:"",
    instagram_name:"@dj_bode"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"DJ Playboy",
    vendor_category:"Deejay",
    phone_number:"2142842145",
    email:"djplayboydallas@gmail.com",
    instagram_name:"@djplayboy"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"DJ Ebou",
    vendor_category:"Deejay",
    phone_number:"4692126636",
    email:"djebou@morefyah.com",
    instagram_name:"@deejayebou"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"DJ SherryShay",
    vendor_category:"Deejay",
    phone_number:"8172622029",
    email:"djsherryshay@gmail.com",
    instagram_name:"@djsherryshay"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"BeautybyAshleyOhh",
    vendor_category:"MUA",
    phone_number:"4693215805",
    email:"beautybyashleyohh@gmail.com",
    instagram_name:"@beautybyashleyohh"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"StaceFace Beauty Bar",
    vendor_category:"MUA",
    phone_number:"5124829004",
    email:"info@stacefacebeauty.com",
    instagram_name:"@staceface_beauty"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"Fade Eros MUA",
    vendor_category:"MUA",
    phone_number:"2144349313",
    email:"",
    instagram_name:"@fade_eros"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"Stella Lyons",
    vendor_category:"MUA",
    phone_number:"4",
    email:"makeupbystellez@gmail.com",
    instagram_name:"@makeupbystelle"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"Fernorm Faces",
    vendor_category:"MUA",
    phone_number:"9727559704",
    email:"fernormfaces@gmail.com",
    instagram_name:"@fernormfaces"
    
  }).then(function(response){
    console.log(response);
  });


  db.Vendors.create({
    name:"Live and Inspire Photography",
    vendor_category:"Photographers",
    phone_number:"4696077714",
    email:"liveandinspirephotos@gmail.com",
    instagram_name:"@live_and_inspire_photography"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"Photos By Rahel",
    vendor_category:"Photographers",
    phone_number:"2142740040",
    email:"photosxrahel@gmail.com",
    instagram_name:"@photosbyrahel"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"John John",
    vendor_category:"Photographers",
    phone_number:"6825595445",
    email:"johnjvhn@gmail.com",
    instagram_name:"@johnjvhn"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"Nayy Swavey Photography",
    vendor_category:"Photographers",
    phone_number:"6825217644",
    email:"NSphotography95@gmail.com",
    instagram_name:"@nayyswaveyphotography"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"Victory Media Pro",
    vendor_category:"Photographers",
    phone_number:"4694410882",
    email:"victorymediapro@gmail.com",
    instagram_name:"@vmpimages"
    
  }).then(function(response){
    console.log(response);
  });

  db.Vendors.create({
    name:"Noire Babes",
    vendor_category:"bartenders",
    phone_number:"4694322566",
    email:"noireagency@gmail.com",
    instagram_name:"@noireagency"
    
  }).then(function(response){
    console.log(response);
  });
  // Starts our server on the predefined PORT
  // Only starts if the db successfully syncs
  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });

});