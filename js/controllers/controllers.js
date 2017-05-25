//inject the twitterService into the controller
twitterApp.controller('TwitterController', function($scope, twitterService) {
    //To change tabs
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };


    //For fetching users data
    $scope.users=[]; //array of tweets

    twitterService.getUserTweets().then(function(response){
        $scope.users = response;
    },function(response){
        //
    });

    /*
        Method to compose a new tweet
    */
    $scope.addTweet = function(index){
    	var localObj = {
    		"id" :  $scope.users[index].id+"_tweet"+ $scope.users[index]["tweets"].length+1,
			"name" :  $scope.users[index].name,
			"text" :  $scope.users[index].newTweet,
			"profile_image" :  $scope.users[index].userImage
    	}

    	 $scope.users[index]["tweets"].unshift(localObj);

    	 $scope.users[index].newTweet = "";

    }
});
