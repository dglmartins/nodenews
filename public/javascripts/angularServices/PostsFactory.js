(function()	{
	function PostsFactory() {
		var PostsFactory = {};
		PostsFactory.posts = [];
		
		PostsFactory.addPost = function(scope){
			if(!scope.title || scope.title === '') {
				return;
			}
			
			PostsFactory.posts.push({
				title: scope.title,
				link: scope.link,
				upvotes: 0,
					// add fake comment data to the factory
				comments: [
				{author: 'Joe', body: 'Cool post', upvotes: 2},
				{author: 'Bob', body: 'Good post', upvotes: 5}
				]
			});
			
			scope.title = '';
			scope.link = '';
		};
		
		PostsFactory.addComment = function(scope, postId){
		if(!scope.body || scope.body === '') {
			return;
		}
		
			PostsFactory.posts[postId].comments.push({
				author: 'user', 
				body: scope.body, 
				upvotes: 0
			});

			scope.body = '';
		};
		
		
		
		PostsFactory.incrementUpvotes = function(post){
			post.upvotes += 1;
		};
		return PostsFactory;
		
	};
	
	angular
		.module('nodeNews')
		.factory('PostsFactory', [PostsFactory]);
	
	
})();