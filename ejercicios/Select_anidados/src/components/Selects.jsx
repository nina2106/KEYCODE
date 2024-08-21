import { SelectList } from "./SelectList";

export const Selects = ({ title }) => {
  return (
    <>
      <SelectList title = "Estados"/>
      <SelectList title = "Municipios"/>
      <SelectList title = "Ciudades"/>
    </>
  );
};
