angular.module('myapp',["ngRoute"])
.run(function($rootScope,$timeout){
$rootScope.$on('$routeChangeStart',function(){
    $rootScope.loading=true;
});
$rootScope.$on('$routeChangeSuccess',function(){
    $timeout(function(){
    $rootScope.loading=false;},100);
});
$rootScope.$on('$routeChangeError',function(){
    $rootScope.loading=false;
    alert('Lỗi không tải được trang');
});
})
.config(function($routeProvider){
$routeProvider
.when('/',{
    templateUrl:'home.html?'+ Math.random(),
    controller:'homectrl'
})
.when('/listproduct',{
    templateUrl:'listproduct.html?'+ Math.random(),
    controller:'listproductctrl'
})
.when('/cart',{
    templateUrl:'cart.html?'+ Math.random(),
    controller:'cartctrl'
})
.when('/wishlist',{
    templateUrl:'wishlist.html?'+ Math.random(),
    controller:'wishlistctrl'
})
.when('/detail/:id',{
    templateUrl:'detail.html?'+ Math.random(),
    controller:'detailctrl'
})
.otherwise({
    template:'<h1>404 - NOT FOUND</h1>',
})
})

.controller('myctrl',function($scope,$http){
    $scope.products=[]  ;
    $http.get('data.json?').
    then(function(res){//thành công
        console.log(res);
        $scope.products=res.data;
    },
    function(res){//thất bại
       alert('Lỗi không tải được dữ liệu');
    });
})    
.controller('listproductctrl',function($scope,$http){
    $scope.products=[]  ;
    $http.get('data.json?').
    then(function(res){//thành công
        console.log(res);
        $scope.products=res.data;
    },
    function(res){//thất bại
       alert('Lỗi không tải được dữ liệu');
    });
  console.log($scope.products);
})    

.controller('detailctrl', function($scope, $routeParams) {

    $scope.id = $routeParams.id;

    var products = $scope.products || [];

    var item = products.find(item => item.id == $scope.id);

    if (item) {
        $scope.item = item;
    } else {
        console.error('Product not found');
    }
})
.controller('homectrl',function(){

})
.controller('aboutctrl',function(){

})
.controller('contactctrl',function(){
    
});