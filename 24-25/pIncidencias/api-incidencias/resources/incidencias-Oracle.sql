CREATE TABLE "Departamento" (
  "codDpto" string PRIMARY KEY,
  "nombre" string,
  "edificio" string,
  "created_at" timestamp
);

CREATE TABLE "Profesores" (
  "ideaprof" string PRIMARY KEY,
  "codDpto" string,
  "nombre" varchar,
  "role" varchar,
  "created_at" timestamp
);

CREATE TABLE "Aulas" (
  "idaula" string PRIMARY KEY,
  "nombre" string UNIQUE NOT NULL,
  "edificio" string,
  "descripcion" varchar2,
  "created_at" timestamp
);

CREATE TABLE "Aparatos" (
  "codAp" string PRIMARY KEY,
  "nombre" string,
  "tipo" string,
  "estado" string,
  "idaula" string,
  "created_at" timestamp
);

CREATE TABLE "Incidencias" (
  "codInd" string PRIMARY KEY,
  "ideaprof" string,
  "idaula" string,
  "codAp" string,
  "fecha" date,
  "descripcion" varchar2,
  "prioirdad" string
);

ALTER TABLE "Departamento" ADD FOREIGN KEY ("codDpto") REFERENCES "Profesores" ("codDpto");

ALTER TABLE "Aulas" ADD FOREIGN KEY ("idaula") REFERENCES "Aparatos" ("idaula");

ALTER TABLE "Aparatos" ADD FOREIGN KEY ("codAp") REFERENCES "Incidencias" ("codAp");

ALTER TABLE "Profesores" ADD FOREIGN KEY ("ideaprof") REFERENCES "Incidencias" ("ideaprof");
