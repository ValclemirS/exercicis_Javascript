//: Crie um objeto que represente um livro, com propriedades para título, autor e número de páginas. Imprima cada propriedade no console.
class book {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
    }
  
    ready() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Páginas: ${this.paginas}`);
    }
  }
  
  let livro1 = new book('Da Terra à Lua', 'Júlio Verne', 500);
  livro1.ready();
  