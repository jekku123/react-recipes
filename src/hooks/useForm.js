/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

const useForm = (init) => {
    const [formData, setFormData] = useState(init);
    const [errors, setErrors] = useState(init);

    const removeObjectFromArray = useCallback((e, objArrayIdentifier) => {
        const id = e.target.dataset.idx;
        setFormData((prevData) => ({
            ...prevData,
            [objArrayIdentifier]: prevData[objArrayIdentifier].filter(
                (obj) => id !== obj.id
            ),
        }));
    }, []);

    const insertObjectToArray = useCallback(
        (objArrayIdentifier, fields) => {
            const newField = fields.reduce(
                (acc, curr) => ({ ...acc, id: uuid(), [curr]: '' }),
                {}
            );
            const newData = {
                ...formData,
                [objArrayIdentifier]: [
                    ...formData[objArrayIdentifier],
                    newField,
                ],
            };

            const newErrors = {
                ...errors,
                [objArrayIdentifier]: [...errors[objArrayIdentifier], newField],
            };
            setFormData(newData);
            setErrors(newErrors);
        },
        [formData, errors]
    );

    const handleFormChanges = useCallback(
        (e, objArrayIdentifier, arrayObjKey) => {
            const { name, value, dataset } = e.target;
            const id = dataset.idx;

            if (name === arrayObjKey) {
                validate(name, value, id, objArrayIdentifier);
                setFormData((prevData) => ({
                    ...prevData,
                    [objArrayIdentifier]: prevData[objArrayIdentifier].map(
                        (obj) => {
                            if (obj.id === id) {
                                return {
                                    ...obj,
                                    [name]: value,
                                };
                            }
                            return obj;
                        }
                    ),
                }));
            } else {
                validate(name, value);
                setFormData((prevState) => ({
                    ...prevState,
                    [name]: value,
                }));
            }
        },
        []
    );

    const handleSubmit = (e, submit) => {
        e.preventDefault();
        if (!checkErrors()) {
            submit(formData);
            setFormData(init);
        }
    };

    const checkErrors = () => {
        let isError = false;

        for (const [key, value] of Object.entries(errors)) {
            if (key === 'ingredients') {
                if (
                    value.some(
                        (err) => err.quantity !== '' || err.ingredient !== ''
                    )
                ) {
                    isError = true;
                }
            } else {
                if (value !== '') {
                    isError = true;
                }
            }
        }
        for (const [key, value] of Object.entries(formData)) {
            if (key === 'ingredients') {
                if (
                    value.forEach((el, i) => {
                        validate('ingredient', value[i].ingredient, el.id);
                        validate('quantity', value[i].quantity, el.id);
                    })
                ) {
                    isError = true;
                }
            } else {
                if (value === '') {
                    validate(key, value);
                    isError = true;
                }
            }
        }

        return isError;
    };

    const validate = (name, value, id) => {
        switch (name) {
            case 'name':
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        name:
                            value.length < 3
                                ? 'Name must be atleast 3 characters'
                                : '',
                    };
                });

                break;

            case 'author':
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        author:
                            value.length < 3
                                ? 'Author must be atleast 3 characters'
                                : '',
                    };
                });

                break;

            case 'country':
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        country: value === '' ? 'Please choose a country' : '',
                    };
                });

                break;

            case 'description':
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        description:
                            value.length < 8
                                ? 'Description must be atleast 8 characters'
                                : '',
                    };
                });

                break;

            case 'imageUrl':
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        imageUrl: !isValidUrl(value) ? 'Not a valid url' : '',
                    };
                });

                break;

            case 'ingredient':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    ingredients: prevErrors.ingredients.map((obj) => {
                        if (obj.id === id) {
                            return {
                                ...obj,
                                ingredient: value.length < 3 ? 'Too short' : '',
                            };
                        } else {
                            return obj;
                        }
                    }),
                }));

                break;

            case 'quantity':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    ingredients: prevErrors.ingredients.map((obj) => {
                        if (obj.id === id) {
                            return {
                                ...obj,
                                quantity:
                                    value.length < 1 ? 'Quantity needed' : '',
                            };
                        } else {
                            return obj;
                        }
                    }),
                }));

                break;

            case 'instructions':
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        instructions:
                            value.length < 8
                                ? 'Instructions must be atleast 8 characters'
                                : '',
                    };
                });

                break;

            default:
                break;
        }
    };

    const isValidUrl = (url) => {
        var regex = new RegExp(
            '^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$',
            'i'
        );
        return regex.test(url);
    };

    return {
        formData,
        handleFormChanges,
        removeObjectFromArray,
        insertObjectToArray,
        handleSubmit,
        errors,
    };
};

export default useForm;
