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

    user_name=localStorage.getitem("user_name");

room_name=localStorage.getitem("room_name");

function send()
{
      message=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            Message:message,
            like:0
      });
      document.getElementById("message").value="";
}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } }); }); }
getData();

