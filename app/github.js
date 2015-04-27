//***** This is a service in Angular 

(function(module){
  
  var github = function($http){
    
    var getUser = function(username){
     return $http.get("http://192.168.37.112/DeeplifeApi/public/users + username)
           .then(function(response){
             return response.data;
           });
    };
    
    var getRepos = function(user){
      return $http.get(user.repos_url)
                  .then(function(response){
                    return response.data
                  });
    };
    
    return {
      getUser: getUser,
      getRepos: getRepos
    };
  };
  
  module.factory("github", github);
  
  
}(angular.module("githubViewer")));
  