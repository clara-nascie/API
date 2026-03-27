export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (req, res) => {
        return res.end("Listagem de produtos")
    }
  },

   {
    method: "POST",
    path: "/products",
    controller: (req, res) => {
        return res.end("Criação de produtos")
    }
  }
]