export default function NotFound() {
  return (
    <section style={{padding:"64px 16px", textAlign:"center"}}>
      <h1 style={{fontSize:"48px", margin:"0 0 8px"}}>404</h1>
      <p style={{color:"#475569", margin:"0 0 24px"}}>We couldn’t find that page.</p>
      <a href="/" style={{
        display:"inline-block",
        padding:"10px 16px",
        borderRadius:"12px",
        background:"#0284c7",
        color:"#fff",
        textDecoration:"none"
      }}>Back to home</a>
    </section>
  );
}
