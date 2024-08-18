import { errorAlert } from "./errorAlert";
import { successAlert } from "./successAlert";

export const handleCopyClipboard = (dataToCopy: string) => {
    navigator.clipboard.writeText(dataToCopy)
        .then(() => successAlert('Copied successfully'))
        .catch(() => errorAlert('Copy failed'));
}
