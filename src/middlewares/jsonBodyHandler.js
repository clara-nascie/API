export async function jsonBodyHandler(req, res){

    // adicionar cada chunk
    const buffers = []

    //coleta os chunks de dados da recepção
    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        //concatena os chuncks e tranforma em strink. Em seguida, coverte a strink para JSON.
       req.body = JSON.parse(Buffer.concat(buffers).toString()) } 
    catch (error) {
        req.body = null
    }

    // define o header de resposta como JSON
    res.setHeader("Content-Type", "application/json")
}
    