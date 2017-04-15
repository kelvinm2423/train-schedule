
/* PseudoCoding To-Do List
1. Create Firebase link
2. Get initial train data in database
3. Create button for adding new trains - then update the html + update the database
4. Create a way to retrieve trains from the trainlist.
5. Create a way to calculate the time way.
*/

var config = {
    apiKey: "AIzaSyAXnTGZyOgPYzIXdjl9r6jWRuZjoxlomV8",
    authDomain: "train-schedule-bea38.firebaseapp.com",
    databaseURL: "https://train-schedule-bea38.firebaseio.com",
    projectId: "train-schedule-bea38",
    storageBucket: "train-schedule-bea38.appspot.com",
    messagingSenderId: "118977121347"
  };
  firebase.initializeApp(config);

	var database = firebase.database();

  // var trainData = new Firebase("https://train-schedule-bea38.firebaseio.com/");

  $("#addTrainBtn").on("click", function(){

  var trainName = $("#nameButton").val();
  var trainLocation = $("#locationButton").val();
  var trainTime = $("#timeButton").val();
  var timeSpan = $("#spanButton").val();

  	var newTrain = {
		name: trainName,
		destination: trainLocation,
		frequency: frequency,
		durationofTravel: timeSpan
	}

	database.push(newTrain);

	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.frequency);
	console.log(newTrain.durationofTravel);

	alert("Train successfully added");

	return false;
});

  //display data
firebase.on('child_added', function(childSnapshot) {
//Trying to store and display data
  var tfrequency = childSnapshot.val().frequency;
  var ttrainName = childSnapshot.val().name;
  var tdestination = childSnapshot.val().destination;
  var firstAndNextTrain = childSnapshot.val().timeSpan;

  // find when the next train is and minutes until next train
  // pushed back 1 year to make sure it comes before current time Plan A
  var convertedDate = moment(childSnapshot.val().firstTrain, 'hh:mm').subtract(1, 'years');
  var trainMomentTime = moment(convertedDate).format('HH:mm');
  var currentTime = moment();

  // pushed back 1 year to make sure it comes before current time Plan B
  var firstTimeConverted = moment(trainTime,'hh:mm').subtract(1, 'years');
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  var tRemainder = diffTime % tfrequency;
  var tMinutesTillTrain = tfrequency - tRemainder;
  var nextTrain = moment().add(tMinutesTillTrain, 'minutes').format('HH:mm')
  
 //  // Plan C for getting difference in time
 //  var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
	// var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency ;
	// var tMinutes = tFrequency - tRemainder;

	// To calculate the arrival time
	var tArrival = moment().add(tMinutes, "m").format("hh:mm A")
}); 


