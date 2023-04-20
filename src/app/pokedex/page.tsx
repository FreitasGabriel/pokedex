export default async function CreateMovie() {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/sylveon").then(
    (response) => response.json()
  );

  console.log(result.sprites);

  return (
    <>
      <h1>Esta é uma pagina de criação de filmes</h1>
    </>
  );
}
