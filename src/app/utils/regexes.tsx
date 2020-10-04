export const replaceWhiteSpace = () => new RegExp(/\s/g)
export const replaceNumberIndents = () => new RegExp(/(\d+\.)+\s/)
export const encodeStringToTURL = (toEncode: string): string => {
  return toEncode.replace(new RegExp(/\W+/g), "")
}
