(function()	{
	function PostsFactory($http) {
		var PostsFactory = {};
		PostsFactory.posts = [];
		
		PostsFactory.getAll = function() {
			return $http.get('/posts').success(function(data) {
				angular.copy(data, PostsFactory.posts);	
			});
		};
		
		PostsFactory.getSinglePost = function(id) {
			return $http.get('/posts/' + id).then(function(res) {
				return res.data;
			});
		};
		
		PostsFactory.createPost = function(post) {
			return $http.post('/posts', post).success(function(data) {
				PostsFactory.posts.push(data);
			});
		};
		
		PostsFactory.addPost = function(scope){
			if(!scope.title || scope.title === '') {
				return;
			}
			
			PostsFactory.createPost({
				title: scope.title,
				link: scope.link,
			});
			
			scope.title = '';
			scope.link = '';
		};
		
		PostsFactory.createComment = function(id, comment) {
			return $http.post('/posts/' + id + '/comments', comment);
		};
		
		PostsFactory.addComment = function(scope, postId){
		if(!scope.body || scope.body === '') {
			return;
		}
		
			PostsFactory.createComment(postId, {
				body: scope.body, 
				author: 'user'
			}).success(function(comment) {
				scope.post.comments.push(comment);	
			});
			scope.body = '';
		};
		
		PostsFactory.upvotePost = function(post) {
			return $http.put('/posts/' + post._id + '/upvote').success(function(data) {
				post.upvotes += 1;
			});
		}
		
		PostsFactory.incrementUpvotes = function(post){
			PostsFactory.upvotePost(post);
		};
		
		
		PostsFactory.upvoteComment = function(post, comment) {
			return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote').success(function(data) {
				comment.upvotes += 1;
			});
		};
		
		
		return PostsFactory;
		
	};
	
	angular
		.module('nodeNews')
		.factory('PostsFactory', ['$http', PostsFactory]);
	
	
})();