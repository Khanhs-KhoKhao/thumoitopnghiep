

  // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            const card = document.querySelector('.invitation-card');
            const graduationCap = document.querySelector('.graduation-cap');
            const nameInput = document.getElementById('guestNameInput');
            const generateBtn = document.getElementById('generateInvitation');
            const backBtn = document.getElementById('backToForm');
            const nameInputSection = document.getElementById('nameInputSection');
            const invitationContent = document.getElementById('invitationContent');
            const guestNameDisplay = document.getElementById('guestNameDisplay');
            
            // Input focus effects
            nameInput.addEventListener('focus', function() {
                this.style.borderColor = '#2563eb';
                this.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
            });
            
            nameInput.addEventListener('blur', function() {
                this.style.borderColor = '#e2e8f0';
                this.style.boxShadow = 'none';
            });
            
            // Generate invitation
            generateBtn.addEventListener('click', function() {
                const guestName = nameInput.value.trim();
                if (!guestName) {
                    nameInput.style.borderColor = '#ef4444';
                    nameInput.placeholder = 'Vui lòng nhập tên của bạn!';
                    nameInput.focus();
                    return;
                }
                var audio = document.getElementById("audio");
                audio.play();
                
                // Thông báo khi tạo thư mời thành công
                alert("Chúc mừng " + guestName + " đã nhận được thư mời tốt nghiệp của Văn Khánh!");
                
                // Update guest name in invitation
                guestNameDisplay.textContent = guestName;
                
                // Show invitation with smooth transition
                nameInputSection.style.opacity = '0';
                nameInputSection.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    nameInputSection.style.display = 'none';
                    invitationContent.style.display = 'block';
                    invitationContent.style.opacity = '0';
                    invitationContent.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        invitationContent.style.opacity = '1';
                        invitationContent.style.transform = 'translateY(0)';
                    }, 50);
                }, 300);

            });
            
            // Back to form
            backBtn.addEventListener('click', function() {
                invitationContent.style.opacity = '0';
                invitationContent.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    invitationContent.style.display = 'none';
                    nameInputSection.style.display = 'block';
                    nameInputSection.style.opacity = '0';
                    nameInputSection.style.transform = 'translateY(-20px)';
                    
                    setTimeout(() => {
                        nameInputSection.style.opacity = '1';
                        nameInputSection.style.transform = 'translateY(0)';
                    }, 50);
                }, 300);
            });
            
            // Enter key support
            nameInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    generateBtn.click();
                }
            });
            
            // Mouse move effect for card
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotateX = (y / rect.height) * 10;
                const rotateY = (x / rect.width) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
            
            // Click effect for graduation cap
            graduationCap.addEventListener('click', function() {
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = 'bounce 2s ease-in-out infinite';
                }, 10);
            });
            
            // Make editable fields more obvious on focus
            const editableElements = document.querySelectorAll('[contenteditable="true"]');
            editableElements.forEach(element => {
                element.addEventListener('focus', function() {
                    this.style.background = '#fef3c7';
                    this.style.padding = '2px 4px';
                    this.style.borderRadius = '4px';
                });
                
                element.addEventListener('blur', function() {
                    this.style.background = 'transparent';
                    this.style.padding = '0';
                });
            });
            
            // Add transition styles
            nameInputSection.style.transition = 'all 0.3s ease';
            invitationContent.style.transition = 'all 0.3s ease';
        });