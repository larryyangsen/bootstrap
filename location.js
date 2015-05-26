/**
 * Created by Larry on 2014/10/28.
 */
angular.module('app', [])
    .controller('location', ['$scope', '$http', function ($scope, $http) {
        $scope.getLocation = function(){

            if (navigator.geolocation) {
                var location={};
                navigator.geolocation.getCurrentPosition(function(loc){
                    location.lat =loc.coords.latitude;
                    location.lon = loc.coords.longitude;
                })
                $scope.position=location;

            }
        }



        $scope.getStore = function(){

            $http.get('http://larry33.coimapi.tw/twCvStore/store/byLoc?_key=de8fe51a-9aef-c39c-97c6-c959b19be35c&lat=' + $scope.position.lat + '&lng=' + $scope.position.lon + '&r=1')
                .success(function (data, status, headers, config) {
                    $scope.Datas = data;
                })
            angular.forEach($scope.Datas, function (store) {
                console.log(store);
                //$scope.stores.push(store.list);
            })
        }

        $scope.getLocation();

    }])




