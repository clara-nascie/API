import { parseRoutePath } from "../utils/parseRoutePath.js"
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
    },
  },

  {
    method: "DELETE",
    path: "/products/:id",
    controller: (req, res) => {
        return res.end("Produto removido com ID:  " + req.params.id)
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path)
}))