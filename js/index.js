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
.when('/wishlist/:id',{
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
    $scope.currentIndex = 0;
    
    
    $scope.showCarousel = function(index) { 
    
        $scope.currentIndex = index;
    };

})
.controller('homectrl',function(){

})
.controller('aboutctrl',function(){

})
.controller('wishlistctrl',function($scope, $routeParams, $rootScope){
    if (!$rootScope.wishlist) {
        $rootScope.wishlist = [];
    }
    $scope.id = $routeParams.id;

    var item = $scope.products.find(item => item.id == $scope.id);
    if (item) {
        $scope.sp = item;
        if (!$rootScope.wishlist.find(sp => sp.id == item.id)) {
            $rootScope.wishlist.push( $scope.sp);
        }
    } else {
        console.error('Product not found');
    }

    $scope.wishlist = $rootScope.wishlist;
    $scope.delete = function (index) {
        $rootScope.index = index;
        $rootScope.dsST.splice(index, 1);
    };
})
.controller('contactctrl',function(){
    
});