(function() {
	function PostsCtrl($scope, $stateParams, PostsFactory) {
		
		this.post = PostsFactory.posts[$stateParams.id];
		
		this.addComment = function() {
			PostsFactory.addComment($scope, $stateParams.id);
		};
		
	}
	
	
	
	angular
		.module('nodeNews')
		.controller('PostsCtrl', ['$scope', '$stateParams', 'PostsFactory', PostsCtrl]);
	
	
})();