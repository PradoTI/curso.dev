function status(request, response) {
  response.status(200).json({ chave: "Curso.dev é acima da média" });
}
export default status;
