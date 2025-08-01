import "./App.css";

function HomePage() {
  const handlePaytmClick = () => {
    const upiLink = `upi://pay?pa=8898440622@pthdfc&pn=Test%20Merchant&am=1&cu=INR&tn=Test%20Payment`;
    window.location.href = upiLink;
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={handlePaytmClick}>Pay with Paytm UPI</button>
    </div>
  );
}

export default HomePage;
