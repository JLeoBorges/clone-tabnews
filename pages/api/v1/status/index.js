function status(request, response){
    response.status(200).json({ Valor:"Status code:200!" });
}

export default status;