angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    searchResults: '<',
    result: '<',
    searchString: '<'
  },
  controller: function(youTube) {
    this.search = (searchString) => youTube.search(searchString, this.result);
  }
});
