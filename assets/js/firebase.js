// Initialize Firebase
var config = {
  apiKey: "AIzaSyDRaTcEIU5NhASiVwAGtXhO1UEl3VSc5y0",
  authDomain: "hackchella.firebaseapp.com",
  databaseURL: "https://hackchella.firebaseio.com",
  projectId: "hackchella",
  storageBucket: "hackchella.appspot.com",
  messagingSenderId: "456824483773"
};
firebase.initializeApp(config);

function saveResumeToFireBase(){
  $(".form-group").click(function(){return false});
  const ref = firebase.storage().ref();
  const file =$('#resumeUpload').get(0).files[0];
  const name = $('#userEmail').val()+" " + $('#userName').val()+" " +file.name+ '-' + +(+new Date());
  const metadata = {contentType: file.type};
  const task = ref.child(name).put(file, metadata);
  task.then((snapshot) => {
    console.log( snapshot.downloadURL);
  }).catch((error)=>{
    console.error(error);
  })

  $("#btnResumeSubmit").html("Success");
  $('#userName').val("");
  $('#userEmail').val("");
  $("#resumeUpload").val("");
  $("#btnResumeSubmit").attr("disabled", "disabled");
}

function submitContactForm() {
  /*firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });*/

  const contactName = $('#contactName').val();
  const contactEmail = $('#contactEmail').val();
  const contactSubject = $('#contactSubject').val();
  const contactBody = $('#contactBody').val();

  const ref = firebase.database().ref();
  ref.push({
    name: contactName,
    email: contactEmail,
    subject: contactSubject,
    body: contactBody
  });

  $("#btnContactSubmit").html("Success");
  $('#contactName').val("");
  $('#contactEmail').val("");
  $('#contactSubject').val("");
  $('#contactBody').val("");
  $("#btnContactSubmit").attr("disabled", "disabled");
}
