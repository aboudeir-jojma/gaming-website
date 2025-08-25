// Script pour forcer l'affichage du canvas du jeu
// Problème: le canvas est créé avec display: none et ne devient jamais visible

(function() {
    console.log("🔧 Fix Canvas Display - Script de correction démarré");
    
    // Fonction pour forcer l'affichage du canvas
    function forceCanvasDisplay() {
        // Chercher tous les canvas dans le document
        const canvases = document.querySelectorAll('canvas');
        console.log(`📊 Trouvé ${canvases.length} canvas(s)`);
        
        canvases.forEach((canvas, index) => {
            if (canvas.style.display === 'none') {
                console.log(`🎯 Canvas ${index}: Affichage forcé (était caché)`);
                canvas.style.display = '';
                canvas.style.visibility = 'visible';
                canvas.style.opacity = '1';
            } else {
                console.log(`✅ Canvas ${index}: Déjà visible`);
            }
        });
        
        // Chercher aussi les éléments c3htmlwrap
        const htmlWraps = document.querySelectorAll('.c3htmlwrap');
        console.log(`📦 Trouvé ${htmlWraps.length} élément(s) c3htmlwrap`);
        
        htmlWraps.forEach((wrap, index) => {
            if (wrap.style.display === 'none') {
                console.log(`🎯 c3htmlwrap ${index}: Affichage forcé (était caché)`);
                wrap.style.display = '';
                wrap.style.visibility = 'visible';
                wrap.style.opacity = '1';
            } else {
                console.log(`✅ c3htmlwrap ${index}: Déjà visible`);
            }
        });
    }
    
    // Exécuter immédiatement
    forceCanvasDisplay();
    
    // Surveiller les changements du DOM pour détecter de nouveaux canvas
    const observer = new MutationObserver(function(mutations) {
        let shouldCheck = false;
        
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.tagName === 'CANVAS' || node.classList?.contains('c3htmlwrap')) {
                            shouldCheck = true;
                        }
                        // Vérifier aussi les enfants
                        if (node.querySelectorAll) {
                            const hasCanvas = node.querySelectorAll('canvas, .c3htmlwrap').length > 0;
                            if (hasCanvas) shouldCheck = true;
                        }
                    }
                });
            }
        });
        
        if (shouldCheck) {
            console.log("🔄 Nouveaux éléments détectés, vérification...");
            setTimeout(forceCanvasDisplay, 100); // Petit délai pour laisser le temps au DOM
        }
    });
    
    // Démarrer l'observation
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Vérifier périodiquement (au cas où)
    setInterval(forceCanvasDisplay, 2000);
    
    console.log("✅ Fix Canvas Display - Surveillance active");
})(); 