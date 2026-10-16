import "./Footer.css";

function Footer() {
  const år = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <p className="mail"> hasan.hamzi312@hotmail.com</p>
      <p className="mail1">© {år} Hasan Hamzi</p>
       <div className="james">
        <a href="#">Hem</a>
        <a href="#om-mig">Om mig</a>
        <a href="#projekt">Projekt</a>
        <a href="#kontakt">Kontakt</a>
      </div>
    </footer>
  );
}

export default Footer;
