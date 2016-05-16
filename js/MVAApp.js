var app = angular.module('MVAApp', []);
//controlador
app.controller('principalControlador', function($scope) {
	$scope.posts = [];
	$scope.newPost = {creado_por: '', texto: '', time_stamp: ''};
	
	$scope.post = function() {
		$scope.newPost.time_stamp = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {creado_por: '', texto: '', time_stamp: ''};
	};
	
});

app.controller('autenticacionControlador', function($scope) {
	$scope.usuario = {nombreusuario: '', contrasinal: ''};
	
	postService.getAll().success(function(data) {
		$scope.posts = data;
	});
	
	$scope.login = function() {
		//vacio hasta implementacion de la autenticacion
		$scope.mensaje_error = 'Peticion de login para ' + $scope.nombreusuario;
		
	};
	
	$scope.registrar = function() {
		//vacio hasta implementacion de la autenticacion
		$scope.mensaje_error = 'Registro solicitado para ' + $scope.nombreusuario;
	};
});