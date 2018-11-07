
$(document).ready(function(){
    $('.modal').modal();
    $('.modal2').modal();
  });


  $(document).ready(function(){
    $('.slider').slider();
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('select').formSelect();
  });
      

  $(".dropdown-trigger").dropdown();


//   function checkForm(form)
//   {
   
//     if(form.inputfield.value == "") {
//       alert("Error: Input is empty!");
//       form.inputfield.focus();
//       return false;
//     }
//   }




  $('#submit').on('click', function(event){
      event.preventDefault();
      const name = $("#name").val()
      const vendorCat = $("#vendor_category").val()
      const number = $("#phone_number").val()
      const email = $("#email").val()
      const igName = $("#instagram_name").val()
      const image = $("#image").val()

      const vendorInfo  = {
          name: name, 
          vendorCat: vendorCat, 
          number: number, 
          email: email, 
          igName: igName,
          image: image
      }

      if(email.indexOf("@") !== -1){
      $.post('/api/vendors', vendorInfo, function(res){
        console.log(res, "This is the response");

        $("#name").val("")
        $("#vendor_category").val("")
        $("#phone_number").val("")
        $("#email").val("")
        $("#instagram_name").val("")
        $("#image").val("")

        $(".modal").modal("open")

      });
    }
    else{
        alert("Please enter a valid email address")
    }

  })


// call to display all vendor data and to dynamically append them on the page
// $.ajax({
//     url:"/api/vendors",
//     method: "GET"
// }).then(function(response){
//     console.log(response)
//     let row = $('<div>').addClass('row center-cols center align');
//     for(let i = 0; i < 6; i++){
//         let item = response[i];
//         let col = $('<div>').addClass('col s6 m4 12')
//         let cardDiv = $('<div>').addClass('card')
//         let image = $('<img>').attr('src', item.image).addClass("responsive-img").attr("width", "300px");
//         let h2 = $('<h2>').text(item.name);
//         let category = $('<p>').text(item.vendor_category);
//         let submit = $(`<button class="submit" data-id=${item.id}>Booking Info</button>`)
//         // let phoneNumber = $('<p>').text(item.phone_number);
//         // let email = $('<p>').text(item.email);
//         // let igName = $('<p>').text(item.instagram_name);
      
//         cardDiv.append(image, h2, category, submit)
//         col.append(cardDiv)
//         row.append(col)
//     }
//     $("#card-div").append(row);
// })

// function to pass selected category to ajax call to display data
const selectCat = function(event){
    event.preventDefault();
    console.log($(this).text());
    getVendors($(this).text())
}


// side nav function to append selected category on page
$(".categoryClick").on("click", function(event){
    event.preventDefault();
    let categoryChoice = $(this).text();
    console.log(categoryChoice);
    getVendors(categoryChoice);
   
})


// function to call  category pages to display selected category data from navbar
const getVendors = function(vendor_category){
$('#card-div').empty()


// call for category pages to display selected category data from navbar
$.ajax({
    url: `api/vendors/${vendor_category}`,
    method:"GET"
}).then(function(response){
    console.log(response)
    console.log(response)
    $("#card-div").empty();
    let row = $('<div>').addClass('row center-cols center align');
    for(let i = 0; i < response.length; i++){
        let item = response[i];
        let col = $('<div>').addClass('col s6 m4 12')
        let cardDiv = $('<div>').addClass('card').css("margin-bottom", "100px");
        let image = $('<img>').attr('src', item.image).addClass("responsive-img").attr("width", "300px");
        let h2 = $('<h2>').text(item.name);
        let price = $('<p>').text(item.vendor_category);
        let submit = $(`<button class="submit" data-id=${item.id}>Booking Info</button>`)
        let phoneNumber = $('<p>').text(item.phone_number);
        let email = $('<p>').text(item.email);
        let igName = $('<p>').text(item.instagram_name);
        cardDiv.append(image, h2, price, submit)
        col.append(cardDiv)
        row.append(col)
    }
    $("#card-div").append(row);

})

}


$("#card-div").on("click", ".submit", function (event) {
    event.preventDefault();
    let id = $(this).data("id");

    $.ajax({
        url: "/api/vendor/" + id,
        method: "GET"
    }).then(function (response) {
        console.log("SINGLE", response);
        let vendor = response[0];
        $(".modal-content").empty();
        $(".modal-content").append(`<h2>${vendor.name}</h2>`)
        $(".modal-content").append(`<p><b>Phone Number: </b>${vendor.phone_number}</p>`)
        $(".modal-content").append(`<p><b>Email: </b>${vendor.email}</p>`)
        $(".modal-content").append(`<p><b>Instagram Handle: </b>${vendor.instagram_name}</p>`)

        $('.modal').modal('open');
    })
})

// onclick function for nav bar categories
$('#photo').on('click', selectCat );
$('#mua').on('click', selectCat);
$('#dj').on('click', selectCat);
$('#deco').on('click', selectCat);
$('#bar').on('click', selectCat);
$('#cater').on('click', selectCat);
$('#venue').on('click', selectCat);