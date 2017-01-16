angular.module('javadevusers').controller('EditController', function ($scope, $routeParams, UserService) {
    $scope.message = 'Edit user';
    $scope.people;
    $scope.userName;
    $scope.userSurname;
    $scope.userAge;
    $scope.userSalary;
    $scope.userEmail;
    //alert($routeParams.id);

    var loadOneUser = function (id) {
        UserService
            .findOneUser(id)
            .then(function (response) {
                if (response.status == 200) {
                    alert(angular.toJson(response));
                    // alert(angular.toJson(response));
                    $scope.userName = response.data.name;
                    $scope.userSurname = response.data.surname;
                    $scope.userAge = response.data.age;
                    $scope.userSalary = response.data.salary;
                    $scope.userEmail = response.data.email;
                }
            })
    }
    loadOneUser($routeParams.id);

    $scope.saveUser = function () {
        var user = {
            id: $routeParams.id,
            name: $scope.userName,
            surname: $scope.userSurname,
            age: $scope.userAge,
            salary: $scope.userSalary,
            email: $scope.userEmail
        }
        UserService
            .editUser(user)
            .then(function (response) {
                if (response.status == 200) {
                    alert("Pomyślnie edytowano");
                } else {
                    alert("Nie udało sie");
                }
            })
        alert(user.name);
    }
});