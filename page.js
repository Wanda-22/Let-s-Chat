//YOUR FIREBASE LINKS

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

    w=localStorage.getItem("username");
    r=localStorage.getItem("roomname");

    function enter1() {
      q=document.getElementById('message').value;
      firebase.database().ref(r).push({
            Name:w,
            Message:q,
            like:0
      });
      document.getElementById('message').value=" ";
    }
function getData() { firebase.database().ref("/"+r).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      na=message_data['Name'];
      me=message_data['Message'];
      li=message_data['like'];
      name_with_tag = "<h4> "+ na+ "</h4>";
      message_with_tag = "<h4 class='message_h4'>" + me + "</h4>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ li +"</span></button><hr>";
      like_button ="<button class='btn btn-info' id="+firebase_message_id+" value="+li+" onclick='updateLike(this.id)'>";
      row = name_with_tag + message_with_tag +like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
      


//End code
      } });  }); }
getData();

function updateLike(p) {
      console.log(p);
      zz=p;
      ve=document.getElementById(zz).value;
      go=Number(ve)+1;
      console.log(go);
      firebase.database().ref(r).child(p).update({
            like:go
      });
}
function out() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}