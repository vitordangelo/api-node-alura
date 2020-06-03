module.exports = (app) => {
  app.get("/atendimentos", (req, res) => res.send("Servidor rodando..."));
  app.post("/atendimento", (req, res) => {
    console.log(req.body);
    res.send({ data: "Cadastrado" });
  });
};
