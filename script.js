document.getElementById("home").addEventListener("click", function(){window.location.href="/";});

const elementos = document.querySelectorAll('.griditems');

        // Adiciona um evento de clique em cada elemento
        elementos.forEach(elemento => {
            elemento.addEventListener('click', () => {
                // Obtém o valor do atributo 'data-url' do elemento clicado
                const url = elemento.getAttribute('data-url');
                
                // Redireciona para o URL correspondente
                window.open(url, '_blank');
            });
        });

const botao = document.querySelectorAll('.gridbtn');

        // Adiciona um evento de clique em cada elemento
        botao.forEach(elemento => {
            elemento.addEventListener('click', () => {
                // Obtém o valor do atributo 'data-url' do elemento clicado
                const url = elemento.getAttribute('data-url');
                
                // Redireciona para o URL correspondente
                window.open(url, '_blank');
            });
        });