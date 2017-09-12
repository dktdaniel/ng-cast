angular.module('video-player')
.service('youTube', function($http) {
  this.search = (searchString, searchResults) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        'maxResults': 5,
        'q': searchString,
        'type': 'video',
        'key': YOUTUBE_API_KEY,
        'part': 'snippet'
      }
    //destructuring response object which has data property
    })
    .then(({data}) => searchResults(data.items))
    .catch(({data}) => data.error.errors.forEach((err) => {
      console.log(err.message);
    }));
  };
});
