//Use jQuery to select the 'Name' input element and place focus on it.
const $name = $("#name").focus();
// In your JavaScript file, target the ‘Other’ input field, and hide it initially, so that it will
// display if JavaScript is disabled, but be hidden initially with JS.
const $other = $("#other-title");

   $other.hide();

if ("#title > option:nth-child(6)" === '') {
    $other.show();
}

// $("title > option:nth-child(6)").on('click', function(){
    
// });

//goal for the t-shirt section is to filter the available "Color" options by the selected theme in
//the "Design" field.
//Doing this ensures that the user cannot select an invalid combination of
//values for the "Design" and "Color" fields.
// When the form is initially loaded, we need to update the "Design" and "Color" fields so that it's
// clear to the user that they need to select a theme before selecting a color. Use jQuery to:

// ● Hide the “Select Theme” `option` element in the “Design” menu.
$("#design > option:nth-child(1)").hide();

// ● Update the “Color” field to read “Please select a T-shirt theme”.
// ● Hide the colors in the “Color” drop down menu.
$("#color").html('<option>Please select a T-shirt theme</option>');


// ● NOTE: Be sure to check out the helpful links in the second section of this Study Guide if
// you’re unsure of how to accomplish these steps.