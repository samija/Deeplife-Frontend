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
            title: 'ethiopia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'ethiopia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'ethiopia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'ethiopia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        }) when('/', {
            title: 'ethiopia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'ethiopia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
            title: 'ethiopia',
            templateUrl: 'templates/country.html',
            controller: 'countryCtrl'
        })
        when('/', {
                title: 'ethiopia',
                templateUrl: 'templates/country.html',
                controller: 'countryCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });;
    }]);
<li id="eritrea"><a href="">Eritrea</a></li>
<li id="djibouti"><a href="http://pray4sea.orgi">Djibouti</a></li>
<li id="ethiopia"><a href="ethiopia">Ethiopia</a></li>
<li id="somalia"><a href="">Somalia</a></li>
<li id="uganda"><a href="uganda">Uganda</a></li>
<li id="kenya"><a href="kenya">Kenya</a></li>
<li id="rwanda"><a href="rwanda">Rwanda</a></li>
<li id="tanzania"><a href="tanzania">Tanzania</a></li>
<li id="zambia"><a href="zambia">Zambia</a></li>
<li id="malawi"><a href="malawi">Malawi</a></li>
<li id="zimbabwe"><a href="zimbabwe">Zimbabwe</a></li>
<li id="mozambique"><a href="mozambique">Mozambique</a></li>
<li id="namibia"><a href="namibia">Namibia</a></li>
<li id="botswana"><a href="botswana">Botswana</a></li>
<li id="southafrica"><a href="south-africa">South Africa</a></li>
<li id="lesotho"><a href="lesotho">Lesotho</a></li>
<li id="swaziland"><a href="swaziland">Swaziland</a></li>
<li id="madagascar"><a href="madagascar">Madagascar</a></li>
<li id="reunion"><a href="reunion">Reunion</a></li>
<li id="mauritius"><a href="mauritius">Mauritius</a></li>
<li id="comoros"><a href="comoros">Comoros</a></li>
<li id="seychelles"><a href="seychelles">Seychelles</a></li>
<li id="southsudan"><a href="south-sudan">South Sudan</a></li></ul>
    