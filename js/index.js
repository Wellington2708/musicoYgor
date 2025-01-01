const  domLoaded = document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o cabeçalho:", error));
    });


    const  domFooter = document.addEventListener("DOMContentLoaded", function () {
        fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("footer-container").innerHTML = data;
            })
            .catch(error => console.error("Erro ao carregar o cabeçalho:", error));
        });