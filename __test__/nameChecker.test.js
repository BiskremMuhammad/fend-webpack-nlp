import { checkForName } from "../client/components/nameChecker";

describe("Testing the input validation", () => {
  test("empty input should not be valid", () => {
    expect(checkForName("")).toBeFalsy();
  });
  test("non-word characters should not be valid", () => {
    expect(checkForName("some not valid text?")).toBeFalsy();
  });
  test("friendly sentence words should be valid", () => {
    expect(
      checkForName(
        "some valid sentence, that has comma, dot. underscore_ or heiphen -"
      )
    ).toBeTruthy();
  });
});
