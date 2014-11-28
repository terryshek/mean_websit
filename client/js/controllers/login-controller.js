/**
 * Created by terryshek on 28/11/14.
 */
app.controller('loginCtrl',function($scope){
    $scope.title = 'welcome, pls login first !';
    console.log($scope.title)
    $scope.submitLogin = function() {
        console.log($scope.title)
        console.log($scope.user.username)
        login.get({username: $scope.user.username}, function () {
                console.log("run")
            }
        )
    }
})
