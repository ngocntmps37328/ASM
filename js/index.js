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

.controller('myctrl',function($scope){
    $scope.products = [
        {
            id: 1,
            name: "Áo Thun Cổ Thuyền",
            sex : "Nữ",
            price: 244.000,
            size: "XXL",
            img :"https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=750",
            images: [
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=750"
                }
            ],
            colors: [
                {
                    color: "Color 1",
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_50_468584_chip.jpg",
                },
                {
                    color: "Color 2",
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_36_468584_chip.jpg",
                },
                {
                    color: "Color 3",
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_09_468584_chip.jpg",
                },
                {
                    color: "Color 4",
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_00_468584_chip.jpg",
                },
                {
                    color: "Color 5",
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_73_468584_chip.jpg",
                },
                
           ], 
        },
        {
            id: 2,
            name: "Áo Thun Sọc Ngựa Vằn",
            sex : "Nữ",
            price: 244.000,
            size: "XXL",
            img :"https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467363/item/vngoods_69_467363.jpg?width=750",
            images: [
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=750"
                },
                {
                    thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=60",
                    large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=750"
                }
            ],
            colors: [
                {
                    color: "Color 1",
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467363/chip/goods_01_467363_chip.jpg",
                },
                {
                    color: "Color 2",
                    thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467363/chip/goods_69_467363_chip.jpg",
                }
        ], 
       },
       {
        id: 3,
        name: "Áo Ba Lỗ Vải Gân",
        sex : "Nữ",
        price: 244.000,
        size: "XXL",
        img :"https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465763/item/vngoods_03_465763.jpg?width=320",
        images: [
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=750"
            }
        ],
        colors: [
            {
                color: "Color 1",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_50_468584_chip.jpg",
            },
            {
                color: "Color 2",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_36_468584_chip.jpg",
            },
            {
                color: "Color 3",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_09_468584_chip.jpg",
            },
            {
                color: "Color 4",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_00_468584_chip.jpg",
            },
            {
                color: "Color 5",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_73_468584_chip.jpg",
            },
            
       ], 
       },
       {
        id: 4,
        name: "Áo Polo AIRism Cotton ",
        sex : "Nữ",
        price: 489.000,
        size: "XXL",
        img :"https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465601/item/vngoods_01_465601.jpg?width=320",
        images: [
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=750"
            }
        ],
        colors: [
            {
                color: "Color 1",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_50_468584_chip.jpg",
            },
            {
                color: "Color 2",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_36_468584_chip.jpg",
            },
            {
                color: "Color 3",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_09_468584_chip.jpg",
            },
            {
                color: "Color 4",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_00_468584_chip.jpg",
            },
            {
                color: "Color 5",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_73_468584_chip.jpg",
            },
            
       ], 
       },
       {
        id: 5,
        name: "Áo Thun Mini Ngắn Tay",
        sex : "Nữ",
        price: 244.000,
        size: "XXL",
        img :"https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465760/item/vngoods_00_465760.jpg?width=320",
        images: [
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=750"
            }
        ],
        colors: [
            {
                color: "Color 1",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_50_468584_chip.jpg",
            },
            {
                color: "Color 2",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_36_468584_chip.jpg",
            },
            {
                color: "Color 3",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_09_468584_chip.jpg",
            },
            {
                color: "Color 4",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_00_468584_chip.jpg",
            },
            {
                color: "Color 5",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_73_468584_chip.jpg",
            },
            
       ], 
       },
       {
        id: 6,
        name: "Áo Thun Mini Ngắn Tay",
        sex : "Nữ",
        price: 293.000,
        size: "XXL",
        img :"https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467212/item/vngoods_11_467212.jpg?width=320",
        images: [
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=750"
            }
        ],
        colors: [
            {
                color: "Color 1",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_50_468584_chip.jpg",
            },
            {
                color: "Color 2",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_36_468584_chip.jpg",
            },
            {
                color: "Color 3",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_09_468584_chip.jpg",
            },
            {
                color: "Color 4",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_00_468584_chip.jpg",
            },
            {
                color: "Color 5",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_73_468584_chip.jpg",
            },
            
       ], 
       },
       {
        id: 7,
        name: "AIRism Áo Thun Lửng",
        sex : "Nữ",
        price: 293.000,
        size: "XXL",
        img :"https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465762/item/vngoods_30_465762.jpg?width=320",
        images: [
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/item/vngoods_61_468625.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub11.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub13.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub14.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468625/sub/goods_468625_sub23.jpg?width=750"
            },
            {
                thumb: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=60",
                large: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468625/sub/vngoods_468625_sub28.jpg?width=750"
            }
        ],
        colors: [
            {
                color: "Color 1",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_50_468584_chip.jpg",
            },
            {
                color: "Color 2",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_36_468584_chip.jpg",
            },
            {
                color: "Color 3",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_09_468584_chip.jpg",
            },
            {
                color: "Color 4",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_00_468584_chip.jpg",
            },
            {
                color: "Color 5",
                thumb: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/468584/chip/goods_73_468584_chip.jpg",
            },
            
       ], 
       },
]
})    

.controller('detailctrl', function($scope, $routeParams) {
    $scope.id = $routeParams.id;

    var dsSP = $scope.$parent.dsSP || [];

    var sp = dsSP.find(sp => sp.id == $scope.id);

    if (sp) {
        $scope.sp = sp;
    } else {
        console.error('Product not found');
    }

    // for(let i=0;i<$scope.dsSP.length;i++){
    //     if($scope.dsSP[i].id==$scope.id){
    //         $scope.sp=$scope.dsSP[i];
    //     }   
    // }
})
.controller('homectrl',function($scope){

})
.controller('aboutctrl',function($scope){
   
})
.controller('contactctrl',function($scope){
    
});