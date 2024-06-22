//Video.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();

            // Numero do sobrevivente
            const codigo = document.getElementById('codigo').value;

            // Video do youtube
            const url = document.getElementById('url').value

            // Transcricao do video
            const transcricao = document.getElementById('transcricao').value

            try {
                const response = await fetch('/v2/api/video', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        codigo: codigo,
                        url:url,
                        transcricao: transcricao
                    })
                });

                if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
                alert('Video registered successfully!');

            } catch(error) {
                console.error('Error:', error);
                alert('Falha ao registrar o video.');
            }

    });
});