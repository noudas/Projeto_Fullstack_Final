document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        
        const form = e.currentTarget;
        const url = '/v2/api/formdata';
        const formData = new FormData(form);
      
        const fetchOptions = {
          method: 'post',
          body: formData
        };

        try {

          fetch(url, fetchOptions);
          alert('Tudo registered successfully!');

        } catch (error) {

          console.error('Error:', error);
          alert('Falha ao registrar.');

        }
        
        

    });
});

