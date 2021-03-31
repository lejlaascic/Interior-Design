showecaseModule.controller('showecaseController',function($scope){
    $scope.msg='Interior Designer';
    $scope.galery1=[
        {image: 'https://www.gradnja.rs/wp-content/uploads/2018/09/kijev-enterijer-tamni-tonovi-15-585x372.jpg',description:'Moderan stil, pregršt umetničkih dela, tamne nijanse i barokni detalji.'},
        {image:'https://www.mojenterijer.rs/storage/posts/gallery/2017/Apr/70148/drvo-i-svetlost-stvaraju-idealan-enterijer.jpg',description:'Drvo i svjerlost stvaraju idealan enterijer'},
        {image:'https://img.aviarydecor.com/img/deko-2019/kak-obigrat-kamin-v-interere-5.jpg',description:'Korištenje kreativnih i stvaralačkih, ponekad vrlo smjelih ideja.'}
    ]
    $scope.galery2=[
        {image:'https://idealnidom.com/wp-content/uploads/2020/02/enterijer-od-pocetka-3.jpg',description:'Idealan dizajn'},
        {image:'https://dupqmgrdwnev6.cloudfront.net/wp-content/uploads/2020/09/Mali-stan-s-galerijom-4-930x697.jpg',description:'Korištenje kontrastne akcente.'},
        {image:'https://idealnidom.com/wp-content/uploads/2020/02/enterijer-od-pocetka-1.jpg',description:'Praktičnost i funkcionalnost.'}
    ]
    $scope.galeryVisible=true
    $scope.closeImage=function () {
        $scope.showImage=false;
        $scope.galeryVisible=true
    }
   
    $scope.openImage=function(img){
    $scope.modelimg=img;
    $scope.showImage=true;
    $scope.galeryVisible=false;
   }
})