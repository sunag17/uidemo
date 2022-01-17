angular.module("myApp").factory("myService", function($http) {
    return {
        getData: function() {
            return $http.get("https://api.publicapis.org/entries")
            .then((response)=>{
                return response.data.entries;
            })
        }
    }
});