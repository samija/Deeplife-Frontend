var app = angular.module('userApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                title: 'user',
                templateUrl: 'templates/user.html',
                controller: 'userCtrl'
            })
        when('/', {
            title: 'Sea',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'ethiopia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'djibouti',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'somalia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'uganda',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'kenya',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'tanzania',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'zambia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'malawi',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
                title: 'zimbabwe',
                templateUrl: 'templates/country.html',
                controller: 'countryCtrl'
            })
        when('/', {
            title: 'mozambique',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'namibia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'botswana',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'southafrica',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'lesotho',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'swaziland',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'madagascar',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'reunion',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'mauritius',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'comoros',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'seychelles',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'southsudan',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
            .otherwise({
                redirectTo: '/'
            });;
    }]);

