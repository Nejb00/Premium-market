// Premium Market - Point d'entrée public (index.html)
// Orchestration des modules ES pour le catalogue

import '../css/main.css';

// Modules à side-effects (ordre important pour l'initialisation)
import './features/app/quick-filters.js';        // Filtres rapides (chips)
import './features/app/search-bar-bindings.js';  // Barre de recherche
import './features/app/click-delegation.js';     // Délégation des clics
import './features/app/app-init.js';             // Initialisation finale (panier, etc.)
