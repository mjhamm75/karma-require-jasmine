define(['models/Patient'], function(Patient) {
  var patient;
  describe("Patient Model", function() {
    beforeEach(function() {
    patient = new Patient();
    });
    it("should be defined", function() {
      expect(patient).toBeDefined();
    });
    it("should be a Backbone model", function() {
      expect(_.isFunction(patient.get)).toBe(true);
      expect(_.isFunction(patient.set)).toBe(true);
    })
  });
});