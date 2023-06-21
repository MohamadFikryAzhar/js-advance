//Soal nomor 3//
// Menggunakan then catch
function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {
        data.results.forEach(pokemon => {
            const url = pokemon.url;
            const id = url.split('/')[6]; // Mendapatkan id dari url
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
            console.log(`Nama: ${pokemon.name}`);
            console.log(`Url: ${url}`);
            console.log(`Image: ${imageUrl}`);
            console.log('---------------------');
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  fetchPokemon();
// Menggunakan async await
async function fetchPokemon() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
  
      data.results.forEach(async pokemon => {
        const url = pokemon.url;
        const id = url.split('/')[6]; // Mendapatkan id dari url
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
        console.log(`Nama: ${pokemon.name}`);
        console.log(`Url: ${url}`);
        console.log(`Image: ${imageUrl}`);
        console.log('---------------------');
      });
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  fetchPokemon();

//Soal nomor 4//
async function fetchTodos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();
  
      const titles = todos.map(todo => todo.title);
      console.log(titles);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  fetchTodos();