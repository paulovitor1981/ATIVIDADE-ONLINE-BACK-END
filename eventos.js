var dataEvento = 2022
var quantPessoas = ["Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
                     "Paulo","Juliana","Sônia","Jose","Daniel","Vitor","Cezar","Borges",
]

var entradausuario = "paulo dias"
var senhaDeEntrada = "juxmeeting"
var datanascimento = 1980
let idade = dataEvento-datanascimento


if (idade <= 17){
   console.log("Não é permitido menores de 18 anos")
} 

 else if (senhaDeEntrada.length <= 7){
  console.log("Sua senha deve conter no minimo 7 caracteres.")
}
 else{
  console.log(" Processando se Há vagas ")
}

    if (quantPessoas.length <= 200){
   console.log("Cadastro efetuado com sucesso!")
}
    else {
   console.log("Não há vagas para este evento.")
}