import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();

  console.log(location);
  return <div>successfully</div>;
};

export default PaymentSuccess;
