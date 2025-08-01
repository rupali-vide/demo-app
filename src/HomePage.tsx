import "./App.css";

function HomePage() {
  const handlePaytmClick = () => {
    const intentLink = `intent://pay?pa=8898440622@pthdfc&pn=Test%20Merchant&am=1&cu=INR&tn=Test%20Payment#Intent;scheme=upi;package=net.one97.paytm;end;`;
    window.location.href = intentLink;
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={handlePaytmClick}>Pay with Paytm intent</button>
    </div>
  );
}

export default HomePage;
