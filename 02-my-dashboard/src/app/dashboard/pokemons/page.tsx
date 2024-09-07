import {PokemonGrid, PokemonsReponse, SimplePokemon} from "@/pokemons";

const getPokemons = async ( limit=20, offset=0):Promise<SimplePokemon[]>=> {

    const data:PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res => res.json());
    
    const pokemons:SimplePokemon[] = data.results.map( pokemon => ({
        id: pokemon.url.split('/')[6],
        name: pokemon.name,
    }));
    // throw new Error('Error al obtener los pokemons ');
    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(200);
  return (
    <div className='flex flex-col'>
      <span className="text-5xl my-3 text-center font-bold">Listado de Pokemons <small>estático</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}