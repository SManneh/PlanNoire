$(document).ready(function(){
    $('.modal').modal();
  });


  $(document).ready(function(){
    $('.slider').slider();
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });



  $(".dropdown-trigger").dropdown();

$.ajax({
    url:"/api/vendors",
    method: "GET"
}).then(function(response){
    console.log(response)
    let row = $('<div>').addClass('row center-cols center align');
    for(let i = 0; i < 6; i++){
        let item = response[i];
        let col = $('<div>').addClass('col s6 m4 12')
        let cardDiv = $('<div>').addClass('card')
        let image = $('<img>').attr('src', item.image).addClass("responsive-img").attr("width", "300px");
        let h2 = $('<h2>').text(item.name);
        let price = $('<p>').text(item.vendor_category);
        let submit = $('<button>').text('Booking Info').addClass('submit').attr('data-target', "modal1").addClass('modal-trigger');
        // let phoneNumber = $('<p>').text(item.phone_number);
        // let email = $('<p>').text(item.email);
        // let igName = $('<p>').text(item.instagram_name);
      
        cardDiv.append(image, h2, price, submit)
        col.append(cardDiv)
        row.append(col)
    }
    $("#card-div").append(row);
})


const selectCat = function(event){
    event.preventDefault();
    console.log($(this).text());
    getVendors($(this).text())
}


const getVendors = function(vendor_category){
$('#card-div').empty()

$.ajax({
    url: `api/vendors/${vendor_category}`,
    method:"GET"
}).then(function(response){
    console.log(response)
    console.log(response)
    let row = $('<div>').addClass('row center-cols center align');
    for(let i = 0; i < 6; i++){
        let item = response[i];
        let col = $('<div>').addClass('col s6 m4 12')
        let cardDiv = $('<div>').addClass('card')
        let image = $('<img>').attr('src', item.image).addClass("responsive-img").attr("width", "300px");
        let h2 = $('<h2>').text(item.name);
        let price = $('<p>').text(item.vendor_category);
        let submit = $('<button>').text('Booking Info').addClass('submit').attr('data-target', "modal1").addClass('modal-trigger');
        // let phoneNumber = $('<p>').text(item.phone_number);
        // let email = $('<p>').text(item.email);
        // let igName = $('<p>').text(item.instagram_name);
      
        cardDiv.append(image, h2, price, submit)
        col.append(cardDiv)
        row.append(col)
    }
    $("#card-div").append(row);

})

}

$('#photo').on('click', selectCat );
$('#mua').on('click', selectCat);
$('#dj').on('click', selectCat);
$('#deco').on('click', selectCat);
$('#bar').on('click', selectCat);
$('#cater').on('click', selectCat);
$('#venue').on('click', selectCat);