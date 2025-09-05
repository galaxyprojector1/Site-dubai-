# Tests MCP pour .

## 🚀 Utilisation rapide

```bash
# Test rapide avec configuration par défaut
node .mcp-tests/quick-test.js

# Test avec URL spécifique
node .mcp-tests/quick-test.js https://mon-site.com

# Screenshots responsive
node ../MCP-Toolkit/scripts/screenshots/responsive-test.js https://mon-site.com .mcp-tests/results/screenshots

# Test multi-navigateurs
node ../MCP-Toolkit/scripts/screenshots/multi-browser.js https://mon-site.com
```

## 📁 Structure

```
.mcp-tests/
├── config/          # Configuration du projet
├── results/         # Résultats des tests
│   ├── screenshots/ # Captures d'écran
│   └── reports/     # Rapports de tests
└── quick-test.js    # Script de test rapide
```

## 🛠️ Configuration

Modifier `.mcp-tests/config/project.json` pour personnaliser les tests.

---
Généré avec MCP-Toolkit v1.0.0
