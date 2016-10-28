describe("Entity", function() {

  var entity;
  var entity2;

  beforeEach(function() {
    entity = new Entity(200, 199, 0, 1);
    entity2 = new Entity(250, 250, 30, 1);
    entity.addInstance(entity);
    entity.addInstance(entity2);
  });

  describe("Initialize", function() {
    it("start location param", function() {
      expect(entity.position.x).toBe(200);
      expect(entity.position.y).toBe(199);
    });
  });

  describe("#updatePosition", function() {
    it("increases x by 1 if rotation is 0 and velocity is 1", function() {
      entity2.updatePosition(entity2);
      expect(entity2.position.x).toBe(251);
    });
    it("increases x by 0 if rotation is 90 and velocity is 1", function() {
      var newEntity = new Entity(250, 250, 90, 1);
      newEntity.updatePosition(newEntity);
      expect(newEntity.position.x).toBe(250);
    });
    it("decreases x by 1 if rotation is 150 and velocity is 1", function() {
      var newEntity = new Entity(250, 250, 150, 1);
      newEntity.updatePosition(newEntity);
      expect(newEntity.position.x).toBe(249);
    });
  });
});
