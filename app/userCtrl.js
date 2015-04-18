app.controller('userCtrl', function ($scope, $modal, $filter, Data) {
    $scope.user = {};
    Data.get('user').then(function(data){
        $scope.user = data.data;
    });
    $scope.changeusertatus = function(product){
        product.status = (product.status=="Active" ? "Inactive" : "Active");
        Data.put("user/"+product.id,{status:product.status});
    };
    $scope.deleteProduct = function(product){
        if(confirm("Are you sure to remove the product")){
            Data.delete("user/"+user.id).then(function(result){
                $scope.user = _.without($scope.user, _.findWhere($scope.user, {id:user.id}));
            });
        }
    };
    $scope.open = function (p,size) {
        var modalInstance = $modal.open({
            templateUrl: 'templates/userEdit.html',
            controller: 'userEditCtrl',
            size: size,
            resolve: {
                item: function () {
                    return p;
                }
            }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.user.push(selectedObject);
                $scope.user = $filter('orderBy')($scope.user, 'user_id', 'reverse');
            }else if(selectedObject.save == "update"){
                p.description = selectedObject.description;
                p.phone_no = selectedObject.phone_no;
                p.email = selectedObject.email;
                p.generation = selectedObject.generation;
            }
        });
    };

    $scope.columns = [
        {text:"User_ID",predicate:"user_id",sortable:true,dataType:"number"},
        {text:"Name",predicate:"name",sortable:true},
        {text:"Phone_no",predicate:"phone_no",sortable:true},
        {text:"Email",predicate:"email",sortable:true},
        {text:"Generation",predicate:"generation",reverse:true,sortable:true,dataType:"number"},
        {text:"Description",predicate:"description",sortable:true},
        {text:"Status",predicate:"status",sortable:true},
        {text:"Action",predicate:"",sortable:false}
    ];

});


app.controller('userEditCtrl', function ($scope, $modalInstance, item, Data) {

    $scope.user = angular.copy(item);

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };
    $scope.title = (item.id > 0) ? 'Edit Product' : 'Add Product';
    $scope.buttonText = (item.id > 0) ? 'Update Product' : 'Add New Product';

    var original = item;
    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }
    $scope.saveProduct = function (product) {
        product.uid = $scope.uid;
        if(product.id > 0){
            Data.put('user/'+product.id, product).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(product);
                    x.save = 'update';
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }else{
            product.status = 'Active';
            Data.post('user', product).then(function (result) {
                if(result.status != 'error'){
                    var x = angular.copy(product);
                    x.save = 'insert';
                    x.id = result.data;
                    $modalInstance.close(x);
                }else{
                    console.log(result);
                }
            });
        }
    };
});
