CREATE TABLE Especialidade(
    Id SERIAL PRIMARY KEY,
    Nome VARCHAR(255)
);

CREATE TABLE PlanoDeSaude(
    Id SERIAL PRIMARY KEY,
    Nome VARCHAR(255)
);

CREATE TABLE FichaPaciente(
    Id SERIAL PRIMARY KEY,
    NomePaciente VARCHAR(255),
    NumeroCarteiraPlano BIGINT,
    IdPlanoDeSaude INT REFERENCES PlanoDeSaude(Id),
    IdEspecialidade INT REFERENCES Especialidade(Id)
);