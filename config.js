app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl: 'views/home/home.html',
        controller: 'homeController'
    })
    .when('/showecase',{
        templateUrl: 'views/showecase/showecase.html',
        controller: 'showecaseController'
    })
    .when('/designer',{
        templateUrl: 'views/designers/designer.html',
        controller: 'designerController'
    })
    .when('/packages',{
        templateUrl: 'views/packages/packages.html',
        controller: 'packagesController'
    })
    .when('/contact',{
        templateUrl: 'views/contact/contact.html',
        controller: 'contactController'
    })
    .when('/contact-success',{
        templateUrl: 'views/contact-success/contact-success.html',
        controller: 'contactController'
    })
    .when('/signup',{
        templateUrl: 'views/signup/signup.html',
        controller: 'signupController'
    })
    .when('/login',{
        templateUrl: 'views/login/login.html',
        controller: 'loginController'
    })
    .otherwise({
        templateUrl:'views/home/home.html'
    })
}])