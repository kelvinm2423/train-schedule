// Steps to complete:
/*
1. Create Firebase link
2. Create initial train data in database
3. Create button for adding new trains - then update the html + update the database
4. Create a way to retrieve trains from the trainlist.
5. Create a way to calculate the time way. Using difference between start and current time.Then take the difference and modulus by frequency. (This step can be completed in either 3 or 4)
*/

var trainFirebase = 
    apiKey: "AIzaSyAXnTGZyOgPYzIXdjl9r6jWRuZjoxlomV8",
    authDomain: "train-schedule-bea38.firebaseapp.com",
    databaseURL: "https://train-schedule-bea38.firebaseio.com",
    projectId: "train-schedule-bea38",
    storageBucket: "train-schedule-bea38.appspot.com",
    messagingSenderId: "118977121347"
  };
  firebase.initializeApp(trainFirebase);

  $("#addTrainBtn").on("click", function(){

  var trainName = $("#nameButton").val();
  var trainLocation = $("#locationButton").val();
  var trainTime = $("#timeButton").val();
  var timeSpan = $("#spanButton").val();

  	var newTrain = {
		name:  trainName,
		destination: trainLocation,
		timeofTrain: trainTime,
		durationofTravel: timeSpan
	}
}
  
  var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
	var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency ;
	var tMinutes = tFrequency - tRemainder;

	// To calculate the arrival time, add the tMinutes to the currrent time
	var tArrival = moment().add(tMinutes, "m").format("hh:mm A"); 


