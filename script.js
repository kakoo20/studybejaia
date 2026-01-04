
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
        body.classList.add('light-mode');
    }
    
    updateIcon();
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateIcon();
    });
    
    function updateIcon() {
        const isLight = body.classList.contains('light-mode');
        themeIcon.setAttribute('data-feather', isLight ? 'moon' : 'sun');
        feather.replace();
    }
    
    // Initialize blobs with proper animation
    function initBlobs() {
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach(blob => {
            if (window.innerWidth < 768) {
                blob.style.width = '300px';
                blob.style.height = '300px';
                blob.style.filter = 'blur(80px)';
            } else {
                blob.style.width = '500px';
                blob.style.height = '500px';
                blob.style.filter = 'blur(100px)';
            }
        });
    }
    window.addEventListener('resize', initBlobs);
    initBlobs();

    // Toggle documentation sections
    document.querySelectorAll('.intro-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 
                'rotate(0deg)' : 'rotate(180deg)';
            
            // Smooth height transition
            if (content.classList.contains('hidden')) {
                content.style.maxHeight = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
