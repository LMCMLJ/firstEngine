describe("Utilities", function() {

  beforeEach(function() {
  });

  describe("#getTravelDistance", function() {
    it("returns 0.5 for y distance if rotation is 30 and speed is 1", function() {
      expect(getTravelDistance(1, 30).toBe({x: 0.866, y: 0.5}));
    });
  });
});
