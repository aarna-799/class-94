
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBLCcAfI6rJM9uNCSjBnS535dFbaZAd0cw",
    authDomain: "class-94-33efd.firebaseapp.com",
    projectId: "class-94-33efd",
    storageBucket: "class-94-33efd.appspot.com",
    messagingSenderId: "802889960029",
    appId: "1:802889960029:web:2d4e9a890a4a41f3089bb4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      }); 


  }