App.Views.Movie = Backbone.View.extend({
  className: 'col-lg-2 col-md-4 col-xs-6 movie-poster',
  initialize: function () {
    console.log("New Movie View created");
    this.template = Handlebars.compile($("#movie_img_temp").html());
    this.render();
  }, 
  getMovie: function () {
    //Make a new movie model and render it to the view. The fetch without a new model only returns what already exists in the collection
    var movie = new App.Models.Movie({id: this.model.toJSON().id})
    var newInfo = movie.fetch({ 
      url: '/movies/' + movie.id
    }).done(this.renderModal);
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  }, 
  renderModal: function (model) {
    // create the date and parse out the rating, make the modal view
    var fullMonthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber'];
    var splitDate = model.release_date.split("-");
    var date = [fullMonthNames[parseInt( splitDate[1]- 1)] , splitDate[2], "," , splitDate[0]].join(" ");
    var rating = model.releases.countries[0].certification;
    model.rating = rating;
    model.date = date;
    var modalView = new App.Views.ModalView({model: model});
    modalView.show();
  },
  events: {
    'click': 'getMovie'
  }
});