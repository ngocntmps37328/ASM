angular.module('myapp', ["ngRoute"])
    .run(function ($rootScope, $timeout) {
        $rootScope.$on('$routeChangeStart', function () {
            $rootScope.loading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function () {
            $timeout(function () {
                $rootScope.loading = false;
            }, 1000);
        });
        $rootScope.$on('$routeChangeError', function () {
            $rootScope.loading = false;
            alert('Lỗi không tải được trang');
        });
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html?' + Math.random(),
                controller: 'homectrl'
            })
            .when('/listproduct', {
                templateUrl: 'listproduct.html?' + Math.random(),
                controller: 'listproductctrl'
            })
            .when("/wishlist", {
                templateUrl: "wishlist.html?" + Math.random(),
                controller: "wishlistAllctrl",
            })
            .when('/cart', {
                templateUrl: 'cart.html?' + Math.random(),
                controller: "cartctrl",
            })
            .when('/wishlist/:id', {
                templateUrl: 'wishlist.html?' + Math.random(),
                controller: 'wishlistctrl'
            })
            .when('/detail/:id', {
                templateUrl: 'detail.html?' + Math.random(),
                controller: 'detailctrl'
            })
            .when('/signin', {
                templateUrl: 'signin.html?' + Math.random(),
                controller: 'signin'
            })
            .otherwise({
                template: '<h1>404 - NOT FOUND</h1>',
            })
    })

    .controller('myctrl', function ($scope, $http, $rootScope) {
        $rootScope.products = [];
        $http.get('data.json?').then(function (res) {//thành công
                console.log(res);
                $rootScope.products = res.data;
            },
            function (res) {//thất bại
                alert('Lỗi không tải được dữ liệu');
            });

    })
    .filter('searchProduct', function () {
        return function (input, keyword, attr) {
            if (!keyword) {
                return input;
            }
            var output = [];
            for (var i = 0; i < input.length; i++) {
                for (j = 0; j < attr.length; j++) {
                    if (input[i][attr[j]].toString().toLowerCase().indexOf(keyword.toLowerCase()) >= 0) {
                        output.push(input[i]);
                        break;
                    }
                }
            }
            return output;
        }
    })

    .controller('listproductctrl', function ($scope, $http, $rootScope) {
        $scope.products = [];
        $http.get('data.json').then(function (res) {
            $scope.products = res.data;
        }, function (res) {
            alert('Lỗi không tải được dữ liệu');
        });
        $scope.wishlist = $rootScope.wishlist;
        $scope.isInWishlist = function (id) {
            if ($scope.wishlist) {
                return $scope.wishlist.find(item => item.id == id);
            }
            return false;
        };
        $scope.minPrice = 0;
        $scope.maxPrice = Infinity;
        $scope.filterByPrice = function (min, max) {
            $scope.minPrice = min;
            $scope.maxPrice = max;
            $scope.selectedPriceRange = {min: min, max: max};
        };
    })
    .filter('filterPrice', function () {
        return function (input, min, max) {
            var output = [];
            for (var i = 0; i < input.length; i++) {
                if (input[i].price >= min && input[i].price <= max) {
                    output.push(input[i]);
                }
            }
            return output;
        }
    })
    .controller('detailctrl', function ($scope, $routeParams, $rootScope) {

        $scope.id = $routeParams.id;
        $rootScope.selectedQuantity = 1;
        var products = $scope.products || [];

        var item = products.find((item) => item.id == $scope.id);

        if (item) {
            $scope.item = item;
        } else {
            console.error("Product not found");
        }
        $scope.currentIndex = 0;


        $scope.showCarousel = function (index) {

            $scope.currentIndex = index;
        };
        $scope.colorindex = 0;
        $scope.changeColorname = function (index) {
            $scope.colorindex = index;

        }
    })
    .controller('cartctrl', function () {

    })
    .controller('modalCtrl', function ($scope, $rootScope, $routeParams) {
        $scope.id = $routeParams.id;
        if (!$rootScope.cart) {
            $rootScope.cart = [];
        }
        $scope.cart = $rootScope.cart;

        if (!$rootScope.products) {
            $rootScope.products = []; // Khởi tạo mảng products nếu chưa có
        }
        $scope.products = $rootScope.products;

        // Initialize selected quantity
        $scope.selectedQuantity = 1;

        // Find the product by ID
        var item = $scope.products.find(item => item.id == $scope.id);
        if (item) {
            $scope.cartItem = item;
            $scope.cartItem.quantity = $scope.selectedQuantity;
            // Check if the product is already in the cart
            if (!$rootScope.cart.find(cartItem => cartItem.id == item.id)) {
                $rootScope.cart.push($scope.cartItem);
            }
        } else {
            console.error('Product not found');
        }
        // Function to decrement quantity
        $scope.decrementQuantity = function (cartItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
            }
        };

        // Function to increment quantity
        $scope.incrementQuantity = function (cartItem) {
            cartItem.quantity++;
        };
        // Function to update quantity
        $scope.updateQuantity = function (cartItem) {
            cartItem.quantity = $scope.selectedQuantity;
        };
        // Function to delete an item from the cart
        $scope.delete = function (index, event) {
            if (event) {
                event.preventDefault(); // Prevent the default action
                event.stopPropagation(); // Stop the event from bubbling up
            }

            $rootScope.cart.splice(index, 1);
        };

        $scope.getTotalPrice = function () {
            var total = 0;
            for (var i = 0; i < $scope.cart.length; i++) {
                total += $scope.cart[i].price * $scope.cart[i].quantity;
            }
            return total;
        };
        console.log("cart", $scope.cart);
    })
    .controller('homectrl', function () {

    })
    .controller('aboutctrl', function () {

    })


    .controller('wishlistctrl', function ($scope, $routeParams, $rootScope) {
        if (!$rootScope.wishlist) {
            $rootScope.wishlist = [];
        }
        $scope.wishlist = $rootScope.wishlist;
        $scope.id = $routeParams.id;

        // Ensure products array exists
        if (!$scope.products) {
            $scope.products = [];
        }

        // Find the product by ID
        var item = $scope.products.find(item => item.id == $scope.id);
        if (item) {
            $scope.sp = item;
            // Check if the product is already in the wishlist
            if (!$rootScope.wishlist.find(sp => sp.id == item.id)) {
                $rootScope.wishlist.push($scope.sp);
            }
        } else {
            console.error('Product not found');
        }

        // Function to delete an item from the wishlist
        $scope.delete = function (index, event) {
            if (event) {
                event.preventDefault(); // Prevent the default action
                event.stopPropagation(); // Stop the event from bubbling up
            }

            $rootScope.wishlist.splice(index, 1);
            console.log("wishlist", $scope.wishlist);

            if ($rootScope.wishlist.length == 0) {
                document.querySelector('.container .row').innerHTML = "Không có sản phẩm nào trong danh sách yêu thích";
            }
        };
        console.log("wishlist", $scope.wishlist);
    })


    .controller("wishlistAllctrl", function ($scope, $rootScope) {
        $scope.wishlist = $rootScope.wishlist;

        if ($scope.wishlist.length == 0) {
            document.querySelector('.container .row').innerHTML = "Không có sản phẩm nào trong danh sách yêu thích";
        }
        $scope.delete = function (index, event) {
            if (event) {
                event.preventDefault(); // Prevent the default action
                event.stopPropagation(); // Stop the event from bubbling up
            }

            $rootScope.wishlist.splice(index, 1);
            console.log("wishlist", $scope.wishlist);

            if ($rootScope.wishlist.length == 0) {
                document.querySelector('.container .row').innerHTML = "Không có sản phẩm nào trong danh sách yêu thích";
            }
        };
        console.log($scope.wishlist);
    })


    .controller('signin', function ($scope, $rootScope, $http) {
        $scope.email = "";
        $scope.password = "";
        $scope.signin = function() {
                console.log($scope.email);  // Kiểm tra giá trị của email
                console.log($scope.password);  // Kiểm tra giá trị của password

                $http.get('user.json').then(function (res) {
                    const users = res.data;
                    console.log(users);
                    const user = users.find(u => u.email === $scope.email && u.password === $scope.password);

                    if (user) {
                        alert("Đăng nhập thành công");
                        $rootScope.isLogged = true;
                        window.location.href = "#/";
                    } else {
                        alert("Sai tên đăng nhập hoặc mật khẩu");
                    }
                }, function (res) {
                    alert('Lỗi không tải được dữ liệu');
                });
        };
    })


    .controller('contactctrl', function () {

    });