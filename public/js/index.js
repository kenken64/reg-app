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

        self.isAgeValid = function () {
            var date = new Date(self.user.dateOfBirth);
            date.setFullYear(date.getFullYear() + 18);
            return date < new Date();
        };

        self.register = function () {
            if (self.isAgeValid() == false) {
                return;
            }
            $http.post("/api/user", self.user)
                .then(function () {
                    window.location = "/thank-you.html"
                })
                .catch(function () {
                    alert("Oops! Some problem occurred after registration. Please try again.")
                });
        };


    }

})();