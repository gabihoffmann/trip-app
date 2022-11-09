import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalFormValues } from "./types";
import { validationSchema } from "./validation";
import { DtoValidationError } from "../../../../services/api/v1/locations/types/dtoValidationError";
import { getLocalFormErrorsFromService } from "../helpers";

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

  const { clearErrors, setError } = form;

  const setValidationErrors = useCallback(
    (errors: DtoValidationError[]) => {
      clearErrors();
      const formErrors = getLocalFormErrorsFromService(errors);
      formErrors.forEach((element) => {
        console.log("formErros: ", element);
        setError(element.path as any, { message: element.message });
      });
    },
    [clearErrors, setError]
  );

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
    setValidationErrors,
  };
}
