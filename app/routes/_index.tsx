import Header from "~/components/header";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  console.log(
    "This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
  );
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export default function Index() {
  return (
    <div>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}
