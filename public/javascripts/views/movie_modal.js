App.Views.ModalView = Backbone.View.extend({
    className: 'modal',
    initialize: function() {
      this.template = Handlebars.compile($("#modal-temp").html());
      this.render();
    },
    show: function() {
      this.$el.modal('show');
      var img_url = "http://image.tmdb.org/t/p/w342" + this.model.backdrop_path;
      $(".bg-img").css('background-image', 'url(' + img_url + ')');
    },
    hide: function() {
      $('.modal-backdrop').remove();
      this.remove();
    },
    render: function() {
      this.$el.html(this.template(this.model));
    },
    events: {
      'click': 'hide'
    }
 });