import FAQScreen from "../src/screens/FaqScreen";

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
    "https://gist.githubusercontent.com/tsmsp/8a96565c056d633c27f8fecf0f1e3626/raw/7c59d62435398e6a496436d41d42ae6988ad66ab/super-pepper.json";

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
