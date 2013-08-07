require(['models/Patient', 'jquery'], function(Patient, $) {
  describe('Patient', function () {
      it('cannot be null', function () {
        var patient = new Patient();
          expect(patient).not.toBeUndefined();
          // expect(3).toBe(2);
      });
      it('cannot be null', function() {
        expect($).not.toBeUndefined();
      })
  });
});