/**
 * Created by Larry on 2014/10/20.
 */
(function () {
    angular.module('app', ['angulike','kpApi', 'ui.router', 'l8k.UI.DirectiveModule', 'ui.bootstrap'])
        .controller('appController', ['$scope', 'newGov', '$modal', function ($scope, newGov, $modal) {
            $scope.orderby = ["last_modifly"];
            $scope.newGovDatas = [];
            $scope.realKP = [];
            $scope.news = [];
            newGov.getKP("category",40).then(
                function (datas) {
                    angular.forEach(datas.data, function (data) {
                        $scope.newGovDatas.push(data);
                    })

                }, function (data) {
                    console.log("error")
                    console.log(data);
                }
            )
            newGov.getKP("category",41).then(
                function (datas) {
                    angular.forEach(datas.data, function (data) {
                        $scope.realKP.push(data);
                    })

                }, function (data) {
                    console.log("error")
                    console.log(data);
                }
            )
            newGov.getKP("category",42).then(
                function (datas) {
                    angular.forEach(datas.data, function (data) {
                        $scope.news.push(data);

                    })

                }, function (data) {
                    console.log("error")
                    console.log(data);
                }
            )

            $scope.openContent = function (item) {
                var modalInstance = $modal.open({
                    template: "<div class='container-fluid'>{{items.title}}<pre style='height: 360px' ng-bind-html='items.content'></pre><button class='btn btn-primary' ng-click='close()'>Close</button></div>",
                    controller: function ($scope, items,$modalInstance) {
                        $scope.items = items;
                        $scope.close = function(){
                            $modalInstance.close();
                        }
                    },

                    resolve: {
                        items: function () {
                            return item
                        }
                    }
                })


            }
        }])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('article', {
                    url: "/article",
                    templateUrl: "article.html",
                    controller: "appController"
                })
        }])

        .run(['$state','$rootScope', function ($state,$rootScope) {
            $rootScope.facebookAppId = '1556880434526253';
            $state.go('article');
        }])
})();
