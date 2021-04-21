
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyD4fi89Xoj4_py_lOB52GmtOE9zxHHSHn4",
      authDomain: "kwitterapp-dabd7.firebaseapp.com",
      databaseURL: "https://kwitterapp-dabd7-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-dabd7",
      storageBucket: "kwitterapp-dabd7.appspot.com",
      messagingSenderId: "1006678142041",
      appId: "1:1006678142041:web:0e7c038b84c1a2e383d548"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom(){
      var Data = document.getElementById("room_name").value
      firebase.database().ref("/").child(Data).update({ purpose : "adding room" });
}
