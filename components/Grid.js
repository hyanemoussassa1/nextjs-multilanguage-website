import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Grid = ({ blok }) => (
  <ul
    {...sbEditable(blok)}
    key={blok._uid}
    className="flex flex-col sm:flex-row sm:items-center sm:content-center"
  >
    {blok.columns.map((nestedBlok) => (
      <li key={nestedBlok._uid} className="sm:content-center">
        <DynamicComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
