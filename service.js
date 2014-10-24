/**
 * Created by Larry on 2014/10/20.
 */
(function(){
    angular.module('kpApi', [])
        .value('key', 'kp543692c841e3c3.35477699')
        .service('newGov', function (key, $http, $q) {
            this.getKP = function (category,id) {
                var deferred = $q.defer();
                $http({
                    method: "GET",
                    url: "http://api.kptaipei.tw/v1/"+category+"/"+id+"?accessToken=" + key
                }).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    deferred.reject(status);
                });
                return deferred.promise;
            }

        });
})();
