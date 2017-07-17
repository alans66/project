var menu = {
  "Our Offerings": [
    {
      "name": "Proteins",
      "items": [
        {
          "name": "Brisket",
          "price": 7
        },
        {
          "name": "Pulled Pork",
          "price": 6
        },
        {
          "name": "Ribs-Full Rack",
          "price": 14
        },
        {
          "name": "Ribs-Half Rack",
          "price": 8.5
        }
      ]
    },
    {
      "name": "Sides",
      "items": [
        {
          "name": "Mac and Cheese",
          "price": 2.5
        },
        {
          "name": "Green Beans",
          "price": 2.5
        },
        {
          "name": "Cole Slaw",
          "price": 2.5
        },
        {
          "name": "Broccoli Salad",
          "price": 2.5
        },
        {
          "name": "Baked Beans",
          "price": 2.5
        },
        {
          "name": "Potato Salad",
          "price": 2.5
        }
      ]
    },
    {
      "name": "Soft Drinks",
      "items": [
        {
          "name": "Coca-Cola",
          "price": 2
        },
        {
          "name": "Diet Coke",
          "price": 2
        },
        {
          "name": "Dr. Pepper",
          "price": 2
        },
        {
          "name": "7-up",
          "price": 2
        }
      ] 
    }
  ]
}

var menuElement = document.getElementById("foodmenu");

menu.Food.forEach(function(category) {
    var table = 
        `<table class="menu">
            <thead>
                <tr>
                    <th colspan="2">
                        <h4 class="menu-head red">${category.name}</h4>
                    </th>
                </tr>
            </thead>
            <tbody>`;

    
category.items.forEach(function(item) {
        table +=
            `<tr>
                <td>${item.name}</td>
                <td class="menu-price text-right">$${item.price.toFixed(2)}</td>
             </tr>`;
    });

table += '</tbody></table>'

    
menuElement.innerHTML += table;
});

$('#email-field').keyup(function(){
  if(this.value !== '' && !isValidEmailAddress(this.value)) {
    $('#email-validation-message').show();
    $('#email-submit').prop('disabled', true);
  } else {
    $('#email-validation-message').hide();
    $('#email-submit').prop('disabled', false);
  }
});

$('#email-submit').click(function(e){
  e.preventDefault();
  alert('Server unavaliable, try again later!');
});

//Checks if email address is valid.  
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};


