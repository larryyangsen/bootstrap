/**
 * Created by Larry on 2014/10/23.
 */
(function(){
angular.module('polymerApp',[])
    .controller('polymerController',['$scope',function($scope){
        $scope.name="Larry";
        $scope.zoom=15;
    }])

//    window.addEventListener("polymer-ready",function(){
//    document.querySelector("#tmp1").model ={
//        zoom :6
//    };
//    })

})();