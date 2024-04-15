const assert = require("assert");
const Rooster = require("../index");
describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      // Setup
      const expected = "cock-a-doodle-doo!";
      // excercise
      const actual = Rooster.announceDawn();
      //verify
      assert.equal(actual, expected);
    });
    describe(".timeAtDawn", () => {
      it("returns its argument as a string", () => {
        //Setup
        const inputNumber = 11;
        const expected = "11";
        //exercise
        const actual = Rooster.timeAtDawn(inputNumber);
        //verify
        assert.equal(actual, expected);
      });
      it("throws an error if passed number less than 0", () => {
        //Setup
        const inputNumber = -2;
        const expected = RangeError;
        //Exercise
        const actual =
          //verify
          assert.throws(() => {
            Rooster.timeAtDawn(inputNumber);
          }, expected);
      });
    });
  });
});
