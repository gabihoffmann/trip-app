import * as Yup from "yup";

export const validationSchema = Yup.object({
  city: Yup.string().test({
    test: (value) => (value?.length || 0) > 3 || value?.length === 0,
    message: "Precisa ser maior que 3",
  }),
  country: Yup.string().test({
    test: (value) => (value?.length || 0) > 3 || value?.length === 0,
    message: "Precisa ser maior que 3",
  }),
});
