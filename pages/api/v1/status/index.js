function status(request, response) {
  response.status(200).json({ chave: "Meu bissim, meu amor" });
}

export default status;
