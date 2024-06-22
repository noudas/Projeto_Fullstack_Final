// Pessoa.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        // Codigo do Sobrevivente
        const codigo = document.getElementById('codigo').value;

        // Nome do Sobrevivente
        const nome = document.getElementById('nome').value;

        // Imagem do Sobrevivente
        const imagemInput = document.getElementById('imagem');
        
        // Pegar a imagem
        const file = imagemInput.files[0];
        if (!file) {
            alert('Selecione uma imagem, ela deve ser .PNG, .JPG, .JPEG');
            return;
        }
    
        // Transformar a imagem em Base64
        const reader = new FileReader(); // Ler o arquivo
        reader.onloadend = async () => { //Arquivo carregado
            const base64data = reader.result.replace(/^data:image\/\w+;base64,/, ""); // Transforma a imagem em Base64
    
            try {
                const response = await fetch('/v2/api/pessoa', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        codigo: codigo,
                        nome: nome,
                        imagem: base64data
                    })
                });
    
                if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
                
                alert('Pessoa Registrada com sucesso!');
                document.getElementById('registerForm').reset(); // Clear form after successful registration
            } catch (error) {
                console.error('Error:', error);
                alert('Falha ao registrar Pessoa.');
            }
        };
        reader.readAsDataURL(file);
    });
});
