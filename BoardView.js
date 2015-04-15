// problem set written by Hack Reactor. challenge files cloned on 4/14/2015 for educational purposes.
// CHALLENGES AND FUNCTIONS COMPLETED BY: github.com/crisxian
(function(){

  window.BoardView = Backbone.View.extend({

    tagName: 'table',

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    render: function() {
      var model = this.model;
      return this.$el.html(_(_.range(model.get('n'))).map(function(rowIndex){
        return $('<tr class="row"/>').html(_(_.range(model.get('n'))).map(function(colIndex){
          var $square = $('<td class="square"/>').on('click', function(e){
            model.togglePiece(rowIndex, colIndex);
          }).addClass(['positive', 'negative'][(rowIndex + colIndex) % 2]);
          model.get(rowIndex)[colIndex] && $square.html('&#9813;');
          model.hasAnyQueenConflictsOn(rowIndex, colIndex) && $square.addClass('inConflict');
          return $square;
        }));
      }));
    }
  });

}());