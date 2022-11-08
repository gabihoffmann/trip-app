import * as Yup from "yup";
export const validationSchema = Yup.object({
  city: Yup.string()
    .required("Campo cidade é obrigatório")
    .min(4, "Minimo 4 caracters"),
  country: Yup.string().required("Campo país é obrigatório"),
  travel: Yup.string(),
  hotel: Yup.object({
    name: Yup.string(),
    // TODO: validation only numbers ??
    phone: Yup.string()
      .nullable(true)
      .min(9, "Minimo 9 digitos")
      .default(undefined),
  })
    .notRequired()
    .default(undefined),
});
