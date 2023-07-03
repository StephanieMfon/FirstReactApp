export default function Main() {
  const country = "Nigeria";
  const source = require("./images/stephanie.jpeg");
  return (
    <main>
      <section>
        <img src={source} alt="Steph's photograph" style={{ width: "300px" }} />
        <h2>About Us</h2>
        <p>
          We are a small team of web developers based in the {country}. We
          specialise in creating modern and responsive websites for businesses
          and individuals.
        </p>
      </section>
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Web Design</li>
          <li>Web Development</li>
          <li>E-commerce Solutions</li>
          <li>Search Engine Optimization (SEO)</li>
        </ul>
      </section>
    </main>
  );
}
