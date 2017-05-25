twitterApp.factory('twitterService', function($q,$http) {
    return {
        getUserTweets: function () {
            //create a deferred object using Angular's $q service
            var deferred = $q.defer();

            //fetching the data
            $http.get("data/userData.json").then(
                function(data){
                    deferred.resolve(data.data);   
                }, function(data){
                    deferred.reject(data);    
                }
            );

            //return the promise of the deferred object
            return deferred.promise;
        }
    }

});
