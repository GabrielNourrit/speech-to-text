var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textbox = document.getElementById("data");

recognition.lang = 'fr-FR';
console.log(recognition);

recognition.continuous = true;

recognition.onstart = () => {
	//
}

function start(event){
	recognition.start();
}

function stop(event){
	recognition.stop();
}

recognition.onresult = (event) =>{
	var current = event.resultIndex;

	var transcript = event.results[current][0].transcript;


	if(transcript.substr(0, 7) == "Gabriel") console.log("command !");


	textbox.innerHTML = transcript;
}