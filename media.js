const prompt = require('prompt-sync')();

const plataformaAcademica = {
    alunos: [
        { nome: "Jhonatan", notas: [8.5, 4.0, 7.8] },
        { nome: "Marcelao Balenciefer", notas: [9.0, 5.5, 7.8] },
        { nome: "Luiz Inacio Fabiano", notas: [1.0, 5.5, 7.8] },
        { nome: "Alexon", notas: [4.0, 8.0, 6.9] }
    ]
};

function consultarAluno() {
    console.log("\n--- Sistema de Consulta Acadêmica ---");
    const nomeBusca = prompt("Digite o nome completo do estudante: ");

    const alunoEncontrado = plataformaAcademica.alunos.find(aluno => 
        aluno.nome.toLowerCase() === nomeBusca.toLowerCase()
    );

    if (!alunoEncontrado) {
        console.log("\n[Erro]: Aluno não encontrado na base de dados.");
        return;
    }

    const somaNotas = alunoEncontrado.notas.reduce((acc, nota) => acc + nota, 0);
    const media = somaNotas / alunoEncontrado.notas.length;
    const mediaFormatada = media.toFixed(1);

    const status = media >= 7.0 ? "APROVADO" : "EM RECUPERAÇÃO";

    console.log("-------------------------------------");
    console.log(`Aluno: ${alunoEncontrado.nome}`);
    console.log(`Média Final: ${mediaFormatada}`);
    console.log(`Status: ${status}`);
    console.log("-------------------------------------");
}

consultarAluno();