$(document).ready(function(){
    $('.modal').modal();
  });


$.ajax({
    url:"/api/vendors",
    method: "GET"
}).then(function(response){
    console.log(response)
    for(let i = 0; i < response.length; i++){
        let item = response[i];
        let cardDiv = $('<div>').addClass('card');
        let image = $('<img>').attr('src', item.image);
        let h2 = $('<h2>').text(item.name);
        let price = $('<p>').text(item.vendor_category);
        let submit = $('<button>').text('More Info').addClass('submit').attr('data-target', "modal1").addClass('modal-trigger');
        let phoneNumber = $('<p>').text(item.phone_number);
        let email = $('<p>').text(item.email);
        let igName = $('<p>').text(item.instagram_name);
      
        cardDiv.append(image, h2, price, submit)
        $("#card-div").append(cardDiv);
    }
 
})



    
   
    $(".modal-content").append(h2, phoneNumber, email, igName);