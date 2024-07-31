window.onload = function() {

    let btn = document.querySelector("button");
    let cep = document.getElementById("cep");

    btn.addEventListener("click", () => {
        //alert("Valor: " + cep.value)

        let servidor = "https://viacep.com.br/ws/" + cep.value + "/json/";

        console.log(servidor);

        fetch(servidor).then(
            (resp) => { return resp.json();}
        ).then(
            (dados) => {;

                console.log(dados["localidade"]);
            }
        ).catch(
            (er) => {console.error(er);}
        )
    })

}