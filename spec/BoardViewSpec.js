// problem set written by Hack Reactor. challenge files cloned on 4/14/2015 for educational purposes.
describe("ChessboardView", function() {
  var view;

  beforeEach(function() {
    view = new BoardView({model: new Board({n:4})});
  });

  it("should exist", function() {
    expect(view).toBeTruthy();
  });
});
