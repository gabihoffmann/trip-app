import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalFormValues } from "./types";
import { validationSchema } from "./validations";

interface UseLocalFormProps {}

export function useLocalForm(props?: UseLocalFormProps) {
  const form = useForm<LocalFormValues>({
    defaultValues: {
      city: "",
      country: "",
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
