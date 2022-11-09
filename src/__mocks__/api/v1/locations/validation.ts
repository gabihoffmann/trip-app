import * as Yup from "yup";

export const createLocationSchema = Yup.object({
  city: Yup.string().required().min(10, "Minimo 5 caracters"),
  country: Yup.string().required().min(5, "Minimo 5 caracters"),
});
