contactModule.controller('contactController',function($scope,$location){
    $scope.user='';
    $scope.email='';
    $scope.sendMessage=function(){
        $location.path('contact-success')
    }
})