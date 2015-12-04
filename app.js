/**
 *  Module
 *
 * Description
 */
angular.module('noteApp', ['LocalStorageModule']).config(['localStorageServiceProvider',
	function(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix('notes');
	}
]);