
document.addEventListener('DOMContentLoaded', async () => {
    // Load feather icons
    await feather.replace();
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
    // Fullscreen image toggle
    const fullscreenToggle = document.getElementById('fullscreen-toggle');
    const circuitImage = document.getElementById('circuit-image');
    let isFullscreen = false;

    fullscreenToggle.addEventListener('click', () => {
        isFullscreen = !isFullscreen;
        if (isFullscreen) {
            circuitImage.classList.add('fixed', 'inset-0', 'z-50', 'w-screen', 'h-screen', 'object-contain', 'p-8', 'bg-black/90');
            fullscreenToggle.innerHTML = '<i data-feather="minimize-2"></i> Exit Fullscreen';
            fullscreenToggle.style.zIndex = '60';
            fullscreenToggle.style.position = 'fixed';
            fullscreenToggle.style.bottom = '2rem';
            fullscreenToggle.style.right = '2rem';
        } else {
            circuitImage.classList.remove('fixed', 'inset-0', 'z-50', 'w-screen', 'h-screen', 'object-contain', 'p-8', 'bg-black/90');
            fullscreenToggle.innerHTML = '<i data-feather="maximize-2"></i> View Fullscreen';
            fullscreenToggle.style.zIndex = '';
            fullscreenToggle.style.position = '';
            fullscreenToggle.style.bottom = '';
            fullscreenToggle.style.right = '';
}
        feather.replace();
    });

    // Toggle documentation sections
    document.querySelectorAll('.intro-toggle, .hardware-toggle, .circuit-toggle').forEach(button => {
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
