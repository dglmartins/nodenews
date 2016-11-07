(function() {
	function PostsCtrl($scope, PostsFactory, post) {
		
		$scope.post = post;
		
		this.addComment = function() {
			PostsFactory.addComment($scope, post._id);
		};
		
		$scope.incrementUpvotes = function(comment){
			PostsFactory.upvoteComment(post, comment);
		};
	
	}
	
	
	
	angular
		.module('nodeNews')
		.controller('PostsCtrl', ['$scope', 'PostsFactory', 'post', PostsCtrl]);
	
	
})();