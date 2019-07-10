// Basic Info

$("#name").focus();                     // cursor defaults to the Name section.
const $other = $("#other-title");       // selects the other-title input and assigns to a variable.

$other.hide();                          // hides the other input field.

$('#title').on('change', function () {  // this event listener selects the title dropdown and listens for changes
    if (this.value === 'other') {       // if this value equals the 'other' option.
        $other.show();                  // then the Your Job Role will show.
    } else {
        $other.hide();                  // when other isnt clicked it will hide.
    }
});



// T-Shirt Info

$("#design > option:nth-child(1)").hide(); // This hides the "Select Theme" `option` element in the "Design Menu"

$("#color > option:nth-child(1)").before('<option selected value="none">Please select a T-shirt theme</option>'); // this selects the first child from the "Design Menu" and places my new input before it.

$('#color > option[value != "none"]').hide(); // hides the colors in the “Color” drop down menu. If the value for the option doesnt equal "none" then it will be hidden.



$('#design').change(() => { // this event listener listens for changes when one of the two themes is selected.

    let thisOption = $('#design option:selected').attr("value"); // gets the value of the selected option
    if (thisOption == 'js puns') {                               // if “js puns” is selected
        $('#color option[value="none"]').remove();               // removes "Please select T-Shirt theme"
        $('#color option:contains("JS Puns")').show();           // shows options with "JS Puns"
        $('#color option:contains("JS shirt only")').first().attr('selected', false); // Color will only show "JS puns" as default
        $('#color option:contains("JS shirt only")').hide();     // hides "JS shirt only"
        $('#color option:contains("JS Puns")').first().attr('selected', 'selected'); // when "JS Puns" is selected after "JS shirt only" is selected then this will change options back to "JS Puns"
    } else if (thisOption == 'heart js') {                        // if “heart js” is selected
        $('#color option[value="none"]').remove();              // removes "Please select T-Shirt theme"
        $('#color option:contains("JS Puns")').hide();          // hides "JS Puns" options
        $('#color option:contains("JS Puns")').first().attr('selected', false); // Color will only show "JS shirt only" as default
        $('#color option:contains("JS shirt only")').show();    // shows all "JS shirt only" options
        $('#color option:contains("JS shirt only")').first().attr('selected', 'selected'); //when "JS shirt only" is selected after "JS Puns" s selected then this will change options back to "JS shirt only"
    } else {
        $("#color option:first").before('<option selected="selected" value="none">Please select a T-shirt theme</option>');
    }
    });




// Register for Activities

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
    }); ;



// Payment Info

$("#payment").val($("#payment option:nth-child(2)").val());         //make credit-card default value
$("#credit-card").show();
$("#payment > option:nth-child(1)").hide();
const $paypal = $('#payment').next().next();
const $bitcoin = $('#payment').next().next().next();

$paypal.hide();
$bitcoin.hide();

$("#payment").on('change', function () {
    if (this.value == "paypal") {
        $("#credit-card").hide();
        $bitcoin.hide(); //bitcoin
        $paypal.show();  //paypal
    } else if (this.value == "bitcoin") {
        $bitcoin.show();
        $paypal.hide();
        $("#credit-card").hide();
    } else {
        $("#credit-card").show();
        $bitcoin.hide();
        $paypal.hide();
    }

});



// Validation

$('label[for="name"]').before('<label class="error" id="name-error"><font color="red"><strong>Please enter a name.</strong></font></label>');
$('label[for="mail"]').before('<label class="error" id="email-error"><font color="red"><strong>Please enter an email address.</font></label>');
$('.activities legend').before('<label class="error" id="activity-error"><font color="red"><strong>Please choose at least one activity.</strong></font></label>');
$('#credit-card').before('<label class="error" id="cc-empty-error"><font color="red"><strong>The credit card field is empty.</strong></font></label>');
$('#credit-card').before('<label class="error" id="cc-number-error"><font color="red"><strong>Please enter a valid credit card number between 13-16 digits.</strong></font></label>');
$('#credit-card').before('<label class="error" id="cc-zip-error"><font color="red"><strong>Please enter a 5 digit zip code.</strong></font></label>');
$('#credit-card').before('<label class="error" id="cc-cvv-error"><font color="red"><strong>Please enter a 3 digit CVV number.</strong></font></label>');
$('.error').hide();


// Name validation
const validName = (name) => {
    const valid = /^\S/.test(name);     // tests for valid name, ignores whitespace
    if (valid) {
        $("#name-error").hide();        // hides error message if input name is valid
        return true;
    } else {
        $("#name-error").show();        // shows error message if input name is invalid
        return false;
    }
}

$('#name').on('input', (event) => {     // real-time name validation function
    if ($('#name').val() == '') {       // if name input is empty, call validation function
        validName($('#name').val())
    } else {
        $('#name-error').hide();        // if name input isn't empty, hide error message
    }
});


// Email Validation
const validEmail = (email) => {
    const valid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);    // tests for valid email
    if (valid) {
        $('#email-error').hide();                           // hides error message if email input is valid
        return true;
    } else {
        $('#email-error').show();                           // shows error message if email input is invalid
        return false;
    }
}


// Activity Validation
const validActivities = () => {
    if ($('.activities input:checked').length > 0) {
        $('#activity-error').hide();                    // hides error message if any activities are checked
        return true;
    } else {
        $('#activity-error').show();                    // shows error message if no activities are checked
        return false;
    }
}


//Payment Validation
$('#payment').on('change', function () {        // hides credit card errors if other payment option is selected
    if ($('#payment').val() === 'paypal' || $('#payment').val() === 'bitcoin') {
        $('#cc-empty-error').hide();
        $('#cc-number-error').hide();
        $('#cc-zip-error').hide();
        $('#cc-cvv-error').hide();
    }
});

const validCC = (cc) => {                        // credit card validation function
    if ($('#payment').val() === 'credit card') { // checks if credit card input is between 13 and 16 digits
        let valid = /^\d{13,16}$/.test(cc);

        if (valid) {
            $('#cc-empty-error').hide();        // if number input is valid, hide error messages
            $('#cc-number-error').hide();
            return true;
        } else if (cc !== '') {
            $('#cc-empty-error').hide();
            $('#cc-number-error').show();       // if card number isn't between 13-16 digits, show error message
            return false;
        } else {
            $('#cc-empty-error').show();        // if input field is empty, show error message
            $('#cc-number-error').hide();
            return false;
        }
    }
}

const validZip = (zip) => {                         // zip code validation function
    if ($('#payment').val() === 'credit card') {    // if credit card is selected, test if the zip code input is 5 digits
        let valid = /^\d{5}$/.test(zip);

        if (valid) {
            $('#cc-zip-error').hide();              // if zip code input is valid, hide error message
            return true;
        } else {
            $('#cc-zip-error').show();              // if zip code input is invalid, show error message
            return false;
        }
    }
}

const validCvv = (cvv) => {                         // cvv validation function
    if ($('#payment').val() === 'credit card') {    // if credit card is selected, test if the cvv input is 3 digits
        let valid = /^\d{3}$/.test(cvv);

        if (valid) {
            $('#cc-cvv-error').hide(); // if cvv number is valid, hide error message
            return true;
        } else {
            $('#cc-cvv-error').show(); // if cvv number is invalid, show error message
            return false;
        }
    }
}

const validFormFields = () => { // tests all form fields to see if all inputs are valid
    if ($('#payment').val() === 'credit card') {
        if (validName($('#name').val()) &&
            validEmail($('#mail').val()) &&
            validActivities() &&
            validCC($('#cc-num').val()) &&
            validZip($('#zip').val()) &&
            validCvv($('#cvv').val())) {
            return true; // returns true if all form field inputs are valid
        } else {
            validName($('#name').val());
            validEmail($('#mail').val());
            validActivities();
            validCC($('#cc-num').val());
            validZip($('#zip').val());
            validCvv($('#cvv').val());
            return false; // returns false if any form field inputs are invalid
        }
    } else {
        if (validName($('#name').val()) &&
            validEmail($('#mail').val()) &&
            validActivities()) {
            return true; // returns true if the credit card option is not selected and all other form field inputs are valid
        } else {
            validName($('#name').val());
            validEmail($('#mail').val());
            validActivities();
            return false; // returns false if any form input fields are invalid
        }
    }
}

// Register
$("form").submit((e) => {
    e.preventDefault();
    if(validFormFields())
    {
        location.reload();
    }
});