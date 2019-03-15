(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {  
  $scope.lunch = function () {
  	var textMessage;
if ($scope.lunchMenu==undefined) {
	textMessage="Please enter data first"; 
console.log("Please enter data first");
  	}//if empty 
  	else
  	{
  	var menu= $scope.lunchMenu;
  	console.log("menu items:  "+menu);
  	var menuWords=menu.split(',');
    var menuItems=menuWords.length;
  	console.log("total menu items are "+menuItems);
if (menuItems<=3) {
textMessage="Enjoy!";
}//if menu items less then or equal to 3  
if (menuItems>3) {
textMessage="Too much!";
}//if menu items greater then 3
  	}//not empty
$scope.message=textMessage;
  };
}

})();
