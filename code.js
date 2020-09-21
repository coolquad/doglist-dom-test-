// Follow the Instructions on my.kenzie.academy for this assignment.
// They will give you details on each step.

// STEP ONE - Create your Data Model Here.

let DogModel = {
  dogName: "",
  breedName: "",
  dogAge: 0
};

let likeTreats;
let dogList;

let myNodelist = document.getElementsByTagName("li");
let i;
for( i = 0; i < myNodelist.length; i++){
  let span = document.createElement("button");
  let txt = document.createTextNode("Send Home");
  span.className = "send";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let send = document.getElementsByClassName("send");
// let i;
for (i = 0; i < send.length; i++) {
  send[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}


function onSubmitDog(event) {
  event.preventDefault();

  // STEP TWO - Add the dog to your data model.

  // Get all of the input fields

  // Grab all the values from the inputs.

  // If they didn't fill out all the fields, don't add the dog.
  // Just return
  if (validateForm()) {

    // Then render the list again
    renderDogList();

    isLiEmpty();
  }else{
    alert("Please Fill All Required Field");
  }


  // Finally, Reset the form.

}

function renderDogList() {
  let li_item = document.createElement('li');
  
  let textContent = DogModel.dogName + "! A " + DogModel.dogAge + " years old " + DogModel.breedName + " who loves treats!";

  let t = document.createTextNode(textContent);
  li_item.appendChild(t);

  let span = document.createElement("button");
  let txt = document.createTextNode("Send Home");
  span.className = "send";
  span.appendChild(txt);
  li_item.appendChild(span);

  dogList.appendChild(li_item);
  
  removeDog();
  
  document.forms["Form"]["name_input"].value = "";
  document.forms["Form"]["breed_input"].value = "";
  document.forms["Form"]["age_input"].value = "";
  document.forms["Form"]["treats_input"].checked = false;
  // STEP THREE - Render the dog list
  // If there are no dogs, then render "No Dogs!"
  // Otherwise, render all of the dogs in your data model.

  // Your Code Here!

  // Remember to add the "Send Home" button with an onclick pointing to
  // removeDog() with the current dog as an argument.
}

function removeDog() {
  // STEP FOUR - Remove the given dog from the data model.
  // Your Code Here

  dogList.onclick = function(event){
    let li = event.target.closest('li');

    let nodes = Array.from( dogList.children );
    let node = Array.from( li.closest('ul').children );
    let index = node.indexOf( li );
    dogList.removeChild(dogList.childNodes[index + 1]);
    isLiEmpty();
  }
}

function validateForm() {
  init();
  if (DogModel.dogName == null || DogModel.dogName == "", DogModel.breedName == null || DogModel.breedName == "", DogModel.dogAge == null || DogModel.dogAge == "", likeTreats == false) {
    return false;
  }
  return true;
}

function isLiEmpty(){
  if (dogList.getElementsByTagName("li").length == 0) {
      let textContent = "No dogs!";

      document.getElementById("no_dog_id").textContent = textContent;
  }else{
    document.getElementById("no_dog_id").textContent = "";
  }
}

function init(){
  DogModel.dogName = document.forms["Form"]["name_input"].value;
  DogModel.breedName = document.forms["Form"]["breed_input"].value;
  DogModel.dogAge = document.forms["Form"]["age_input"].value;
  likeTreats = document.forms["Form"]["treats_input"].checked;
  dogList = document.getElementById("dog_list");

}

let button = document.getElementById("submit_button");
button.onclick = onSubmitDog;