import { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

// Fun :D <3

const useForm = (init, submit) => {
  const [formData, setFormData] = useState(init);

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
      if (name === arrayObjKey) {
        setFormData((prevData) => ({
          ...prevData,
          [objArrayIdentifier]: prevData[objArrayIdentifier].map((obj) => {
            if (obj.id === id) {
              return {
                ...obj,
                [name]: value,
              };
            }
            return obj;
          }),
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
  };
};

export default useForm;
