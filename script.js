var pet_info = {
    name: "Buddy",
    weight: 10,
    happiness: 50,
    energy: 75
  };
  
$(function() {
  
  // Pet information object containing its name, weight, happiness, and energy.
  

  // Initial update of the pet information on the webpage.
  checkAndUpdatePetInfoInHtml();

  // Connect each button to its corresponding function.
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.nap-button').click(clickedNapButton);

  // Connect the DevTools demonstration buttons.
  $('.error-404-button').click(trigger404);
  $('.type-error-button').click(triggerTypeError);
  $('.violation-button').click(triggerViolation);

  // jQuery Method #1: wrap()
  // The wrap() method places the selected HTML element inside another
  // HTML element. Here, it wraps the pet image in a decorative frame.
  // This allows us to style the image and its frame separately in CSS.
  $('.pet-image').wrap("<div class='pet-frame'></div>");


  // DevTools demonstration: Console message logging.

  console.log("Giga Pet application initialized.");
  console.info("Pet information loaded successfully.");
  console.warn("Remember to keep Buddy healthy!");

  console.group("Giga Pet Information");

  console.log("Pet name:", pet_info.name);
  console.log("Pet weight:", pet_info.weight);
  console.log("Pet happiness:", pet_info.happiness);
  console.log("Pet energy:", pet_info.energy);

  console.groupEnd();

  // Display structured pet information using console.table().
  console.table([
    { Attribute: "Name", Value: pet_info.name },
    { Attribute: "Weight", Value: pet_info.weight },
    { Attribute: "Happiness", Value: pet_info.happiness },
    { Attribute: "Energy", Value: pet_info.energy }
  ]);

  // Custom CSS-styled console output using %c.
  console.log(
    "%c GIGA PET DEBUGGING ",
    "background: #365b3e; color: white; font-size: 16px; padding: 8px;"
  );

  // Example error-level user message for Console filtering.
  console.error("Example error message for DevTools demonstration.");

});


// Treat button: increases happiness, weight, and energy.
function clickedTreatButton() {

  pet_info.happiness += 10;
  pet_info.weight += 2;
  pet_info.energy += 5;

  console.log("Treat button clicked:", pet_info);

  checkAndUpdatePetInfoInHtml();

  showPetMessage("Woof! Thank you for the delicious treat!");
}


// Play button: increases happiness and decreases weight and energy.
function clickedPlayButton() {

  pet_info.happiness += 8;

  // Intentional bug for the DevTools debugging demonstration.
  // Playing should decrease weight, but this incorrectly increases it.
  // pet_info.weight += 1;

  // Fixed code
  pet_info.weight -= 1;

  pet_info.energy -= 15;

  console.log("Play button clicked:", pet_info);

  checkAndUpdatePetInfoInHtml();

  showPetMessage("Yay! I love playing with you!");
}


// Exercise button: decreases happiness, weight, and energy.
function clickedExerciseButton() {

  pet_info.happiness -= 5;
  pet_info.weight -= 2;
  pet_info.energy -= 25;

  console.log("Exercise button clicked:", pet_info);

  checkAndUpdatePetInfoInHtml();

  showPetMessage("I'm getting tired! But exercise is good for me!");
}


// New action: Nap button.
// Taking a nap increases happiness, weight, and energy.
function clickedNapButton() {

  pet_info.happiness += 8;
  pet_info.weight += 1;
  pet_info.energy += 30;

  console.log("Nap button clicked:", pet_info);

  checkAndUpdatePetInfoInHtml();

  showPetMessage("Zzz... That was a wonderful nap!");
}


// DevTools demonstration: Trigger a 404 Network Error.
function trigger404() {

  console.log("Requesting a missing image...");

  var missingImage = new Image();

  missingImage.src = "missing-devtools-image.jpg";
}


// DevTools demonstration: Trigger a TypeError.
function triggerTypeError() {

  console.log("Triggering an intentional TypeError...");

  var undefinedPet;

  console.log(undefinedPet.name);
}


// DevTools demonstration: Trigger a browser performance violation.
function triggerViolation() {

  console.log("Starting a long-running event handler...");

  var start = performance.now();

  while (performance.now() - start < 200) {
    // Intentionally blocks the main thread.
  }

  console.log("Long-running handler finished.");
}


// Checks the pet's values and updates the webpage.
function checkAndUpdatePetInfoInHtml() {

  checkWeightAndHappinessBeforeUpdating();

  updatePetInfoInHtml();
}


// Makes sure weight and happiness never fall below zero.
// Also makes sure energy stays between zero and 100.
function checkWeightAndHappinessBeforeUpdating() {

  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }

  if (pet_info.energy < 0) {
    pet_info.energy = 0;
  }

  if (pet_info.energy > 100) {
    pet_info.energy = 100;
  }
}


// Updates the HTML with the current pet information.
function updatePetInfoInHtml() {

  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.energy').text(pet_info.energy);

}


// Displays a notification from the pet after every action.
function showPetMessage(message) {

  // Update the main notification with the pet's comment.
  $('.pet-message').text(message);

  // Add the new message to the notification history.
  var newMessage = $('<li>').text(message);

  $('.message-history').append(newMessage);

  // jQuery Method #2: scrollTop()
  // The scrollTop() method gets or sets the vertical scroll position
  // of an element. Here, we set the scroll position of the notification
  // history to its total scroll height. This automatically scrolls
  // down to show the newest message whenever a notification is added.
  var history = $('.history-container');

  history.scrollTop(history[0].scrollHeight);

}
