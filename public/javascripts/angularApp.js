(function() {
     function config($stateProvider, $urlRouterProvider) {
		 
			 $stateProvider
				.state('home', {
					url: '/home',
					controller: 'MainCtrl as main',
					templateUrl: '/angularTemplates/home.html',
				 	resolve: {
						postPromise: ['PostsFactory', function(PostsFactory){
							return PostsFactory.getAll();
						}]
					}
			 })
			 	.state('posts', {
				 url: '/posts/{id}',
				 templateUrl: '/angularTemplates/posts.html',
				 controller: 'PostsCtrl as postctrl',
				 resolve: {
					 post: ['$stateParams', 'PostsFactory', function($stateParams, PostsFactory) {
						 return PostsFactory.getSinglePost($stateParams.id);
					 }]
				 }
			 });
			 
			 $urlRouterProvider.otherwise('home');
		
	 }
	
	angular
  	.module('nodeNews', ['ui.router'])
    .config(config);

})();