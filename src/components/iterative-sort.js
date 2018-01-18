const airtableURL = 'https://api.airtable.com/v0/appyL6lALRayylZ1h/Cards';
const airtableKey = 'keytbs1vwV6QfvgGh';

let cardList = [];

async function listRecords(url) {
  try{
    const response = await fetch(url);
    let data = await response.json();
    if(data.offset !== undefined){
      console.log(`getting more from offset: ${data.offset}`);
      data.records = data.records.concat( await listRecords(`${url}&offset=${data.offset}`) );
    }
    return data.records;
  } catch(err) {
    console.error(err);
  }
}

async function getRecord(url) {
  try{
    const response = await fetch(url);
    let record = await response.json();
    return record;
  } catch(err) {
    console.error(err);
  }
}

// // get card list
// getData(`${airtableURL}?api_key=${airtableKey}`)
// .then((records) => {
//   cardList = records;
//   console.log('card list', cardList);
//   let cursor = Math.floor(Math.random()*(cardList.length - cardsPerHand - 1))
//   cardsInHand = cardList.splice(cursor,cardsPerHand);
// });


//////  Vue stuff
const cardsPerHand = 8;
let cardsInHand = [];

let v = new Vue({
  el: '#vueApp',
  data: {
    cards: cardsInHand
  },
  methods: {
    getCardList: function() {
      listRecords(`${airtableURL}?api_key=${airtableKey}`)
      .then((records) => {
        cardList = records;
      });
    },
    buildHand: function(){
      console.log('card list', cardList);
      let cursor = Math.floor(Math.random()*(cardList.length - cardsPerHand - 1))
      this.cards = cardList.splice(cursor,cardsPerHand);
    },
    getCard: function(id) {
      getRecord(`${airtableURL}/${id}?api_key=${airtableKey}`)
      .then((record) => {
        console.log('ze card',record);
      });
    }
  },
  mounted: function() {
    this.getCardList();
  }
});

console.log(v);



// ga('create', 'UA-36679089-5', 'auto');
// ga('send', 'pageview');

// // collect values from the elements on the page
// var todaysQuestion = document.getElementById('todaysQuestion').innerText;
// var todaysLocation = document.getElementById('thisLocation').innerText;

// var buttonsParent = document.getElementById('buttons');
// for (var i=0; i<buttonsParent.childElementCount; i++) {
//   buttonsParent.children[i].ontouchstart = function(e) {
//     this.classList.remove('awesome');
//   }
//   buttonsParent.children[i].ontouchend = function(e) {
//     this.classList.add('awesome');
//     ga(
//       'send', //command
//       'event', //hitType
//       todaysQuestion, //eventCategory
//       this.innerText, //eventAction
//       todaysLocation, //eventLabel
//       this.dataset.value //eventValue
//     );
//     e.preventDefault();
//   }
// }