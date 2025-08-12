      document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset all errors
        document.querySelectorAll('.form-group').forEach(group => {
          group.classList.remove('error');
        });

        // Validate Name
        const name = document.getElementById('name').value.trim();
        if (name === '') {
          document.getElementById('name').parentElement.classList.add('error');
          isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          document.getElementById('email').parentElement.classList.add('error');
          isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password').value;
        if (password.length < 6) {
          document.getElementById('password').parentElement.classList.add('error');
          isValid = false;
        }

        // Validate Room Type
        const roomType = document.getElementById('roomType').value;
        if (roomType === '') {
          document.getElementById('roomType').parentElement.classList.add('error');
          isValid = false;
        }

        // Validate Message
        const message = document.getElementById('message').value.trim();
        if (message === '') {
          document.getElementById('message').parentElement.classList.add('error');
          isValid = false;
        }

        // Show success or error
        if (isValid) {
          alert('Thank you! Your message has been sent successfully.\nWe will contact you within 24 hours.');
          this.reset();
        } else {
          // Scroll to first error
          const firstError = document.querySelector('.error');
          if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          alert('Please fill in all required fields correctly.');
        }
      });

      // Real-time validation for fields
      document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea').forEach(input => {
        input.addEventListener('blur', function() {
          if (this.id === 'email') {
            const email = this.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
              this.parentElement.classList.add('error');
            } else {
              this.parentElement.classList.remove('error');
            }
          } 
          else if (this.id === 'password') {
            if (this.value.length < 6) {
              this.parentElement.classList.add('error');
            } else {
              this.parentElement.classList.remove('error');
            }
          }
          else if (this.value.trim() === '') {
            this.parentElement.classList.add('error');
          } else {
            this.parentElement.classList.remove('error');
          }
        });
      });
