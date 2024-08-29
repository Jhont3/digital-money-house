import Swal from "sweetalert2";

export function errorAlert (text?: string) {    
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: text || "Something went wrong"          
    });
}
