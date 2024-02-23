'use strict';

// Ce module vérifie prépare l'objet data envoyé au plugin

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _helpers = require('../../node_modules/ava-ia/lib/helpers');

exports.default = function (state) {
	
	return new Promise(function (resolve, reject) {
		
		for (var rule in Config.modules.Salutation.rules) {
			var match = (0, _helpers.syntax)(state.sentence, Config.modules.Salutation.rules[rule]); 
			if (match) break;
		}
		
		// Recherche si une pièce est dans la phrase.
		let room = Avatar.ia.clientFromRule (state.rawSentence);
		
		setTimeout(function(){ 
			if (state.debug) info('Action Salutation');
			
			state.action = {
				module: 'Salutation',
				command: rule,
				room: room,
				sentence: state.sentence,
				rawSentence: state.rawSentence
			};
			resolve(state);
		}, 500);	
		
	});
};



