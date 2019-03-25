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
