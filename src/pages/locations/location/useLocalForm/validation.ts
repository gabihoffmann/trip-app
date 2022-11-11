import * as Yup from "yup";
export const validationSchema = Yup.object({
  city: Yup.string()
    .required("Campo cidade é obrigatório")
    .min(4, "Minimo 4 caracters"),
  country: Yup.string().required("Campo país é obrigatório"),
  travel: Yup.string(),
  hotel: Yup.object({
    name: Yup.string(),
    phone: Yup.string().test({
      test: (value) => (value?.length || 0) > 9 || value?.length === 0,
      message: "minimo 9 digitos ",
    }),
  }).notRequired(),
});
