App.Views.Movies = Backbone.View.extend({
  el: ".movie-collection",
  initialize: function () {
    console.log("Movie Collection View Created");
    this.listenTo(this.collection, 'reset', this.renderAll);
  },
  renderAll: function () {
    this.$el.find("*").not(".category").remove();
    this.collection.each(this.renderOne, this);
  }, 
  renderOne: function (movie) {
    console.log(movie)
    var movieView = new App.Views.Movie({model: movie});
    this.$el.append(movieView.el);
  }
});