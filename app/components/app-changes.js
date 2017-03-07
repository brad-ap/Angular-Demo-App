(function() {
    "use strict";

    var module = angular.module("snQuery");
   
    module.component("appChanges", {
        templateUrl: "app/views/app-changes.html",
        controllerAs: "change",
        controller: function(sharedData, query) {
            var model = this;

            var onDataComplete = function(data) {
                model.data = data.result;
                console.log(model.data);
                
                if(model.data === undefined) {
                    onError();
                } 
            };


            var onError = function() {
                model.error = "No results found ";
            };            

            model.$onInit = function() {
                return query.getChanges()
                    .then(onDataComplete)
                    
            };


            
        }  // End Controller     

    }); // End Component

}());