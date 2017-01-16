angular.module('javadevusers').controller('UserController', function ($scope, $resource, $http) {
    $scope.message = 'JavaDev Project';
    $scope.user;


    //$resource("../rest/api"}).get(); return an object.
    //$resource("../rest/api").query(); return an array.

    var loadAllUsersfromDB = function () {
        var User = $resource('user/all', {}, {
            query: {method: 'get', isArray: true, cancellable: true}
        });

        User.query(function (response) {
           // alert(response); //teraz w response jest json
            $scope.user = response; // w widoku będzie uzywane teraz user
        });
    };
    loadAllUsersfromDB();

//$scope.people = $resource('/person/all', []).get(); //to da undefined bo nie zdazyl jeszcze pobrac
//alert($scope.people.size);
//scope.cos = dajesz wtedy gdy chcesz miec dostep do czegos w pliku html w widoku i zbindowac na przyklad


//Zapis osoby do bazy danych
    $scope.addUser = function () {
        var name = $scope.userName; //pobieramy imie z pola w html
        var surname = $scope.userSurname;
        var age = $scope.userAge;
        var salary = $scope.userSalary;
        var email = $scope.userEmail;


        //alert(name); //to tylko dla testu czy dane sie pobieraja, w google chrome ctrl+shif j otwiera conosle do debuga
        //degug //tak sie wlacza debugger w js

        //Potrzebujemy stworzyc nasz obiekt, ktorego zadamy w Javie patrz RequestBody
        var userObject = {
            name: name,
            surname: surname,
            age: age,
            salary: salary,
            email: email
        };

        $http.post('user/add', userObject).success(function () { //wywloujemy
            loadAllUsersfromDB();
        }).error(function () {
            alert('We have problem!');
        })
    };


    $scope.removeUser = function (userId) {
        $http.delete('/user/' + userId).success(function () { //wywloujemy
            alert('Person remove success');
            loadAllUsersfromDB();
        }).error(function () {
            alert('Something is wrong');
        })
    };

    $scope.editUser = function (userId) {
       // $location.path("edit/:");
       //  $rootScope.idSelectedPhone = ($(event.target).attr("data-id"));
       //  $rootScope.name = "dawid";
        // /$http.put('/user/' + userId).success(function () {

        // }).error(function () {
        //     alert('Coś poszło nie tak');
        // })
    }

});