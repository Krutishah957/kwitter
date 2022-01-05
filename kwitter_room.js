
//ADD YOUR FIREBASE LINKS HERE


// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCn327UIznhquYnA_jbd9QrE3_0HFu0AkM",
      authDomain: "kwitter-5d338.firebaseapp.com",
      databaseURL: "https://kwitter-5d338-default-rtdb.firebaseio.com",
      projectId: "kwitter-5d338",
      storageBucket: "kwitter-5d338.appspot.com",
      messagingSenderId: "415951625363",
      appId: "1:415951625363:web:29c5838eb920b608204166"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("username");

document.getElementById("user_name").innerHTML="WELCOME" + username + "!";

function add_room()
{
    room_name=document.getElementById("room_name").value;
    localStorage.setItem(room_name,roomname);
    window.location="kwitter_page.html";
}

function logout()
{
    window.location="index.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name"+ Room_names);
       row="<div class='room_name' id=" + Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
 
     
      });});}
getData();

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";

      }

      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }