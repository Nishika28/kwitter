
var firebaseConfig = {
      apiKey: "AIzaSyBA7SwFsk0pi0JU9IgXLMhLeiCCuLLM2Y4",
      authDomain: "kwitter-11b55.firebaseapp.com",
      databaseURL: "https://kwitter-11b55-default-rtdb.firebaseio.com",
      projectId: "kwitter-11b55",
      storageBucket: "kwitter-11b55.appspot.com",
      messagingSenderId: "133764330724",
      appId: "1:133764330724:web:ee74146f95e87ae96a28f1",
      measurementId: "G-ERMND5BT3L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        
      //End code
      });});}
getData();
