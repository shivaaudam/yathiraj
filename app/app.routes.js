angular.module('app.routes',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('home',{
			url :'/',
			views:{
				'carousel':{
					templateUrl:'app/views/pages/carousel.html'
				}
			}
			
		})
		// .when('/about',{
		// 	templateUrl:'app/views/pages/about.html',
		// 	controller:'mainController',
		// 	controllerAs:'login'
		// })
		// .when('/rates',{
		// 	templateUrl:'app/views/pages/rates.html',
		// 	controller:'mainController',
		// 	controllerAs:'login'
		// })
		// .when('/contact',{
		// 	templateUrl:'app/views/pages/contact.html',
		// 	controller:'mainController',
		// 	controllerAs:'login'
		// })
		// .when('/signin',{
		// 	templateUrl:'app/views/pages/signin.html',
		// 	controller:'loginController',
		// 	controllerAs:'login'
		// })
		// .when('/signup',{
		// 	templateUrl:'app/views/pages/signup.html',
		// 	controller:'registerController',
		// 	controllerAs:'register'
		// })
		// .when('/profile',{
		// 	templateUrl:'app/views/pages/profile.html',
		// 	controller:'profileController',
		// 	controllerAs:'profile'
		// })	
		// .when('/moreinfo',{
		// 	templateUrl:'app/views/pages/moreinfo.html',
		// 	controller:'mainController',
		// 	controllerAs:'main'
		// })
		// .when('/appointment',{
		// 	templateUrl:'app/views/pages/appointment.html',
		// 	controller:'appointmentController',
		// 	controllerAs:'appointment'
		// })

		//$locationProvider.html5Mode(true);
	});