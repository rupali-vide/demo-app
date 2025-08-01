import "./App.css";

function HomePage() {
  const handlePaytmClick = () => {
    console.log("Button clicked!");
    const paytmParams = {
      MID: "DIY12386817555501617",
      merchantKey: "bKMfNxPPf_QdZppa",
      website: "WEBSTAGING",
      industryType: "Retail",
      channelId: "WEB",
    };
    // Example orderId for demonstration
    const orderId = "ORDER12345";
    // Add merchant params as query params to the UPI link
    const upiLink = `paytmmp://pay?pa=yourstore@paytm&pn=MyStore&am=100&tn=${orderId}&cu=INR&MID=${encodeURIComponent(
      paytmParams.MID
    )}&merchantKey=${encodeURIComponent(
      paytmParams.merchantKey
    )}&website=${encodeURIComponent(
      paytmParams.website
    )}&industryType=${encodeURIComponent(
      paytmParams.industryType
    )}&channelId=${encodeURIComponent(paytmParams.channelId)}`;
    window.location.href = upiLink;
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={handlePaytmClick}>Pay with Paytm</button>
    </div>
  );
}

export default HomePage;
