/**
 * Create new object with no empty array, undefined, null and empty string from existing object.
 * @param object An object that may contain empty value.
 * @returns An object with no empty value.
 */
export const filterEmptyValueFromObject = <T extends Record<string, unknown>>(
  object: T
) => {
  return Object.entries(object).reduce((prevValue, [key, value]) => {
    if (
      (Array.isArray(value) && value.length === 0) ||
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return prevValue;
    }
    return { ...prevValue, [key]: value };
  }, {});
};
