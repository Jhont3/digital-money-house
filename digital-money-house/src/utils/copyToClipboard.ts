import { errorAlert } from "./errorAlert";
import { successAlert } from "./successAlert";

export const handleCopyClipboard = (dataToCopy: string) => {
    navigator.clipboard.writeText(dataToCopy)
        .then(() => successAlert('Se copió la información satistactoriamente'))
        .catch(() => errorAlert('Algo falló, intentá nuevamente mas tarde...'));
}
