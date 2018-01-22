var app = angular.module('App', []);

app.controller('AppController', function ($scope) {
    $scope.display = function () {
        var str = $scope.displayText;
        $scope.text = str;
    }
    $scope.comments = [
        { name: "Yamada", text: "Hello!" },
        { name: "Tanaka", text: "Thanks!" },
        { name: "Nakamura", text: "Yeah!" }
    ];
});