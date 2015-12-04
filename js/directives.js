angular
	.module('noteApp')
	.directive('changeNoteTheme', function() {
		return {
			restrict: 'AE',
			scope:{
				theme: '@',
				index: '@'
			},
			link: function($scope, element, attrs) {
				element.bind("click", function(e) {
					var notesElement = angular.element(document.getElementById('notes_'+ $scope.index));
					if ($scope.theme == 'blue') {
						notesElement.attr('theme', 'blue');
					} else if ($scope.theme == 'red') {
						notesElement.attr('theme', 'red');
					} else if ($scope.theme == 'gray') {
						notesElement.attr('theme', 'gray');
					} else if ($scope.theme == 'yellow') {
						notesElement.attr('theme', 'yellow');
					}
				});
			}
		}
	});