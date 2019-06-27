//Use jQuery to select the 'Name' input element and place focus on it.
const $name = $("#name").focus();
// In your JavaScript file, target the ‘Other’ input field, and hide it initially, so that it will
// display if JavaScript is disabled, but be hidden initially with JS.
const $other = $("#other-title");

$other.hide();

$('#title').on('change', function () { 
    if (this.value === 'other') { 
        $other.show(); 
    } else {
        $other.hide(); 
    }
});
    
//goal for the t-shirt section is to filter the available "Color" options by the selected theme in
//the "Design" field.
//Doing this ensures that the user cannot select an invalid combination of
//values for the "Design" and "Color" fields.
// When the form is initially loaded, we need to update the "Design" and "Color" fields so that it's
// clear to the user that they need to select a theme before selecting a color. Use jQuery to:

// ● Hide the “Select Theme” `option` element in the “Design” menu.

$("#design option:nth-child(1)").hide();

// ● Update the “Color” field to read “Please select a T-shirt theme”.

$("#color option:nth-child(1)").before('<option selected value="none">Please select a T-shirt theme</option>'); //its bothering me i need more research 

// ● Hide the colors in the “Color” drop down menu.
$('#color > option:nth-child(2)').hide();
$('#color > option:nth-child(3)').hide();
$('#color > option:nth-child(4)').hide();
$('#color > option:nth-child(5)').hide();
$('#color > option:nth-child(6)').hide();
$('#color > option:nth-child(7)').hide();



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

//     ● create an element to display the total activity cost,

//     Create a DOM element, store it in a global variable and append it to the `.activity` section. 


// Create a global variable to store total activity cost — initially set to 0 — don't use const since you want to update this as needed.
    

//Creating an element to display the total activity cost

   //Creating an element to display the total activity cost
    //var $myDiv = document.createElement("div");  // Create with DOM https://www.w3schools.com/jquery/jquery_dom_add.asp
    var $myDiv = $("<div></div>");
    $(".activities").append($myDiv);      // Append the new element
    var $totalCost = 0;

    $(".activities").change((event) => {
        const whenClicked = $(event.target);
        if (whenClicked.attr("type") == "checkbox")
        {
            const checkboxText = whenClicked.parent().text(); //parent is the label and the text is whats shown next to the checkbox 
            const $moneySign = checkboxText.indexOf("$");
            const dollarPlus = parseInt(checkboxText.slice($moneySign + 1)); //this makes the 


            //let isChecked = false;

            if (whenClicked.is(':checked')) {
                //do something when checked 
                //$totalCost = $totalCost + dollarPlus;
                $totalCost += dollarPlus;
                //isChecked = true;
            } else {
                $totalCost -= dollarPlus; // if += then numbers will keep adding up even when unchecked.
            }

            $myDiv.text("Total: $" + $totalCost);
            
            if (whenClicked.attr("name") !== "all")
            {
                const dayTimeSubstr = getTimestampStr(whenClicked);
                const allCheckboxes = $(".activities input");

                for (let i = 0; i < allCheckboxes.length; i+=1)
                {
                    let $currentBox = allCheckboxes.eq(i);
                    if ($currentBox.attr("name") != "all" && $currentBox.attr("name") != whenClicked.attr("name") && isTimestampConflicting(dayTimeSubstr, getTimestampStr($currentBox)))
                    {
                        $currentBox.attr("disabled", isChecked);
                    }
                }
            }
        }
    });

//});

const getTimestampStr = (chkBox) => {
    const chkBoxStr = chkBox.parent().text();
    const emDashLoc = chkBoxStr.indexOf("—");
    const commaLoc = chkBoxStr.indexOf(",");
    const dayTimeSubstr = chkBoxStr.slice(emDashLoc + 2, commaLoc);

    return dayTimeSubstr;
}

const DetermineTwentyFourHour = (curHour, hourStr) => {
    if (hourStr == "12am")
    {
        return 0;
    }
    else if (hourStr == "12pm")
    {
        return 12;
    }
    else if (hourStr.indexOf("pm")!= -1) 
    {
        return curHour + 12;
    }
    else
    {
        return curHour;
    }
}

/* const isTimestampConflicting = (leftTimestamp, rightTimestamp) => {
    const leftSpaceLoc = leftTimestamp.indexOf(" ");
    const rightSpaceLoc = rightTimestamp.indexOf(" "); */