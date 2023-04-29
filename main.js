
function Empresa(nome){
    this.nome = nome,
    this.aondeTrabalho = ()=> {
        console.log(`Eu trabalho na ${nome}`)
    }
}

function Funcionario (nome, cargo, horarioDeInicio, empresa){
    this.nome = nome,
    this.cargo = cargo,
    this.horarioDeInicio = horarioDeInicio
    this.empresa = empresa,
    Empresa.call(this, empresa)
}

function Estagiario (nome, cargo, horarioDeInicio, empresa){
    this.nome = nome,
    this.cargo = cargo,
    this.horarioDeInicio = horarioDeInicio
    this.empresa = empresa,
    Empresa.call(this, empresa)
}

const estagiario1 = new Estagiario("Angelo", "dev front-end", "10:00", "Google")
const funcionario1 = new Funcionario("Nelson", "mecânico", "15:00", "Fiat")
const estagiario2 = new Estagiario("Crislayne", "advogada", "11:00", "Tribunal Federal MG")

estagiario1.aondeTrabalho()
estagiario2.aondeTrabalho()
funcionario1.aondeTrabalho()

console.log(estagiario1)
console.log(estagiario2)
console.log(funcionario1)