require(['models/Patient'], function(Patient) {
  describe('Patient', function () {
      it('cannot be null', function () {
        var patient = new Patient();
          expect(patient).not.toBeUndefined();
      });
  });
});