class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  // This underscore before the variable name means that it is private
  // and should not be accessable directly.
  // You can access directly but you should't
  // A função hash recebe uma 'key' no formato de string
  // e retorna o endereço em um valor inteiro.

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // Vou criar um endereço na memória
    // com a key que foi passada.
    let address = this._hash(key);
    // Se NÃO existir dados no endereço, faça:
    if (!this.data[address]) {
      // Adiciona o valor do endereço em uma posição vazia do array.
      this.data[address] = [];
    }
    // Coloca os valores no endereço dentro do array
    // Se existir valores dentro daquele endereço, coloque esses.
    // Não vamos fazer linkedLists.
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1)
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");

// myHashTable.printHash()

// console.log(myHashTable);
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");

// Em resumo, uma hashtable é uma função que armazena em chave valor
// e não precisa fazer um loop completo para achar um valor dentro do array
// sendo que na função hash é gerado um número de endereço baseado
// na key e quando precisamos pegar o valor só passamos a key e função
// hash nos retorna o endereço e aí vamos onde queremos
