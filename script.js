function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light') //Esse código tem a mesma função do if else
  
  //pegar a tag img
    const img = document.querySelector("#profile img")
  //substituir a imagem
    if(html.classList.contains('light')) {
  //Se tiver Ligth mode, adicionar a imagem light
      img.setAttribute("src", "./assets/imagens/Avatar May-light.png")
      img.setAttribute("alt", "Imagem da Mayara sorrindo no carro, cabelos cacheados e cropped roxo."  )
    } else {
 //se tiver sem Light mode, manter a imagem normal
      img.setAttribute("src", "./assets/imagens/avatar May-dark.png")
      img.setAttribute("alt", "Foto de Mayara sorrindo sem mostrar os dentes, com cabelos soltos cacheados.")
  }
}
