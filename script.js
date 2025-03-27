const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", () => {
  inputUpload.click();
});

function lerConteudoDoArquivo(arquivo){
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = () => {
      resolve({url:leitor.result, nome: arquivo.name});
    }
    leitor.onerror = () => {
      reject(`Erro na leitura do arquivo ${arquivo.name}.`);
    }

    leitor.readAsDataURL(arquivo);
  })
};

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change", async (evento) => {
  const arquivo = evento.target.files[0];

  if (arquivo){
    try{
      const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
      imagemPrincipal.src = conteudoDoArquivo.url;
      nomeDaImagem.textContent = conteudoDoArquivo.nome;
    } catch (erro) {
      console.error("Erro na leitura do arquivo")
    }
  }
});

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

listaTags.addEventListener("click", (evento) =>{
  if(evento.target.classList.contains("remove-tag")){
    const tagRemove = evento.target.parentElement;
    listaTags.removeChild(tagRemove);
  }
});

const tagsDisponiveis = ["Front-end", "Back-end", "Programação", "Data Science", "Full-Stack", "MySQL", "HTML", "CSS","Java", "JavaScript", "Python"];

async function verificarTagsDisponiveis (tagTexto) {
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(tagsDisponiveis.some(tag => tag.toLowerCase() === tagTexto.toLowerCase()));
    }, 1000)
  })
};

inputTags.addEventListener("keypress", async (evento) => {
  if (evento.key === "Enter") {
      evento.preventDefault();
      const tagTexto = inputTags.value.trim();
      if (tagTexto !== "") {
        try{
        const tagExiste = await verificarTagsDisponiveis(tagTexto);
        if (tagExiste){
          const tagNova = document.createElement("li");
          tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
          listaTags.appendChild(tagNova);
          inputTags.value = "";
        }else {
          alert("Tag não encontrada!");
        }
        } catch (error){
          console.error("Erro ao verificar a existência da tag")
          alert("Erro ao verificar a existência da tag.")
        }
      }
  }
});

const botaoPublicarPrimeiro = document.querySelector(".link-destaque");

async function publicarProjetoPrimeiro(nomeDoProjeto, descricaoDoProjeto, tagsProjetos) {
  return new Promise ((resolve) => {
    setTimeout(() => {
      const deuCerto = true;

      if(deuCerto){
        resolve("Projeto publicado com sucesso!");
      }
    }, 2000)
  })
}

botaoPublicarPrimeiro.addEventListener("click", async (evento) => {
  evento.preventDefault();

  const nomeDoProjeto = document.getElementById("nome").value;
  const descricaoDoProjeto = document.getElementById("descricao").value;
  const tagsProjetos = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

  try{
    const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjetos)
    console.log(resultado)
    alert("Deu tudo certo!")
  } catch (error){
    console.log("Deu errado: ", error)
    alert("Erro ao publicar o Projeto")
  }

  const formulario = document.querySelector("form")
  formulario.reset();

  imagemPrincipal.src = "./img/imagem1.png";
  nomeDaImagem.textContent = "Image_projeto.png";

  listaTags.innerHTML = "";

});

const botaoPublicar = document.querySelector(".botao-publicar");

async function publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjetos) {
  return new Promise ((resolve) => {
    setTimeout(() => {
      const deuCerto = true;

      if(deuCerto){
        resolve("Projeto publicado com sucesso!");
      }
    }, 2000)
  })
}

botaoPublicar.addEventListener("click", async (evento) => {
  evento.preventDefault();

  const nomeDoProjeto = document.getElementById("nome").value;
  const descricaoDoProjeto = document.getElementById("descricao").value;
  const tagsProjetos = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

  try{
    const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjetos)
    console.log(resultado)
    alert("Deu tudo certo!")
  } catch (error){
    console.log("Deu errado: ", error)
    alert("Erro ao publicar o Projeto")
  }

  const formulario = document.querySelector("form")
  formulario.reset();

  imagemPrincipal.src = "./img/imagem1.png";
  nomeDaImagem.textContent = "Image_projeto.png";

  listaTags.innerHTML = "";

});

const botaoDescartar = document.querySelector(".botao-descartar")

  botaoDescartar.addEventListener("click", (evento) => {
  evento.preventDefault();

  const formulario = document.querySelector("form")
  formulario.reset();

  imagemPrincipal.src = "./img/imagem1.png";
  nomeDaImagem.textContent = "Image_projeto.png";

  listaTags.innerHTML = "";
})





