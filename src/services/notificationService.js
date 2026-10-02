import Swal from "sweetalert2";

const notificationClasses = {
  popup: "text-[2rem]",
  title: "text-[3rem]",
  confirmButton: "px-[30px] py-0",
};

export const showSaturdayInfo = () => {
  showInfoAlert({
    title: "Info",
    text: "Las citas los días sábados deben ser entre las 08:00 y las 12:00",
    confirmButtonText: "Entendido",
  })
};

export const showAppointmentCreated = () => {
  showSuccessAlert({
    title: "Operacion exitosa",
    text: "Cita agregada correctamente",
    confirmButtonText: "OK",
  });
};

export const requestConfirmation = ({
  title,
  text,
  confirmButtonText = "Confirmar",
  cancelButtonText = "Cancelar",
  icon = "warning",
}) => {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    customClass: notificationClasses,
  }).then(({ isConfirmed }) => isConfirmed);
};

const showSuccessAlert = ({ title, text, confirmButtonText }) => {
  showAlert({
    title, text, confirmButtonText, icon: "success",
  })
}

const showInfoAlert = ({ title, text, confirmButtonText }) => {
  showAlert({
    title, text, confirmButtonText, icon: "info",
  })
}

const showAlert = ({ title, text, confirmButtonText = "OK", icon }) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText,
    customClass: notificationClasses,
  });
}