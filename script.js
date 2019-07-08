$("#name").focus(); // cursor defaults to the Name section. 
const $other = $("#other-title"); // selects the other-title input and assigns to a variable. 

$other.hide(); // hides the other input field.

$('#title').on('change', function () {  // this event listener selects the title dropdown and listens for changes
    if (this.value === 'other') {       // if this value equals the other option.
        $other.show();                  // then the Your Job Role will show.
    } else {
        $other.hide();                  // when other isnt clicked it will hide. 
    }
});
    

$("#design option:nth-child(1)").hide(); // This hides the "Select Theme" `option` element in the "Design Menu"

$("#color option:nth-child(1)").before('<option selected value="none">Please select a T-shirt theme</option>'); // this selects the first child from the "Design Menu" and places my new input before it. 

$('#color option[value != "none"]').hide(); // hides the colors in the “Color” drop down menu. If the value for the option doesnt equal "none" then it will be hidden. 


/* Then, when one of the two themes is selected, only the appropriate colors should show in the
“Color” drop down menu, and the “Color” field should update to the first available color. You’ll
use a `change` event listener on the “Design” menu `select` element to listen for changes. And
inside the event listener, you’ll use a conditional to determine what to hide, show and update.
● If “js puns” is selected, hide the three “heart js” option elements in the “Color” drop
down menu, show the three “js puns” option elements, and update the “Color” field to
the first available color. */



$('#design').change(() => {

    let choice = $('#design option:selected').attr("value");
    if (choice == 'js puns') {
        $('#color option[value="none"]').remove();
        $('#color option:contains("JS Puns")').show();
        $('#color option:contains("JS shirt only")').first().attr('selected', false);
        $('#color option:contains("JS shirt only")').hide();
        $('#color option:contains("JS Puns")').first().attr('selected', 'selected');
    }

/*● If “heart js” is selected, hide the three “js puns” option elements in the “Color” drop
down menu, show the three “heart js” option elements, and update the “Color” field to
the first available color.
 */

    else if (choice == 'heart js') {
        $('#color option[value="none"]').remove();
        $('#color option:contains("JS Puns")').hide();
        $('#color option:contains("JS Puns")').first().attr('selected', false);
        $('#color option:contains("JS shirt only")').show();
        $('#color option:contains("JS shirt only")').first().attr('selected', 'selected');
    } else {
        $("#color option:first").before('<option selected="selected" value="none">Please select a T-shirt theme</option>');
    }
    });

// Activity Section

    const $myDiv = $("<div></div>");        // this div element is created to display the total activity cost
    $(".activities").append($myDiv);        // the new div element is appended to the activities section. 
    let totalCost = 0;                     // the total cost will intially begin at 0.

    $(".activities").change((event) => {       // this event listener will listen for any changes in the activities section 
        const whenClicked = $(event.target);   // the target event property will return the element that triggers whenClicked variable.

 
        if (whenClicked.attr("type") === "checkbox") // whenClicked with the attribute "type" is equal to the "checkbox"
        {
            const checkboxText = whenClicked.parent().text();                       // parent is the label and the text is whats shown next to the checkbox 
            const $moneySignIndex = checkboxText.indexOf("$");                      // the index of "$" is chained to the label text
            const dollarPlus = parseInt(checkboxText.slice($moneySignIndex + 1));   // this makes the cost an actual number using parseInt
            //console.log(dollarPlus);
          
            if (whenClicked.is(':checked')) {
                totalCost += dollarPlus; // totalCost = totalCost + dollarPlus;
            } else {
                totalCost -= dollarPlus; // if += then numbers will keep adding up even when unchecked, so -= will subtract when unchecked. 
            }

            $myDiv.text("Total: $" + totalCost); // the div will show the Total: $ and whatever totalCost accumulates
        }     
    });

    $('[type="checkbox"]').change((e) => {                                                        // Listening for checkbox change
        if (e.target.name === "js-libs" && e.target.checked) {
          $(`input[name="node"]`).attr("disabled", true);                                         // Disabling 'node' if 'js-libs' checked
        } else if (e.target.name === "js-libs" && !e.target.checked) {
          $(`input[name="node"]`).removeAttr("disabled");
        }
      
        if (e.target.name === "node" && e.target.checked) {
          $(`input[name="js-libs"]`).attr("disabled", true);                                  // Disabling 'js-libs' if 'node' checked
        } else if (e.target.name === "node" && !e.target.checked) {
          $(`input[name="js-libs"]`).removeAttr("disabled");
        }
      
        if (e.target.name === "js-frameworks" && e.target.checked) {
          $(`input[name="express"]`).attr("disabled", true);                              // Disabling 'express' if 'js-frameworks' checked
        } else if (e.target.name === "js-frameworks" && !e.target.checked) {
          $(`input[name="express"]`).removeAttr("disabled");
        }
      
        if (e.target.name === "express" && e.target.checked) {
          $(`input[name="js-frameworks"]`).attr("disabled", true);                   // Disabling 'js-frameworks' if 'express' is checked
        } else if (e.target.name === "express" && !e.target.checked) {
          $(`input[name="js-frameworks"]`).removeAttr("disabled");
        }

    });


// Payment Section

$('#payment > option:nth-child(1)').hide();
$("#payment").val($("#payment option:nth-child(2)").val());         //make credit-card default value
$("fieldset:nth-child(4) > div:nth-child(5)").hide(); //hide paypal info
$("fieldset:nth-child(4) > div:nth-child(6)").hide(); //hide bitcoin info

$("#payment").on('click', function () {
    if (this.value == "paypal") {
        $("fieldset:nth-child(4) > div:nth-child(5)").show(); //paypal
        $("#credit-card").hide();
    } else { $("fieldset:nth-child(4) > div:nth-child(5)").hide(); }

    if (this.value == "bitcoin") {
        $("fieldset:nth-child(4) > div:nth-child(6)").show();
        $("#credit-card").hide();
    } else { $("fieldset:nth-child(4) > div:nth-child(6)").hide(); }     //hide bitcoin info

    if (this.value == "credit card") {
        $("#credit-card").show();
    }
});

