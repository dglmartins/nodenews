(function() {
	function MainCtrl($scope, PostsFactory) {
		$scope.test = "Hello world";
		
		this.postFactory = PostsFactory;
		
		this.addPost = function() {
			PostsFactory.addPost($scope);
		};
		
		this.incrementUpvotes = function(post) {
			PostsFactory.incrementUpvotes(post);
		};
	
	
	
		
		
	}
	
	angular
		.module('nodeNews')
		.controller('MainCtrl', ['$scope', 'PostsFactory', MainCtrl]);
	
})();