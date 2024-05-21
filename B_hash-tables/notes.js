let user = {
  name: "Henry",
  sayMyName: function () {
    console.log("It's Henry");
  },
};

// A e de um objeto Map para o objeto acima
// é a ordenação de inserção. No Map ele insere em ordem na
// memória.
// Outra diferença é que posso alterar o objeto da maneira que
// eu quiser como colocar uma função como key ou um array
const a = new Map();
// Sets story only keys
const b = new Sets();

const myHashTable = new Map();

myHashTable.set("name", "Henry");

// Exemplo:

// const myHashTable = new Map()

// myHashTable.set("name", "Henry");
// myHashTable.get("name");
// Map(2) {'name' => 'Henry', 'idade' => 27}

// myMap.set("name", "Henry")
// Map(1) {'name' => 'Henry'}
// myMap
// Map(1) {'name' => 'Henry'}
// myMap.set("name", "Isa")
// Map(1) {'name' => 'Isa'}
// myMap
// Map(1) {'name' => 'Isa'}
// myMap.set("idade", 12)
// Map(2) {'name' => 'Isa', 'idade' => 12
