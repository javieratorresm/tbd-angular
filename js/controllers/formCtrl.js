app.controller('formCtrl', function($scope, actorsService){
	$scope.data ={
      'firstName':'',
      'lastName' :''
    };
    $scope.formSubmit = function(){
    	console.log('entre??');
    	 actorsService.postActors($scope.data)
            .success(function(data){
                console.log('lo logre');
            })
            .error(function(error){
                console.log('falle');
            });
        console.log('termine??');
    };

});
