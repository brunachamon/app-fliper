
import summaryReducers, {
  setSummary
} from "../summary";

describe("Summary Slice", () => {
  describe("reducers", () => {
    it("should return initial state", () => {
      const nextState = summaryReducers([], []);

      expect(nextState).toStrictEqual([]);
    });
  });

  describe("Testing Reducers", () => {
    it("setSummary", async () => {
      const payload = [
        {

        }
      ];
      const expectedAction = {
        type: "summary/setSummary",
        payload
      };

      expect(setSummary(payload)).toEqual(expectedAction);
    });
  });
});
