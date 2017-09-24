/* Prosjekt 1 i webutvikling 
Skrive av: Sølve R. Bø Hunvik
29. august - 3. september 2017 */

var firstbtn = document.getElementById("firstbtn");


function inilializeActivityComponent(){
    // Get the buttons and wire up click handlers
    $(".choice").on("click", function() {
        onActivityButtonClicked(this);
    })
}


function onActivityButtonClicked(selectedbtn){
    // Sets default styles for all the buttons
    resetAllButtons();

    //Styles the button that was just clicked 
    styleSelectedButton(selectedbtn);

    // Sets all the content divs as hidden
    $(".content-container").hide();

    // Get the name of the content corresponding to the selected button
    // as assigned by the data-content attribute on the button
    let contentElement = selectedbtn.getAttribute("data-content");

    // Show the content
    $(contentElement).animate({
        height: 'toggle'
    })
    $(contentElement).show();
    
}

/**
 * Reset the style of all buttons with the choise class
 */
function resetAllButtons() {
    $(".choice").css("background-color", "#fff");
    $(".choice").css("color", "#000");
}

/**
 * Styles the element as the selected button
 * @param {*} selectedButton 
 */
function styleSelectedButton(selectedButton) {
    $(selectedButton).css("background-color", "var(--seasoncolor)")
    $(selectedButton).css("color", "#fff");
}

// Select the first activity on load
onActivityButtonClicked(firstbtn);

inilializeActivityComponent();