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
    image:"./images/djrell.jpg",
    name:"Deejay Rell",
    vendor_category:"Deejays",
    phone_number:"4694322566",
    email:"deejayrell@gmail.com",
    instagram_name:"@deejayrell"
    
  }).then(function(response){
    
  });

  db.Vendors.create({
    image:"./images/bode.jpg",
    name:"DJ Bode",
    vendor_category:"Deejays",
    phone_number:"6825616715",
    email:"",
    instagram_name:"@dj_bode"
    
  }).then(function(response){
   
  });

  db.Vendors.create({
    image:"./images/dj-playboy.jpg",
    name:"DJ Playboy",
    vendor_category:"Deejays",
    phone_number:"2142842145",
    email:"djplayboydallas@gmail.com",
    instagram_name:"@djplayboy"
    
  }).then(function(response){
   
  });

  db.Vendors.create({
    image:"./images/djebou.jpeg",
    name:"DJ Ebou",
    vendor_category:"Deejays",
    phone_number:"4692126636",
    email:"djebou@morefyah.com",
    instagram_name:"@deejayebou"
    
  }).then(function(response){
    
  });

  db.Vendors.create({
    image:"./images/djsherry-shay.jpg",
    name:"DJ SherryShay",
    vendor_category:"Deejays",
    phone_number:"8172622029",
    email:"djsherryshay@gmail.com",
    instagram_name:"@djsherryshay"
    
  }).then(function(response){
    
  });

  db.Vendors.create({
    image:"./images/ashley.jpeg",
    name:"BeautybyAshleyOhh",
    vendor_category:"Make Up Artists",
    phone_number:"4693215805",
    email:"beautybyashleyohh@gmail.com",
    instagram_name:"@beautybyashleyohh"
    
  }).then(function(response){
  
  });

  db.Vendors.create({
    image:"./images/stace.jpeg",
    name:"StaceFace Beauty Bar",
    vendor_category:"Make Up Artists",
    phone_number:"5124829004",
    email:"info@stacefacebeauty.com",
    instagram_name:"@staceface_beauty"
    
  }).then(function(response){
  
  });

  db.Vendors.create({
    image:"./images/fade.jpg",
    name:"Fade Eros MUA",
    vendor_category:"Make Up Artists",
    phone_number:"2144349313",
    email:"",
    instagram_name:"@fade_eros"
    
  }).then(function(response){
 
  });

  db.Vendors.create({
    image:"./images/stella.jpeg",
    name:"Stella Lyons",
    vendor_category:"Make Up Artists",
    phone_number:"4692634252",
    email:"makeupbystellez@gmail.com",
    instagram_name:"@makeupbystelle"
    
  }).then(function(response){
  
  });

  db.Vendors.create({
    image:"./images/fernorm.jpeg",
    name:"Fernorm Faces",
    vendor_category:"Make Up Artists",
    phone_number:"9727559704",
    email:"fernormfaces@gmail.com",
    instagram_name:"@fernormfaces"
    
  }).then(function(response){
  
  });


  db.Vendors.create({
    image:"./images/live.jpg",
    name:"Live and Inspire Photography",
    vendor_category:"Photographers",
    phone_number:"4696077714",
    email:"liveandinspirephotos@gmail.com",
    instagram_name:"@live_and_inspire_photography"
    
  }).then(function(response){
  
  });

  db.Vendors.create({
    image:"./images/rahel.jpeg",
    name:"Photos By Rahel",
    vendor_category:"Photographers",
    phone_number:"2142740040",
    email:"photosxrahel@gmail.com",
    instagram_name:"@photosbyrahel"
    
  }).then(function(response){
 
  });

  db.Vendors.create({
    image:"./images/john.jpeg",
    name:"John John",
    vendor_category:"Photographers",
    phone_number:"6825595445",
    email:"johnjvhn@gmail.com",
    instagram_name:"@johnjvhn"
    
  }).then(function(response){
 
  });

  db.Vendors.create({
    image:"./images/nadine.jpeg",
    name:"Nayy Swavey Photography",
    vendor_category:"Photographers",
    phone_number:"6825217644",
    email:"NSphotography95@gmail.com",
    instagram_name:"@nayyswaveyphotography"
    
  }).then(function(response){
    
  });

  db.Vendors.create({
    image:"./images/vmp.JPG",
    name:"Victory Media Pro",
    vendor_category:"Photographers",
    phone_number:"4694410882",
    email:"victorymediapro@gmail.com",
    instagram_name:"@vmpimages"
    
  }).then(function(response){
  
  });

  db.Vendors.create({
    name:"Noire Babes",
    image:"./images/noire.JPG",
    vendor_category:"Bartenders",
    phone_number:"4694322566",
    email:"noireagency@gmail.com",
    instagram_name:"@noireagency"
    
  }).then(function(response){
  
  });
  // Starts our server on the predefined PORT
  // Only starts if the db successfully syncs
  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });

});