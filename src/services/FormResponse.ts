export const FormResponse = {
  error(error = "An error occured"): FormState<undefined> {
    return {
      data: null,
      error,
    };
  },

  data<T>(data: T): FormState<T> {
    if (!data) {
      return this.error();
    }

    return {
      data,
      error: null,
    };
  },
};
