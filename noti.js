const firebaseConfig = {
    apiKey: "AIzaSyANqCN1EuWNH9hexLT2rAONCdazA706TEI",
    authDomain: "web-notifere.firebaseapp.com",
    databaseURL: "https://web-notifere-default-rtdb.firebaseio.com",
    projectId: "web-notifere",
    storageBucket: "web-notifere.appspot.com",
    messagingSenderId: "94448209735",
    appId: "1:94448209735:web:0fd1b0df9ae2830d460662",
    measurementId: "G-4FT7X7QD15"
    
      };
  
      const form = document.querySelector('#dictionary-form');
      

  data1=[]
  firebase.initializeApp(firebaseConfig);
  var firebaseRef = firebase.database().ref('message');
  function push_notification(){
  firebaseRef.once("value" , function(snapshot)
  {
  var data = snapshot.val();
  let filteredData = data.filter(item => item !== null);
   function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
   }
  const randomElement = getRandomElement(filteredData);
   let data2 = randomElement;
   let value = data2["word"];
   console.log(value);
  Push.create("Skill up", {
      body: value,
      icon: 'https://previews.123rf.com/images/coolvectorstock/coolvectorstock1808/coolvectorstock180802556/106911764-blood-sample-vector-icon-isolated-on-transparent-background-blood-sample-logo-concept.jpg',
      timeout: 10000,
      onClick: function () {
          window.focus();
          this.close();
      }
  });


})
setTimeout(push_notification, 20000)
}



function clear(){
  Push.clear();
}
