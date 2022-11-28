
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDJPLrNF1NONUmpf9WZbU-4Q-gwNvB5eK0",
      authDomain: "kwitter-3b805.firebaseapp.com",
      databaseURL: "https://kwitter-3b805-default-rtdb.firebaseio.com",
      projectId: "kwitter-3b805",
      storageBucket: "kwitter-3b805.appspot.com",
      messagingSenderId: "942120114696",
      appId: "1:942120114696:web:360ec9b92f83a63bd54fbd",
      measurementId: "G-61CPH2P3T6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
y=localStorage.getItem("username");

document.getElementById('wel').innerHTML="WELCOME  "+y+"!";

function add() {
      a=document.getElementById('room').value;
      firebase.database().ref("/").child(a).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",a);
      window.location="page.html";   
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name is "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById('output').innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(s) {
  console.log("clicked room name",s); 
  localStorage.setItem("roomname",s);
  window.location="page.html";   
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}