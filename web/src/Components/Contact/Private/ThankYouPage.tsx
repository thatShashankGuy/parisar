import { faCircleXmark, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ThankYouPage.css";

interface TP {
  success: boolean;
}

export default function ThankYouPage(props: TP) {
  if (!props.success) {
    return (
      <div className="thank-you-page">
        <main>
          <FontAwesomeIcon icon={faCircleXmark} size="6x" />
          <br />
          <br />
          <p>Something went wrong! We are working on it</p>
          <p>Apologies for inconvenience,Please try again after sometime !</p>
        </main>
        <footer>
          <p>&copy; 2023 @thatshashankguy</p>
        </footer>
      </div>
    );
  }
  return (
    <div className="thank-you-page">
      <main>
        <FontAwesomeIcon icon={faThumbsUp} size="6x" />
        <br />
        <br />
        <p>Thank you for your query ! We will reach you shortly</p>
        <p>
          If you have any questions or need assistance, please feel free to
          contact us.
        </p>
      </main>
    
    </div>
  );
}
