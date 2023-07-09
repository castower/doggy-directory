
const BREEDS_LIST_URL = "https://dog.ceo/api/breeds/list/all";

const breedsList = fetch(BREEDS_LIST_URL);

breedNames = [];
breedNamesUnique = [];
let o = 0;

breedsList
  .then(function(response) {
    const processingBreedsList= response.json();
    return processingBreedsList;
  })
  .then(function(processedResponse) {
    console.log(processedResponse);
    let list = processedResponse.message;
    console.log(processedResponse.message);
    console.log(Object.getOwnPropertyNames(processedResponse.message));
    console.log(processedResponse.message["australian"])
    console.log(processedResponse.message["australian"].length)

    let breeds = Object.getOwnPropertyNames(processedResponse.message);
    // console.log(breeds[0]);

    // console.log(breeds.length);

    // console.log(breeds[97]);

    for (let i=0; i < breeds.length; i++) {
      nameBreed = breeds[i];
      if (processedResponse.message[`${nameBreed}`].length < 2) {
        breedNames.push(nameBreed);
      } else {
        console.log("Sub-breeds exist for", nameBreed);
        console.log("Sub-breed 1:", processedResponse.message[`${nameBreed}`][0]);
        for (let n=0; n < processedResponse.message[`${nameBreed}`].length; n++) {
          nameSubBreed = processedResponse.message[`${nameBreed}`][n] + " " + nameBreed;
          breedNames.push(nameSubBreed);
        }
      }
    }

    while ( o < breedNames.length ) {
      const opt = document.createElement("option");
      const node = document.createTextNode(`${breedNames[o]}`);
      opt.appendChild(node);
      opt.value = `${breedNames[o]}`;

      const element = document.getElementById("breed");
      element.appendChild(opt);
      o ++;
    }

    function searchDirectory () {
        selectElement = document.querySelector('#breed');
        output = selectElement.value;
        console.log(output);
        outputName = output.split(" ");
        console.log(outputName.length);
        if (outputName.length < 2) {
          BREED_URL = `https://dog.ceo/api/breed/${output}/images/random`
          console.log(BREED_URL);
          const pull = fetch(BREED_URL);
          pull
          .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
          })
          .then(function(processedResponse) {
            console.log(processedResponse);
            if (processedResponse.status === "success") {
              let imgURL = processedResponse.message;
              console.log("THIS IS THE IMAGE URL", imgURL);
              let image = document.querySelector(".image");
              image.src = `${imgURL}`;
              image.addEventListener("load", () => {
                  console.log("The image has loaded!");
              });
              
              text = imgURL.split('/');
              text = text[4];
              text = text.replace('-', ' ');
              console.log(text);
              textSplit = text.split(' ');
              console.log(textSplit);
              if (textSplit.length > 1){
              text = textSplit[1] + ' ' + textSplit[0];
              } else {
                  text = textSplit[0];
              }
              image.alt = `Picture of dog, ${text}`;
              let txt = document.querySelector(".message");
              txt.innerHTML = `${text}`;
              txt.addEventListener("load", () => {
                  console.log("The text has loaded!");
              });
            }
            });
        } else {
          BREED_URL = `https://dog.ceo/api/breed/${outputName[1]}/${outputName[0]}/images/random`
          console.log(BREED_URL);
          const pull = fetch(BREED_URL);
          pull
          .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
          })
          .then(function(processedResponse) {
            console.log(processedResponse);
            if (processedResponse.status === "success") {
              let imgURL = processedResponse.message;
              console.log("THIS IS THE IMAGE URL", imgURL);
              let image = document.querySelector(".image");
              image.src = `${imgURL}`;
              image.addEventListener("load", () => {
                  console.log("The image has loaded!");
              });
              
              text = imgURL.split('/');
              text = text[4];
              text = text.replace('-', ' ');
              console.log(text);
              textSplit = text.split(' ');
              console.log(textSplit);
              if (textSplit.length > 1){
              text = textSplit[1] + ' ' + textSplit[0];
              } else {
                  text = textSplit[0];
              }
              image.alt = `Picture of dog, ${text}`;
              let txt = document.querySelector(".message");
              txt.innerHTML = `${text}`;
              txt.addEventListener("load", () => {
                  console.log("The text has loaded!");
              });
            }
          })
        };
    document.querySelector('.search').addEventListener("click", searchDirectory);
    };
  });
  


anime({
    targets: '.h1text',
    //rotate:360,
    translateY: [50, 0],
    easing: 'easeOutBounce',
    loop: 2
  });
