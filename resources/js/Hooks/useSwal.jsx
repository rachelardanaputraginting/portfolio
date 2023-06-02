import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

export default function useSwal() {
    const { delete: destroy } = useForm();
    const ask = ({
        url,
        message = 'Make sure you make good decisions!',
        method = 'post',
        data = ''
    }) => {
        swal({
            // icon: 'warning',
            text: message,
            buttons: ['Nope', 'Yap'],
        }).then((value) => {
            if (value == true) {
                destroy((url), {
                    onSuccess: () => toast.success('Removed')
                })
            }
        });
    };
    return { ask };
}
