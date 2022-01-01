import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({ blok }) => (
  <main className="m-auto max-w-screen-lg xs: px-3 sm:px-5 md:px-7" {...sbEditable(blok)} key={blok._uid}>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);

export default Page;
