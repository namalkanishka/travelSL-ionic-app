// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.controller('MapController', function($scope, $ionicLoading) {
	console.log("In map controller");
	
		console.log("In map view");
		
        var myLatlng = new google.maps.LatLng(7.8731, 80.7718);
        var colombo=new google.maps.LatLng(6.927079,79.861243); 
        var galleface=new google.maps.LatLng(6.9201,79.8464);
        var gangaramaya=new google.maps.LatLng(6.9166,79.8565);
        var national_museum=new google.maps.LatLng(6.9166,79.8565);
        var vihara=new google.maps.LatLng(6.9119,79.8617);
        var zoo=new google.maps.LatLng(6.855942, 79.873129);
        var mountlavenia=new google.maps.LatLng(6.832751, 79.861926);
        

 
 
        var mapOptions = {
            center: colombo,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        console.log(map);
		
		// darw circle
		var myCity1 = new google.maps.Circle({
				center:colombo,
				radius:1000,
				strokeColor:"#00000F",
				strokeOpacity:0.8,
				strokeWeight:2,
				fillColor:"rgba(17, 193, 243, 0.35);",
				fillOpacity:0.4
				});
				myCity1.setMap(map);
		
		
        //set a marker
		var marker=new google.maps.Marker({
			position:colombo,
		});
        var marker1=new google.maps.Marker({
            position:galleface,
        });
        var marker2=new google.maps.Marker({
            position:gangaramaya,
        });
        var marker3=new google.maps.Marker({
            position:national_museum,
        });
         var marker4=new google.maps.Marker({
            position:vihara,
        });

        var marker5=new google.maps.Marker({
            position:zoo,
        });
        var marker6=new google.maps.Marker({
            position:mountlavenia,
        });


        //draw markres
        marker2.setMap(map);
        marker1.setMap(map);
        marker.setMap(map);
        marker3.setMap(map);
        marker4.setMap(map);
        marker5.setMap(map);
        marker6.setMap(map);



        //info window
        var infowindoww = new google.maps.InfoWindow({
        content:"galleface!"
        });
		marker1.setMap(map);
		//set a info window
		var infowindow = new google.maps.InfoWindow({
		content:"capital of srilanka!"
		});

        var infowindow1= new google.maps.InfoWindow({
        content:"galleface!"
        });

        var infowindow2 = new google.maps.InfoWindow({
        content:"national museum"
        });
        var infowindow3 = new google.maps.InfoWindow({
        content:"gangarama temple"
        });
        var infowindow4 = new google.maps.InfoWindow({
        content:"viharamahadevi park"
        });
        var infowindow5 = new google.maps.InfoWindow({
        content:"Dehiwala zoo"
        });
        var infowindow6 = new google.maps.InfoWindow({
        content:"Mount lavenia beach"
        });


		
		google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
		});
        google.maps.event.addListener(marker1, 'click', function() {
        infowindoww.open(map,marker1);
        });

        google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map,marker1);
        });

        google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map,marker2);
        });
        google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map,marker3);
        });
        google.maps.event.addListener(marker4, 'click', function() {
        infowindow4.open(map,marker4);
        });
        google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map,marker5);
        });
        google.maps.event.addListener(marker6, 'click', function() {
        infowindow6.open(map,marker6);
        });

        //emergency map




		
		
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                
                map: map,
                title: "myLocation1"
				});
			
			});
		
		
		$scope.map = map; 
})




.controller('MapController2', function($scope, $ionicLoading) {
    console.log("In map controller2");
    
        console.log("In map view");
        
        var myLatlng = new google.maps.LatLng(7.8731, 80.7718);
        var colombo = new google.maps.LatLng(6.931730,79.854541)
        var maradana=new google.maps.LatLng(6.9279,79.8655); 
        var slave_island=new google.maps.LatLng(6.9271672,79.848756);
        var kotahena=new google.maps.LatLng(6.9488135,79.8588204);
        var bambalapitiya=new google.maps.LatLng(6.8948,79.8561);
        var cinnamon_gardens=new google.maps.LatLng(6.9067218,79.8635459);
        var kollupitiya=new google.maps.LatLng(6.8813,79.856);
        var wellawatte=new google.maps.LatLng(6.8739, 79.8614);
        var kirulopone=new google.maps.LatLng(6.893948, 79.859844);
        var narahenpita=new google.maps.LatLng(6.926565, 79.853461);
        var piliyandala=new google.maps.LatLng(6.794976, 79.904173);
        var borella=new google.maps.LatLng(6.915027, 79.9878727);
        var matara=new google.maps.LatLng(5.944842, 80.555663);
        var dikwella=new google.maps.LatLng(5.964062, 80.694312);
        var thihagoda=new google.maps.LatLng(6.013038, 80.567733);
        var hakmana=new google.maps.LatLng(6.084628, 80.643264);
        var akuressa=new google.maps.LatLng(6.098745, 80.477563);
        var deniyaya=new google.maps.LatLng(6.341333, 80.558935);
        var hikkaduwa=new google.maps.LatLng(6.144624, 80.099612);
        var galle=new google.maps.LatLng(6.032872, 80.217327);
        var elpitiya=new google.maps.LatLng(6.279240, 80.143441);
        var bentota=new google.maps.LatLng(6.422254, 79.997805);
        var tangalle=new google.maps.LatLng(6.023975, 80.798156);
        var hambantota=new google.maps.LatLng(6.125904, 81.125800);
        
        
 
 
        var mapOptions = {
            center: colombo,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        console.log(map);
        
        // draw circle
        
        var myCity1 = new google.maps.Circle({
        center:colombo,
        radius:1000,
        strokeColor:"#00000F",
        strokeOpacity:0.8,
        strokeWeight:2,
        fillColor:"rgba(17, 193, 243, 0.35);",
        fillOpacity:0.4
        });
        myCity1.setMap(map);

        //Create a marker
        var marker=new google.maps.Marker({
            position:maradana,
        });
        var marker1=new google.maps.Marker({
            position:slave_island,
        });
        var marker2=new google.maps.Marker({
            position:kotahena,
        });
        var marker3=new google.maps.Marker({
            position:bambalapitiya,
        });
        var marker4=new google.maps.Marker({
            position:cinnamon_gardens,
        });
        var marker5=new google.maps.Marker({
            position:kollupitiya,
        });
        var marker6=new google.maps.Marker({
            position:wellawatte,
        });
        var marker7=new google.maps.Marker({
            position:kirulopone,
        });
        var marker8=new google.maps.Marker({
            position:narahenpita,
        });
        var marker9=new google.maps.Marker({
            position:piliyandala,
        });
        var marker10=new google.maps.Marker({
            position:borella,
        });
        var marker11=new google.maps.Marker({
            position:matara,
        });
        var marker12=new google.maps.Marker({
            position:dikwella,
        });
        var marker13=new google.maps.Marker({
            position:thihagoda,
        });
        var marker14=new google.maps.Marker({
            position:hakmana,
        });
        var marker15=new google.maps.Marker({
            position:akuressa,
        });
        var marker16=new google.maps.Marker({
            position:deniyaya,
        });
        var marker17=new google.maps.Marker({
            position:hikkaduwa,
        });
        var marker18=new google.maps.Marker({
            position:galle,
        });
        var marker19=new google.maps.Marker({
            position:elpitiya,
        });
        var marker20=new google.maps.Marker({
            position:bentota,
        });
        var marker21=new google.maps.Marker({
            position:tangalle,
        });
        var marker22=new google.maps.Marker({
            position:hambantota,
        });


        //Place marker on map
        marker.setMap(map);
        marker1.setMap(map);
        marker2.setMap(map);
        marker3.setMap(map);
        marker4.setMap(map);
        marker5.setMap(map);
        marker6.setMap(map);
        marker7.setMap(map);
        marker8.setMap(map);
        marker9.setMap(map);
        marker10.setMap(map);
        marker11.setMap(map);
        marker12.setMap(map);
        marker13.setMap(map);
        marker14.setMap(map);
        marker15.setMap(map);
        marker16.setMap(map);
        marker17.setMap(map);
        marker18.setMap(map);
        marker19.setMap(map);
        marker20.setMap(map);
        marker21.setMap(map);
        marker22.setMap(map);


        //set a info window
        var infowindow = new google.maps.InfoWindow({
        content:"Maradana Police Station\n0112-692748"
        });
        var infowindow1 = new google.maps.InfoWindow({
        content:"Slave Island Police Station\n0112-433744"
        });
        var infowindow2 = new google.maps.InfoWindow({
        content:"Kotahena Police Station\n0112-431861"
        });
        var infowindow3 = new google.maps.InfoWindow({
        content:"Bambalapitiya Police Station\n0112-588680"
        });
        var infowindow4 = new google.maps.InfoWindow({
        content:"Cinnamon Gardens Police Station\n0112-695411"
        });
        var infowindow5 = new google.maps.InfoWindow({
        content:"Kollupitiya Police Station\n0112-323689"
        });
        var infowindow6 = new google.maps.InfoWindow({
        content:"Wellawatte Police Station\n0112-588212"
        });
        var infowindow7 = new google.maps.InfoWindow({
        content:"Kirulopone Police Station\n0112-512676"
        });
        var infowindow8 = new google.maps.InfoWindow({
        content:"Narahenpita Police Station\n0112-368242"
        });
        var infowindow9 = new google.maps.InfoWindow({
        content:"Piliyandala Police Station\n0112-911222"
        });
        var infowindow10 = new google.maps.InfoWindow({
        content:"Borella Police Station\n0112-683937"
        });
        var infowindow11 = new google.maps.InfoWindow({
        content:"Matara Police Station\n041-2222223"
        });
        var infowindow12 = new google.maps.InfoWindow({
        content:"Dikwella Police Station\n041-2255222"
        });
        var infowindow13 = new google.maps.InfoWindow({
        content:"Thihagoda Police Station\n041-2245222"
        });
        var infowindow14 = new google.maps.InfoWindow({
        content:"Hakmana Police Station\n041-2286222"
        });
        var infowindow15 = new google.maps.InfoWindow({
        content:"Akuressa Police Station\n041-2283222"
        });
        var infowindow16 = new google.maps.InfoWindow({
        content:"Deniyaya Police Station\n041-2273222"
        });
        var infowindow17 = new google.maps.InfoWindow({
        content:"Hikkaduwa Police Station\n091-2277222"
        });
        var infowindow18 = new google.maps.InfoWindow({
        content:"Galle Police Station\n091-2234122"
        });
        var infowindow19 = new google.maps.InfoWindow({
        content:"Elpitiya Police Station\n091-2291222"
        });
        var infowindow20 = new google.maps.InfoWindow({
        content:"Bentota Police Station\n034-2275022"
        });
        var infowindow21 = new google.maps.InfoWindow({
        content:"Tangalle Police Station\n047-2240222"
        });
        var infowindow22 = new google.maps.InfoWindow({
        content:"Hambantota Police Station\n047-2220222"
        });

        

        //To show content on click
        
        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
        });
        google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map,marker1);
        });
        google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map,marker2);
        });
        google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map,marker3);
        });
        google.maps.event.addListener(marker4, 'click', function() {
        infowindow4.open(map,marker4);
        });
        google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map,marker5);
        });
        google.maps.event.addListener(marker6, 'click', function() {
        infowindow6.open(map,marker6);
        });
        google.maps.event.addListener(marker7, 'click', function() {
        infowindow7.open(map,marker7);
        });
        google.maps.event.addListener(marker8, 'click', function() {
        infowindow8.open(map,marker8);
        });
        google.maps.event.addListener(marker9, 'click', function() {
        infowindow9.open(map,marker9);
        });
        google.maps.event.addListener(marker10, 'click', function() {
        infowindow10.open(map,marker10);
        });
        google.maps.event.addListener(marker11, 'click', function() {
        infowindow11.open(map,marker11);
        });
        google.maps.event.addListener(marker12, 'click', function() {
        infowindow12.open(map,marker12);
        });
        google.maps.event.addListener(marker13, 'click', function() {
        infowindow13.open(map,marker13);
        });
        google.maps.event.addListener(marker14, 'click', function() {
        infowindow14.open(map,marker14);
        });
        google.maps.event.addListener(marker15, 'click', function() {
        infowindow15.open(map,marker15);
        });
        google.maps.event.addListener(marker16, 'click', function() {
        infowindow16.open(map,marker16);
        });
        google.maps.event.addListener(marker17, 'click', function() {
        infowindow17.open(map,marker17);
        });
        google.maps.event.addListener(marker18, 'click', function() {
        infowindow18.open(map,marker18);
        });
        google.maps.event.addListener(marker19, 'click', function() {
        infowindow19.open(map,marker19);
        });
        google.maps.event.addListener(marker20, 'click', function() {
        infowindow20.open(map,marker20);
        });
        google.maps.event.addListener(marker21, 'click', function() {
        infowindow21.open(map,marker21);
        });
        google.maps.event.addListener(marker22, 'click', function() {
        infowindow22.open(map,marker22);
        });
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                
                map: map,
                title: "myLocation"
                });
            
            });
        
        
        $scope.map = map; 
})






.controller('customersCtrl', function($scope, $http) {
$http.get("http://travelsl.esy.es/query.php")
.success(function (response) {$scope.names = response.records;});
})


.controller('nearbyloCtrl', function($scope, $http) {
$http.get("http://travelsl.esy.es/gpPHP/user_wish_view.php")
.success(function (response) {$scope.names = response.records;});
$scope.showMe = false;
    $scope.myFunc = function() {
    $scope.showMe = !$scope.showMe;
    }
})







.controller('user_account', function($scope) {

    
    $scope.wishlist_show = false;
    $scope.complete_show = false;
    $scope.plans_show = false;
    $scope.myFunc1 = function() {
    $scope.complete_show = false;
    $scope.plans_show = false;
    $scope.wishlist_show = !$scope.wishlist_show;
    }
    $scope.myFunc2= function(){
    $scope.wishlist_show = false;
    $scope.plans_show = false;
    $scope.complete_show = !$scope.complete_show;
    }
    $scope.myFunc3= function(){
    $scope.wishlist_show = false;
    $scope.complete_show= false;
    $scope.plans_show = !$scope.plans_show;
    }

})




.controller('user_account_add_wlist', function($scope) {

    $scope.wishlist_add = false;
    
    $scope.myFunc4 = function() {
    
    $scope.wishlist_add = !$scope.wishlist_add;
    }
    
})



.controller('user_account_add_plan', function($scope) {

    $scope.plan_add = false;
    
    $scope.myFuncp = function() {
    
    $scope.plan_add = !$scope.plan_add;
    }
    
})




.controller('wishlistCtrl', function($scope, $http) {
$http.get("http://travelsl.esy.es/gpPHP/user_wish_view.php")
.success(function (response) {$scope.names = response.records;});
$scope.showMe = false;
    $scope.myFunc = function() {
    $scope.showMe = !$scope.showMe;
    }
})

.controller('addwishlistCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/addwishlist.php';

        $http.post(link, {placename : $scope.data.placename}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };
    
    
    
})

.controller('compviewCtrl', function($scope, $http) {
$http.get("http://travelsl.esy.es/gpPHP/user_complete_view.php")
.success(function (response) {$scope.names = response.records;});
$scope.showMe = false;
    $scope.myFunc = function() {
    $scope.showMe = !$scope.showMe;
    }
})

.controller('planviewCtrl', function($scope, $http) {
$http.get("http://travelsl.esy.es/gpPHP/user_plan_view.php")
.success(function (response) {$scope.names = response.records;});
$scope.showMe = false;
    $scope.myFunc = function() {
    $scope.showMe = !$scope.showMe;
    }
})



.controller('AppCtrl', function($scope, $http, $state) {
    $scope.data = {};
	console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/api.php';

        $http.post(link, {username : $scope.data.username}).then(function (res){
			console.log("deta return from server");
            
            $scope.response = res.data.records;
            console.log(res.data.records);
        });
        $scope.showMe = false;
    };
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})


.controller('AppPOPCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in appPOPcntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipop.php';
    $http.post(link).then(function (res){
    console.log("deta return from server");
            
    $scope.responsepop = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})


.controller('POPcliCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in POPclicntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipopcate.php';
    var cate="Climate";
    $http.post(link, {category:cate}).then(function (res){
    console.log("deta return from server");
            
    $scope.responsecli = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})



.controller('TestCtrl', function($scope, $stateParams, $http) {

    console.log("In test ctrl", $stateParams.name);
    $scope.na = $stateParams;
    console.log($scope.na.name);
    var name1=$scope.na.name;
    var link = 'http://travelsl.esy.es/gpPHP/search.php';
    $http.post(link, {username : name1 }).then(function (res){
            console.log("deta return from server to test controller");
            $scope.response = res.data.records;
            console.log($scope.response);
    });
    var link2='http://travelsl.esy.es/gpPHP/getcomment.php';
    $http.post(link2, {username : name1 }).then(function (res){
            console.log("deta return from server to test controller comments");
            $scope.response1 = res.data.records;
            console.log($scope.response1);
    });


})








.controller('searchCtrl', function($scope, $http) {
    $scope.data = {};
	console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/search.php';

        $http.post(link, {username : $scope.data.username}).then(function (res){
			console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
		$scope.myFunc = function() {
		$scope.showMe = !$scope.showMe;
    }
    };
    
    
    
})



.controller('hotelsearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/searchcate.php';
        var cate ="Hotels";
        $http.post(link, {username : $scope.data.username,category:cate}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };
})

.controller('POPhotelCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in POPclicntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipopcate.php';
    var cate="Hotels";
    $http.post(link, {category:cate}).then(function (res){
    console.log("deta return from server");
            
    $scope.responsecli = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})


.controller('climatesearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/searchcate.php';
        var cate ="Climate";
        $http.post(link, {username : $scope.data.username,category:cate}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };   
})


.controller('foodsearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/search.php';

        $http.post(link, {username : $scope.data.username}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };   
})

.controller('watersearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/searchcate.php';
        var cate ="Waterfall hunting";
        $http.post(link, {username : $scope.data.username,category:cate}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };   
})

.controller('POPwatCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in POPclicntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipopcate.php';
    var cate="Waterfall hunting";
    $http.post(link, {category:cate}).then(function (res){
    console.log("deta return from server");
            
    $scope.responsecli = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})


.controller('advensearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/searchcate.php';
        var cate ="Adventure";
        $http.post(link, {username : $scope.data.username,category:cate}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };   
})

.controller('POPadvCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in POPclicntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipopcate.php';
    var cate="Adventure";
    $http.post(link, {category:cate}).then(function (res){
    console.log("deta return from server");
            
    $scope.responsecli = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})


.controller('campingsearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/searchcate.php';
        var cate ="Camping";
        $http.post(link, {username : $scope.data.username,category:cate}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };   
})

.controller('POPcamCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in POPclicntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipopcate.php';
    var cate="Camping";
    $http.post(link, {category:cate}).then(function (res){
    console.log("deta return from server");
            
    $scope.responsecli = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})


.controller('citysearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/searchcate.php';
        var cate ="Cities";
        $http.post(link, {username : $scope.data.username,category:cate}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };   
})


.controller('POPcityCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in POPclicntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipopcate.php';
    var cate="Cities";
    $http.post(link, {category:cate}).then(function (res){
    console.log("deta return from server");
            
    $scope.responsecli = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})




.controller('hissearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/searchcate.php';
        var cate="Historical";
        $http.post(link, {username : $scope.data.username,category:cate}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };   
})


.controller('POPhisCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in POPclicntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipopcate.php';
    var cate="Historical";
    $http.post(link, {category:cate}).then(function (res){
    console.log("deta return from server");
            
    $scope.responsecli = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})

.controller('beachsearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/searchcate.php';
        var cate = "Beaches";
        $http.post(link, {username : $scope.data.username,category:cate}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };   
})

.controller('POPbeCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in POPclicntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipopcate.php';
    var cate="Beaches";
    $http.post(link, {category:cate}).then(function (res){
    console.log("deta return from server");
            
    $scope.responsecli = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})


.controller('sighsearchCtrl', function($scope, $http) {
    $scope.data = {};
    console.log("in appcntrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/search.php';
        var cate="Sightseeing";
        $http.post(link, {username : $scope.data.username,category:cate}).then(function (res){
            console.log("deta return from server");
            $scope.response = res.data.records;
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };   
})

.controller('POPsighCtrl', function($scope, $http, $state) {
    $scope.data = {};
    console.log("in POPclicntrl");
    var link = 'http://travelsl.esy.es/gpPHP/apipopcate.php';
    var cate="Sightseeing";
    $http.post(link, {category:cate}).then(function (res){
    console.log("deta return from server");
            
    $scope.responsecli = res.data.records;
    console.log(res.data.records);
    });
    $scope.showMe = false;
    
    
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.navigate = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };
     $scope.navigate1 = function(name) {
        console.log(name);

        $state.go('tabsController.test', {name: name})
    };  
})




.controller('addwiCtrl', function($scope, $http, $ionicPopup) {
    
    $scope.data = {};
    console.log("in addwtrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/awlist.php';
        var name="namal";
        $http.post(link, {placename : $scope.data.placename,username: name}).then(function (res){
            console.log("deta return from server");
            
            $scope.response = res.data.records;
            if ($scope.response){
                var alertPopup = $ionicPopup.alert({
                title: 'Added to wish list ',
                template: 'place added to your wish list'

            });

            }
            console.log( $scope.response);
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };
    
    
    
})


.controller('addpalanCtrl', function($scope, $http, $ionicPopup) {
    
    $scope.data = {};
    console.log("in addpantrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/awlist.php';
        var name="namal";
        $http.post(link, {placename : $scope.data.placename,username: name}).then(function (res){
            console.log("deta return from server");
            
            $scope.response = res.data.records;
            if ($scope.response){
                var alertPopup = $ionicPopup.alert({
                title: 'Added to wish list ',
                template: 'plan added'

            });

            }
            console.log( $scope.response);
        });
        $scope.showMe = false;
        $scope.myFuncP = function() {
        $scope.showMe = !$scope.showMe;
    }
    };
    
    
    
})




.controller('addComplCtrl', function($scope, $http, $ionicPopup) {
    
    $scope.data = {};
    console.log("in addwtrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/aclist.php';
        var name="namal";
        $http.post(link, {placename : $scope.data.placename,username: name}).then(function (res){
            console.log("deta return from server");
            
            $scope.response = res.data.records;
            if ($scope.response){
                var alertPopup = $ionicPopup.alert({
                title: 'Added to complete list ',
                template: 'place added to your complete list'

            });

            }
            console.log( $scope.response);
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };
    
    
    
})




//this is not working

.controller('add_comment_Ctrl', function($scope, $http, $ionicPopup) {
    
    $scope.data = {};
    console.log("in addwtrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/comment.php';
        var name="namal"
        $http.post(link, {placename : $scope.data.placename ,comment: $scope.data.a_comment,username: $scope.data.a_comment}).then(function (res){
            console.log("deta return from server");
            
            $scope.response = res.data.records;
            if ($scope.response){
                var alertPopup = $ionicPopup.alert({
                title: 'Comment added ',
                template: 'comment added to databse'

            });

            }
            console.log( $scope.response);
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };
    
    
    
})




.controller('popCtrl', function($scope, $http) {
    $scope.data = {};
	console.log("in appcntrl");
        $scope.showMe = false;
		$scope.myFunc = function() {
		$scope.showMe = !$scope.showMe;
    }
   
    
    
    
})





// .controller('contactCtrl', function($scope, $http) {
//     $scope.data = {};
// 	console.log("in contact ctrl");
//     $scope.submit = function(){
//         var link = 'http://travelsl.esy.es/gpPHP/contactus.php';
//         var "namal";
//         $http.post(link, {username :name, $scope.data.username,}).then(function (res){
// 			console.log("deta return from server");
// 			console.log(res);
//             $scope.response = res.data.records;
//         });
//     };
    
    
    
// })


.controller('contactCtrl', function($scope, $http, $ionicPopup) {
    
    $scope.data = {};
    console.log("in contact us wtrl");
    $scope.submit = function(){
        var link = 'http://travelsl.esy.es/gpPHP/contactus.php.php';
        var name="namal";
        $http.post(link, { placename : $scope.data.placename,description : $scope.data.des ,username: name, }).then(function (res){
            console.log("deta return from server");
            
            $scope.response = res.data.records;
            if ($scope.response){
                var alertPopup = $ionicPopup.alert({
                title: 'Successfull ',
                template: 'your suggestion was added'

            });

            }
            console.log( $scope.response);
        });
        $scope.showMe = false;
        $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
    };
    
    
    
})





.controller('commentsCtrl', function($scope, $http) {
    $scope.data = {};
	console.log("in commentscntrl");
    $scope.submit1 = function(){
        var link = 'http://travelsl.esy.es/comments.php';

        $http.post(link, {username : $scope.data.username}).then(function (res){
			console.log("deta return from server to commentCtrl");
			console.log(res);
            $scope.comment = res.data.records;
        });
    };
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tabsController.home');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

