angular.module('javadevusers').service('UserService', function ($http) {
    /*
     data – {string|Object} – The response body transformed with the transform functions.
     status – {number} – HTTP status code of the response.
     headers – {function([headerName])} – Header getter function.
     config – {Object} – The configuration object that was used to generate the request.
     statusText – {string} – HTTP status text of the response.
     */
    this.findOneUser = function (id) {
        var url = 'user/' + id;
        return $http({
            method: "GET",
            url: url
        }).then(function successCallback(response) {
            //return angular.toJson(response.data);
            return response;
        }, function errorCallback(response) {
            return response.status;
        });
    }

    this.findAll = function (url) {
        return $http({
            method: "GET",
            url: url
        }).then(function successCallback(response) {
            //return angular.toJson(response.data);
            return response;
        }, function errorCallback(response) {
            return response.status;
        });
    }

    this.removePhone = function (id) {
        var url = '/api/phone/remove/' + id;
        return $http({
            method: "DELETE",
            url: url
        }).then(function successCallback(response) {
            //return angular.toJson(response.data);
            return response.data;
        }, function errorCallback(response) {
            return response.status;
        });
    }

    this.editUser = function (user) {
        return $http({
            method: "PUT",
            url: '/user/' + user.id,
            data: user
        }).then(function successCallback(response) {
            //return angular.toJson(response.data);
            return response;
        }, function errorCallback(response) {
            return response.status;
        });
    }
});