(function() {
     function config($stateProvider, $urlRouterProvider) {
		 
			 $stateProvider
				.state('home', {
					url: '/home',
					controller: 'MainCtrl as main',
					templateUrl: '/angularTemplates/home.html'
			 })
			 	.state('posts', {
				 url: '/posts/{id}',
				 templateUrl: '/angularTemplates/posts.html',
				 controller: 'PostsCtrl as postctrl'
			 });
			 
			 $urlRouterProvider.otherwise('home');
		
	 }
	
	angular
  	.module('nodeNews', ['ui.router'])
    .config(config);

})();