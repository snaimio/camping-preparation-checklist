
const totalCampingItems = 8;
let preparedCount = 0; // tracking number of prepared camping items

document.addEventListener('DOMContentLoaded', function() { // initializing checklist when page loads
    const campingItems = document.querySelectorAll('.thumb'); // getting all camping item images
    
    for (let i = 0; i < campingItems.length; i++) { // adding click event to each camping image item
        campingItems[i].addEventListener('click', function() {
            if (this.classList.contains('checked')) { // toggle between checked/not checked image items
                this.src = this.src.replace('_checked.png', '.png'); // mark as not prepared, revert to original image
                this.classList.remove('checked'); // remove the 'checked' class
                preparedCount--; // decrease the counter
            } else {
                this.src = this.src.replace('.png', '_checked.png'); // mark as prepared, show checked version
                this.classList.add('checked'); // add the 'checked' class
                preparedCount++; // increase the counter
            }
            updatePreparationStatus(); // update preparation status display
        });
    }
});

function updatePreparationStatus() { // update preparation status and button state
    const statusText = document.querySelector('#counterText'); // get the element that displays status
    const actionButton = document.querySelector('#goCampingBtn'); // get the action button element
    
    statusText.textContent = preparedCount + ' of ' + totalCampingItems + ' items ready!'; // updated counter status text
    
    if (preparedCount === totalCampingItems) { // check if all 8 items are ready
        statusText.style.color = '#ff7f50'; // change text color to green
        actionButton.value = 'Go Camping!'; // change button text to "Go Camping!"
    } else {
        statusText.style.color = '#ccc'; // reset text color to grey
        actionButton.value = 'Reset'; // change button text to "Reset"
    }
}

function ResetPrep() { // handle action button click
    const actionButton = document.querySelector('#goCampingBtn'); // get the action button element
    
    if (actionButton.value === 'Go Camping!') { // if fully prepared, proceed to camping
        document.location.assign('camping.html'); // navigate to the next page
    } else {
        preparedCount = 0; // reset counter status to zero
        
        const campingItems = document.querySelectorAll('.thumb'); // get all camping items again
        for (let i = 0; i < campingItems.length; i++) { // loop through all items
            campingItems[i].classList.remove('checked'); // remove the 'checked' class
            campingItems[i].src = campingItems[i].src.replace('_checked.png', '.png'); // revert image to original state
        }
        
        updatePreparationStatus(); // update counter display after reset
    }
}