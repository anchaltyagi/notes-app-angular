(function(module) {
	function noteController($scope, localStorageService) {
		var vm = this;
		vm.notes = localStorageService.get('notes') || [];


		//*********************************************
		// WATCHES
		//*********************************************

		//Save notes in local store
		$scope.$watch('vm.notes', function() {
			try {
				localStorageService.set('notes', vm.notes);
			} catch (e) {
				alert("Local storage size exceeded from 5MB.");
			}
		}, true);

		var addNote = function() {
			if (vm.newNoteText) {
				var note = {
					note: vm.newNoteText,
					noteTheme: 'blue'
				}
				vm.notes.push(note);
				vm.newNoteText = "";
			}
		}
		var deleteNote = function(index) {
			vm.notes.splice(index, 1);
		}
 
		var updateNoteContent = function(event, note) {
			note.note = event.target.innerText;
		}

		vm.addNote = addNote;
		vm.deleteNote = deleteNote;
		vm.updateNoteContent = updateNoteContent;
	}

	noteController['$inject'] = ['$scope', 'localStorageService'];
	module.controller('noteController', noteController);
}(angular.module('noteApp')))