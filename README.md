# ProjetoESWII

O projeto tem como objetivo aplicar os conceitos de testes unitários e versionamento de código na prática.

Deve ser desenvolvido um sistema para gerir as atividades docentes durante o semestre letivo, denominado PID e RID. Os principais requisitos funcionais são:

O sistema deve permitir o cadastro, manutenção (CRUD) e autenticação de docentes;
O sistema deve permitir que os docentes cadastrem a CH de cada atividade no início do semestre (PID) e no final do semestre (RID);
O total da CH semanal deve ser compatível com o regime de trabalho (20h ou 40h);
Ao final do semestre (RID), o docente informará a real CH dedicada em cada atividade;
Caso haja diferença entre o PID e o RID, o docente deverá informar o motivo da alteração.
Além disso, o projeto deve seguir as orientações abaixo:

Ser desenvolvido com node.js;
Usar testes unitários;
Usar o github.
O projeto deve ser feito em dupla.
Critérios de avaliação:

Atendimento aos requisitos funcionais (1pt)
Cobertura dos testes unitários (1,5pts)
Uso semanal do github pela dupla (1,5pts)

# Comandos necessários
npm install express
npm install express-generetor
npm install node 
npm install
npm i -D jest typescript
npm i -D ts-jest @types/jest
npx ts-jest config:init

# Comando para testar
npm test 'nome da classe' ou npm test (para testar todas as classes)

# Comando para iniciar server
npm start