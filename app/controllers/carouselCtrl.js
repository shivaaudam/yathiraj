angular.module('carouselCtrl',['ui.bootstrap'])
.controller("carouselController",function($http, $scope, $location, $rootScope){
	console.log("am in carousel controller");
	$scope.myInterval = 1000;
	$scope.noWrapSlides = false;
  	$scope.active = 0;

  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function(i) {
    //var newWidth = 600 + slides.length + 1;
    //console.log(newWidth);
    var path = "app/assets/images/test"+i+'.jpg';
    console.log(path);
    slides.push({
      image: path,
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  
  for (var i = 0; i < 4; i++) {
    $scope.addSlide(i);
  }









	$scope.myInterval = 1000;
	$scope.noWrapSlides = false;
  	$scope.active = 0;
	// $scope.slides = [
	//     {
	//       image: 'app/assets/images/test1.jpg',
	//       id: 1
	//     },
	//     {
	//       image: 'app/assets/images/test2.jpg',
	//        id: 2
	//     },
	//     {
	//       image: 'app/assets/images/test3.jpg',
	//        id: 3
	//     },
	//     {
	//       image: 'app/assets/images/test4.jpg',
	//        id: 4
	//     },
	//     {
	//       image: 'app/assets/images/test5.jpg',
	//        id: 5
	//     }
	//   ];
});