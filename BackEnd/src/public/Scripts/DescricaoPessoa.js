//DescricaoPessoa.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();

            // Numero do sobrevivente
            const codigo = document.getElementById('codigo').value;

            // Texto
            const descricao = document.getElementById('descricao').value;

            try {
                const response = await fetch('/v2/api/descricao', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        codigo: codigo,
                        descricao: descricao
                    })
                });

                if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
                alert('Descricao registered successfully!');

            } catch(error) {
                console.error('Error:', error);
                alert('Falha ao registrar a DescricaoPessoa.');
            }

    });
});