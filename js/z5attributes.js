//zadanie 5 na w3resource z JS DOM
//iterowanie oraz pętla for... of - uzyskanie wartości atrybutów z linku
//button nie zadziałał

const button = document.querySelector('button');
const link = document.querySelector('#w3r');

// function getAttributeValue() {
//   const allAttributeNames = link.getAttributeNames();
//   console.log(allAttributeNames);
//   for (const name of allAttributeNames) {
//     const attributeValue = link.getAttribute(name);
//     console.log(attributeValue);
//   }
// }

const getAttributeValue = () => {
  const allAttributeNames = link.getAttributeNames();
  console.log(allAttributeNames);
  for (let i = 0; i < allAttributeNames.length; i++) {
    const name = allAttributeNames[i];
    const attributeValue = link.getAttribute(name);
  }
};

button.addEventListener('click', getAttributeValue());
