exports.action = function(data, callback){

	let tblCommand = {

	ditBonjour : function() {DisBonjourBonsoir ("ditBonjour", data, client);
	},
	disBonsoir : function() {DisBonjourBonsoir ("disBonsoir", data, client);
	}				
};

	let client = setClient(data);
	info("Salutation:", data.action.command, "From:", data.client, "To:", client);
	tblCommand[data.action.command]();
	callback();
}

function DisBonjourBonsoir (politesse, data, client) {

	const bonjour = data.action.rawSentence.replace("tu", "").replace("dis", "").replace("dit", "").replace("bonjour", "").replace("à", "").replace("mon", "l\'").replace("la","la").replace("le","le").replace("mes","les").replace("aux","les").trim();
	if(politesse === "ditBonjour") {
    Avatar.speak(`Bonjour ${bonjour} !`, data.client, () => {
	Avatar.Speech.end(data.client);
	});
	return;
}

    const bonsoir = data.action.rawSentence.replace("tu", "").replace("dis", "").replace("dit", "").replace("bonsoir", "").replace("à", "").replace("mon", "l\'").replace("la","la").replace("le","le").replace("mes","les").replace("aux","les").trim();
    if(politesse === "disBonsoir") {
    Avatar.speak(`Bonsoir ${bonsoir} !`, data.client, () => {
	Avatar.Speech.end(data.client);
    });
	return;
	}
	
}

function setClient (data) {
	let client = data.client;
	if (data.action.room)
	client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
	if (data.action.setRoom)
	client = data.action.setRoom;
	return client;
}