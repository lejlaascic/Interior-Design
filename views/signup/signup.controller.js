signupModule.controller('signupController',function($scope){
    $scope.users=[];
    $scope.singup=function(user){
        $scope.users.push({
            firstName:$scope.user.firstname,
            lastName:$scope.user.lastname,
            username:$scope.user.username,
            email:$scope.user.email,
            password:$scope.user.password
        })
        console.log($scope.users);

        $scope.user.firstname='';
        $scope.user.lastname='';
        $scope.user.username='';
        $scope.user.email='';
        $scope.user.password='';
    }
 
})