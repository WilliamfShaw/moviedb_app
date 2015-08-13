App.Views.Pagination = Backbone.View.extend({
  tagName: 'li',
  initialize: function () {
    console.log('Pagination bar created');
    this.template = Handlebars.compile($('#pag-link').html());
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model));
  },
  events: {
    'click': 'changePage'
  },
  changePage: function () {
    //help the pagination bar move to the active page first everytime you swtich pages
   if(this.model.id === 'next'){
    App.collection.nextPage();
    new App.Views.PaginationBar();
   } else if(this.model.id === 'prev'){
    App.collection.previousPage();
    new App.Views.PaginationBar();
   } else if(this.model.id === 'last'){
    App.collection.lastPage();
    new App.Views.PaginationBar();
   } else if(this.model.id === 'first'){
    App.collection.firstPage();
    new App.Views.PaginationBar();
   } else if(this.model.id === '...'){
    App.collection.skipThree();
    new App.Views.PaginationBar();
    new App.Views.PaginationBar();
   } else {
    App.collection.fetchByPage(parseInt(this.model.id))
    new App.Views.PaginationBar();
   }
  }
})