/**
 * Created by Larry on 2014/10/20.
 */
(function () {
    angular.module('app', ['ui.router', 'ui.bootstrap'])
          .controller('appController', ['$scope', 'newGov', '$modal','Restangular', function ($scope, newGov, $modal) {

        }])
        .controller('firstController',function($scope,Restangular){



        })
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('article', {
                    url: "/article",
                    templateUrl: "article.html",
                    controller: "appController"
                })
        }])

//        .run(['$state','$rootScope', function ($state,$rootScope) {
//            $rootScope.facebookAppId = '1556880434526253';
//            $state.go('article');
//        }])
})();
