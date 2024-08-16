import Swal from "sweetalert2";

export function successAlert (text?: string) {
    Swal.fire({            
        icon: "success",
        title: text || "Your changes has been saved",
        showConfirmButton: false,
        timer: 1500
    });
}
