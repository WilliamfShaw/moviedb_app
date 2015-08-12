var App = {
  Models: {},
  Collections: {},
  Views: {}
};

$(function(){
  App.collection = new App.Collections.Movies();
  App.moviesView = new App.Views.Movies({collection: App.collection})
  App.collection.fetchByPage(1);
  App.pagbar = new App.Views.PaginationBar();
})