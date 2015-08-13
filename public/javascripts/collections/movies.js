//Collection counter to dictate the page of the api to call
App.Collections.Movies = Backbone.Collection.extend({
  page: 0,
  url: '/movies',
  model: App.Models.Movie,
  initialize: function() {
    console.log("Made New Movie Collection");
  },
  nextPage: function() {
    if (this.page < 25) {
      this.page++;
      console.log(this.page);
      this.fetchByPage(this.page);
    }
  },
  previousPage: function() {
    if (this.page > 1) {
      this.page--;
      console.log(this.page);
      this.fetchByPage(this.page);
    }
  },
  firstPage: function() {
    this.page = 1;
    this.fetchByPage(this.page);
  },
  lastPage: function() {
    this.page = 25;
    this.fetchByPage(this.page);
  },
  skipThree: function() {
    if (this.page <= 22) {
      this.page += 3;
      this.fetchByPage(this.page);
    }
  },
  fetchByPage: function(pageNum) {
    this.page = pageNum;
    this.fetch({
      url: this.url,
      data: {
        page: pageNum
      },
      reset: true
    })
  }
});
