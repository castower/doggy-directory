
const BREEDS_LIST_URL = "https://dog.ceo/api/breeds/list/all";

const breedsList = fetch(BREEDS_LIST_URL);

let breedNamesList = [];
let o = 0;

breedsList
  .then(function(response) {
    const processingBreedsList= response.json();
    return processingBreedsList;
  })
  .then(function(processedResponse) {
    // View response to API pull for breeds list
    console.log(processedResponse);

    // Store response as list
    let list = processedResponse.message;
    console.log(processedResponse.message);

    // Pull names out of response
    let breeds = Object.getOwnPropertyNames(processedResponse.message);
    console.log(Object.getOwnPropertyNames(processedResponse.message));

    // Cycle through responses to add breed names to breedNamesList
    for (let i=0; i < breeds.length; i++) {
      // Select name of breed
      nameBreed = breeds[i];
      if (processedResponse.message[`${nameBreed}`].length < 2) {
        // If there is not a sub-breed, add name to list
        breedNamesList.push(nameBreed);
      } else {

        // If there is a sub-breed, rotate through sub-breed names and concatenate names
        for (let n=0; n < processedResponse.message[`${nameBreed}`].length; n++) {
          // Save name of breed with sub-breed
          nameSubBreed = processedResponse.message[`${nameBreed}`][n] + " " + nameBreed;
          // add to breedNamesList
          breedNamesList.push(nameSubBreed);
        }
      }
    }

    // Add names from breedNamesList as options in drop-down on website
    while (o < breedNamesList.length) {
      // Create new option
      const opt = document.createElement("option");

      if (breedNamesList[o] === "african") {
        // Add text for option
        const node = document.createTextNode(`African Wild Dog`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "cattledog") {
        // Add text for option
        const node = document.createTextNode(`Australian Cattle Dog`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "frise") {
        // Add text for option
        const node = document.createTextNode(`Bichon Frise`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "cotondetulear") {
        // Add text for option
        const node = document.createTextNode(`Coton De Tulear`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "bullterrier") {
        // Add text for option
        const node = document.createTextNode(`Staffordshire Bull Terrier`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "australian") {
        // Add text for option
        const node = document.createTextNode(`Australian Shepherd`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "finnish") {
        // Add text for option
        const node = document.createTextNode(`Finnish Lapphund`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "germanshepherd") {
        // Add text for option
        const node = document.createTextNode(`German Shepherd`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "germanlonghair pointer") {
        // Add text for option
        const node = document.createTextNode(`German Longhair Pointer`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "mexicanhairless") {
        // Add text for option
        const node = document.createTextNode(`Mexican Hairless Dog`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "stbernard") {
        // Add text for option
        const node = document.createTextNode(`Saint Bernard`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "wolfhound") {
        // Add text for option
        const node = document.createTextNode(`Irish Wolfhound`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else if (breedNamesList[o] === "waterdog") {
        // Add text for option
        const node = document.createTextNode(`Spanish Water Dog`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      } else {
        const node = document.createTextNode(`${breedNamesList[o]}`);
        // Append text to option
        opt.appendChild(node);
        // Set value of option to breed name
        opt.value = `${breedNamesList[o]}`;
        // Select breedSelect element for drop-down menu
        const element = document.getElementById("breedSelect");
        // Add option to drop-down menu
        element.appendChild(opt);
        // Update object iterator
        o ++;
      }
    }
  // End of API query  
  })

// Create function to find drop-down menu selection value  
function searchDirectory () {
  document.querySelector('.hide').style.visibility = "visible";
  pullBreedPicture = 0;
  // Find breed currently in selector
  selectElement = document.querySelector('#breedSelect');
  // Save value from the selector
  output = selectElement.value;
  // View in console
  console.log(output);
  // Split if there is a space in the value
  outputName = output.split(" ");
  // View number words
  console.log(outputName);
  console.log(outputName.length);
  // If less than 2 use breed random API
  if ((outputName.length < 2 && output != "allbreeds")) {
    BREED_URL = `https://dog.ceo/api/breed/${output}/images/random`
    console.log(BREED_URL);
    pullBreedURL();
  } else if (output === "allbreeds") {
    BREED_URL = "https://dog.ceo/api/breeds/image/random"
    console.log(BREED_URL);
    pullBreedURL();
  } else {
    BREED_URL = `https://dog.ceo/api/breed/${outputName[1]}/${outputName[0]}/images/random`
    console.log(BREED_URL);
    pullBreedURL();
    //displayBreedPic(processedResponse);
  }
// End of function  
}

// Function to pull breed specific pictures
function pullBreedURL(){
    // Fetch from URL
    const pull = fetch(BREED_URL);
    pull
    .then(function(response) {
      // Process response
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      // View response
      console.log(processedResponse);
      const output = processedResponse;
      return output;
      })
    .then(function(output) {
      // If response is a success, pull image and name of breed
      if (output.status === "success") {
        // Pull image URL
        let imgURL = output.message;
        console.log("THIS IS THE IMAGE URL", imgURL);
        // Place image on web page
        let image = document.querySelector(".image");
        image.src = `${imgURL}`;
        image.addEventListener("load", () => {
            document.querySelector('.hide').style.visibility = "hidden";
            console.log("The image has loaded!");
        });
        // Pull breed name from URL
        text = imgURL.split('/');
        text = text[4];
        text = text.replace('-', ' ');
        textSplit = text.split(' ');
        console.log(textSplit);
        // If breed is sub-breed, pull both parts, else pull single name
        if (textSplit.length > 1){
          text = textSplit[1] + ' ' + textSplit[0];
          console.log("THIS IS TEXT", text);
        } else {
          text = textSplit[0];
          console.log("THIS IS TEXT", text);
        }
        // Add alt-text to image
        image.alt = `Picture of dog, ${text}`;

        // Place breed name on website
        let txt = document.querySelector(".message");
        if (text === "african"){
          txt.innerHTML = `African Wild Dog`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "shepherd australian") {
          txt.innerHTML = `Australian Shepherd`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "australian cattledog") {
          txt.innerHTML = `Australian Cattle Dog`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "lapphund finnish") {
          txt.innerHTML = `Finnish Lapphund`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "mexicanhairless") {
          txt.innerHTML = `Mexican Hairless Dog`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "germanshepherd") {
          txt.innerHTML = `German Shepherd`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "germanlonghair pointer") {
          txt.innerHTML = `German Longhair Pointer`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "stbernard") {
          txt.innerHTML = `Saint Bernard`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "cattledog") {
          txt.innerHTML = `Cattle Dog`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "cotondetulear") {
          txt.innerHTML = `Coton de Tulear`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else if (text === "spanish waterdog") {
          txt.innerHTML = `Spanish Water Dog`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        } else {
          txt.innerHTML = `${text}`;
          txt.addEventListener("load", () => {
              console.log("The text has loaded!");
          });
        }

      } else {
        // If URL doesn't load, rerun function
        console.log("Code is not working");
        pullBreedURL ();
      }
    })

  // end of function  
  }


// Search directory when clicking button
document.querySelector('.search').addEventListener("click", searchDirectory);

// Animate header  
anime({
    targets: '.h1text',
    //rotate:360,
    translateY: [50, 0],
    easing: 'easeOutBounce',
    loop: 2
  });
