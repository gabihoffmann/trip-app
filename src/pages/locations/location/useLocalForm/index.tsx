import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalFormValues } from "./types";
import { validationSchema } from "./validation";

export function useLocalForm() {
  const form = useForm<LocalFormValues>({
    defaultValues: {
      city: "",
      country: "",
      hotel: {
        name: "",
        phone: "",
      },
      travel: "",
    },
    resolver: yupResolver(validationSchema),
  });

  // ---------------------------------------------
  // Functions
  // ---------------------------------------------
  // Effects
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    ...form,
  };
}
