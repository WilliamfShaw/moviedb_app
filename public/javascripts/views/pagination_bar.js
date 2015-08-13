//dynamically build the bar, currently based on the num of pages the api has
App.Views.PaginationBar = Backbone.View.extend({
  el: '.pagination',
  initialize: function () {
    console.log('Bar created');
    this.renderAll();
  },
  renderAll: function () {
    this.$el.empty();
    this.render('first', 'First');
    this.render('prev', 'Previous');
    if(App.collection.page <= 23) {
      for(var i = App.collection.page; i <= App.collection.page +2; i++){
        if(i === App.collection.page){
          //set the current page to active
          this.render(i , i, 'active');
        } else {
          
        this.render(i, i);
        }
      }
      this.render('...', '...');
    } else if (App.collection.page <= 24){
      for(var i = App.collection.page; i <= App.collection.page +1; i++){
      this.render(i , i);
      }
    } else {
       this.render(25 ,25);
    }
    this.render('next', 'Next');
    this.render('last', 'Last');
  }, 
  render: function (id, page, className) {
    var current = new App.Views.Pagination({model: { className: className, id: id, page: page}});
    this.$el.append(current.el);
  }
});