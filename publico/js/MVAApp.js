var app = angular.module('MVAApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	//Display vista principal
	.when('/', {
		templateUrl: 'main.html',
		controller: 'principalControlador'
	})
	
	//Login Display
	.when('/login', {
		templateUrl: 'login.html',
		controller: 'autenticacionControlador'
	})
	
	//Display registro
	.when('/registro', {
		templateUrl: 'registro.html',
		controller: 'autenticacionControlador'
	});
});

//controlador prinipal
app.controller('principalControlador', function($scope) {
	$scope.posts = [];
	$scope.newPost = {creado_por: '', texto: '', time_stamp: ''};
	
	$scope.post = function() {
		$scope.newPost.time_stamp = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {creado_por: '', texto: '', time_stamp: ''};
	};
	
});

//controlador de autenticacion y registro
app.controller('autenticacionControlador', function($scope) {
	$scope.usuario = {nombreusuario: '', contrasinal: ''};
	$scope.mensaje_error = '';
	
	/*postService.getAll().success(function(data){
		$scope.posts = data;
	});*/
	
	$scope.login = function(){
		//vacio hasta implementacion de la autenticacion
		$scope.mensaje_error = 'Peticion de login para ' + $scope.usuario.nombreusuario;
		
	};
	
	$scope.registrar = function(){
		//vacio hasta implementacion de la autenticacion
		$scope.mensaje_error = 'Registro solicitado para ' + $scope.usuario.nombreusuario;
	};
});