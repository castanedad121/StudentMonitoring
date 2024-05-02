// Regular expression variable declaration
const RegIdentDocument = /^\d{8}(?:[-\s]\d{4})?$/;

export const validation = (data) => {
  let errors = {};

  const identDocument = RegIdentDocument.test(data.identDocument);

  if (!data.identDocument) {
    errors.identDocument = "Documento de identidad es requerido";
  } else if (!identDocument) {
    errors.identDocument = "Solo números, 8 digitos";
  }

  if (!data.password) {
    errors.password = "Constraseña es requerida";
  }

  // if (!role && data.identDocument && data.password) {
  //   errors.userLogin = "Documet and/or password is incorrect";
  // }

  return errors;
};
