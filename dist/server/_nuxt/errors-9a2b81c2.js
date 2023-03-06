function getErrorByField(errors, field) {
  const error = errors == null ? void 0 : errors.find((error2) => error2.field === field);
  return error ? error.description : "";
}
function fieldHasError(errors, field) {
  return getErrorByField(errors, field).length > 0;
}
export {
  fieldHasError as f,
  getErrorByField as g
};
//# sourceMappingURL=errors-9a2b81c2.js.map
