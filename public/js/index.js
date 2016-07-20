(function () {
    var app = angular.module("RegApp", []);

    app.controller("RegistrationCtrl", ["$http", "$location", RegistrationCtrl]);

    function RegistrationCtrl($http) {
        var self = this;

        self.result = {};

        self.user = {
            email: "",
            password: "",
            name: "",
            gender: "F",
            dateOfBirth: "",
            address: "",
            country: "",
            contactNumber: ""
        };

        self.register = function () {
            $http.post("/api/user", self.user)
                .then(function () {
                    window.location = "/thank-you.html"
                })
                .catch(function () {
                    self.result.success = false;
                    self.result.message = self.message.success;
                });
        };


    }

})();