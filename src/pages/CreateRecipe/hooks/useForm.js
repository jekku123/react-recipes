import { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

// Fun :D <3

const useForm = (init, submit) => {
    const [formData, setFormData] = useState(init);
    const [errors, setErrors] = useState(init);

    const removeObjectFromArray = (e, objArrayIdentifier) => {
        const id = e.target.dataset.idx;
        setFormData((prevData) => ({
            ...prevData,
            [objArrayIdentifier]: prevData[objArrayIdentifier].filter(
                (obj) => id !== obj.id
            ),
        }));
    };

    const insertObjectToArray = (objArrayIdentifier, fields) => {
        const newField = fields.reduce(
            (acc, curr) => ({ ...acc, id: uuid(), [curr]: '' }),
            {}
        );
        setFormData((prevData) => ({
            ...prevData,
            [objArrayIdentifier]: [...prevData[objArrayIdentifier], newField],
        }));
    };

    const handleFormChanges = useCallback(
        (e, objArrayIdentifier, arrayObjKey) => {
            const { name, value, dataset } = e.target;
            const id = dataset.idx;
            validate(name, value);
            if (name === arrayObjKey) {
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
                setFormData((prevState) => ({
                    ...prevState,
                    [name]: value,
                }));
            }
        },
        []
    );

    const validate = (name, value) => {
        switch (name) {
            case 'name':
                if (value.length < 3 && value.length !== 0) {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            name: 'Name must be atleast 3 characters',
                        };
                    });
                } else {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            name: '',
                        };
                    });
                }
                break;

            case 'author':
                if (value.length < 3 && value.length !== 0) {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            author: 'Name must be atleast 3 characters',
                        };
                    });
                } else {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            author: '',
                        };
                    });
                }
                break;

            case 'country':
                if (value.length < 3 && value.length !== 0) {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            country: 'Name must be atleast 3 characters',
                        };
                    });
                } else {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            country: '',
                        };
                    });
                }
                break;

            case 'description':
                if (value.length < 3 && value.length !== 0) {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            description: 'Name must be atleast 3 characters',
                        };
                    });
                } else {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            description: '',
                        };
                    });
                }
                break;

            case 'imageUrl':
                if (value.length < 3 && value.length !== 0) {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            imageUrl: 'Name must be atleast 3 characters',
                        };
                    });
                } else {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            imageUrl: '',
                        };
                    });
                }
                break;

            case 'ingredients':
                if (value.length < 3 && value.length !== 0) {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            ingredients: 'Name must be atleast 3 characters',
                        };
                    });
                } else {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            ingredients: '',
                        };
                    });
                }
                break;

            case 'instructions':
                if (value.length < 3 && value.length !== 0) {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            instructions: 'Name must be atleast 3 characters',
                        };
                    });
                } else {
                    setErrors((prevErrors) => {
                        return {
                            ...prevErrors,
                            instructions: '',
                        };
                    });
                }
                break;

            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formData);
        setFormData(init);
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
