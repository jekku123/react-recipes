import Swal from 'sweetalert2';

export const alertBox = (formData, status) => {
    if (status === 'ok') {
        Swal.fire({
            title: 'Recipe Posted!',
            text: `Thank you for sharing your delicious recipe ${formData.name}! \n Recipe is now available at the recipes page.`,
            imageUrl: formData.imageUrl,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: formData.name,
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: `Sorry ${formData.name}, there was an error.`,
            text: 'Server down!',
        });
    }
};
