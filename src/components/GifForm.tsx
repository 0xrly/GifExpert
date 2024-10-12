import { FormEvent } from "react";

function GifForm({
  setSearchTerm,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const category = form.get("search") as string;
    console.log("Updating searchTerm to:", category);
    setSearchTerm(category);
  };

  return (
    <form onSubmit={handleAdd} action="">
      <input name="search" type="text" placeholder="Agregue una categoría" />
      <button>Agregar</button>
    </form>
  );
}

export default GifForm;
