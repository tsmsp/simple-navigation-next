import FAQScreen from "../src/screens/FaqScreen/index";

export default FAQScreen;

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// export async function getServerSideProps() {
//This function fetches server-side data for each request.
//   console.log("getServerSideProps, runs on every request you receive");

export async function getStaticProps() {
  //This function fetches the data during the build. In other words, this function is executed only once.
  console.log("getStaticProps, runs ONLY at build time.");
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((Response) => {
      return Response;
    });

  return {
    props: {
      faq,
    },
  };
}
