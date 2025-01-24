export const validateBody = (values: { [key: string]: string | number }) => {
    const errors: string[] = [];

    Object.keys(values).forEach((key) => {
        const value = values[key];
        if (!value || value === undefined) {
            errors.push(`${key} n'a pas été renseigné`);
        }
    });
    return errors;
};