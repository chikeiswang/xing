function customersController($scope, $http) {
        $http.get("js/sheeps.json")
            .success(function(response) {
                $scope.counts = response;
            });
        }

function resetPage() {
    var deviceWidth = document.documentElement.clientWidth,
    scale = deviceWidth/320;
    document.body.style.zoom = scale;
}

window.onresize = function () {
    resetPage();
}

window.onload = function () {
    resetPage();
}