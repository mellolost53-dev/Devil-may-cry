window.addEventListener('load', () => {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("loader-hidden"); 
            // початок анімації
            
            // після анімки завершується елемент
            setTimeout(() => {
                loader.style.display = "none";
            }, 1200); 
        }, 2000);
    }
});