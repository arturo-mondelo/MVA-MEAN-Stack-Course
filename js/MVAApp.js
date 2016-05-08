var app = angular.module('MVAApp', []);

app.controller('principalControlador', function($scope) {
	$scope.posts = [];
	$scope.newPost = {creado_por: '', texto: '', time_stamp: ''};
	
	$scope.post = function() {
		$scope.newPost.time_stamp = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {creado_por: '', texto: '', time_stamp: ''};
	};
	
});