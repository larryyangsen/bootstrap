/**
 * Created by Larry on 2014/10/24.
 */
angular.module('myApp',['firebase'])
.controller('myController',['$scope','$firebase',function($scope,$firebase){
        var ref = new Firebase("https://resplendent-inferno-9772.firebaseio.com/");
        $scope.datas=[];
        $scope.fireDatas = $firebase(ref).$asArray();
        $scope.save = function(e,data){
                if(e.keyCode===13){
//                  $scope.fireDatas.$save(data);
                    console.log(data)
                }


        }
    }])