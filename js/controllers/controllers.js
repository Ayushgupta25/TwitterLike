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
        $scope.user = $scope.users[0];
        $scope.currentIndex = 0;
    },function(response){
        //
    });

    /*
        Method to compose a new tweet
    */
    $scope.addTweet = function(index){
    	var localObj = {
    		"id" :  $scope.user.id+"_tweet"+ $scope.user["tweets"].length+1,
			"name" :  $scope.user.name,
			"text" :  $scope.user.newTweet,
			"profile_image" :  $scope.user.userImage
    	}

    	 $scope.user["tweets"].unshift(localObj);

    	 $scope.user.newTweet = "";

    }

    $scope.changeUser = function(index){
        if(index === 0){
            $scope.user = $scope.users[1];
            $scope.currentIndex = 1;
        }
        else{
            $scope.user = $scope.users[0];
            $scope.currentIndex = 0;
        }
    }
});
