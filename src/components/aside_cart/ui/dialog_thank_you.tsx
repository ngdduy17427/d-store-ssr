import { MdCheckCircle } from "react-icons/md";

const DialogThankYou = () => (
  <dialog id="dialogThankYou" className="dialog-thank-you">
    <div className="dialog-container">
      <MdCheckCircle />
      <h1>Thank you!</h1>
      <h2>You order has been successfully submitted. Thanks!</h2>
      <button
        type="button"
        onClick={() => (document.getElementById("dialogThankYou") as HTMLDialogElement).close()}
      >
        OK
      </button>
    </div>
  </dialog>
);

export default DialogThankYou;
