app.controller('meetupsController',['$scope','$resource',function($scope,$resource){
    var Meetup = $resource('/api/meetups');
    $scope.title ="welcome to meetup!";
    $scope.meetups=[];

    Meetup.query(function(results){
        $scope.meetups = results
    });


    $scope.createMeetup = function(){
        var meetup = new Meetup();
        meetup.name = $scope.meetupName;
        meetup.$save(function(result){
            $scope.meetups.push(result);
            $scope.meetupName='';
        });

    }
    $scope.searchMeetup = function(){
        var meetup = new Meetup();
        meetup.name = $scope.Meetup_search;
        meetup.$get(function(result){
            $scope.meetups.push(result);
            $scope.meetupName='';
        });

    }
}]);
