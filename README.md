# Site Web Dubai Business Setup 🏙️

Site web bilingue (FR/EN) professionnel pour services de création d'entreprise à Dubaï, ciblant les entrepreneurs francophones.

## 🌟 Caractéristiques Principales

### Design & UX
- **Mobile-first responsive** : Optimisé pour tous les appareils
- **Bilingue** : Français (langue principale) et Anglais
- **Design moderne** : Palette bleu corporate (#003366) et doré (#D4AF37)
- **Animations fluides** : Transitions et effets visuels engageants
- **Navigation intuitive** : Menu sticky et bouton WhatsApp flottant

### Pages Principales

1. **Accueil** (`index.html`)
   - Hero section avec vidéo de fond
   - Présentation des avantages de Dubaï
   - Aperçu des formules
   - Témoignages clients
   - Stats impressionnantes (90,000+ entrepreneurs)

2. **Nos Formules** (`formules.html`)
   - Comparatif détaillé Classique vs Premium
   - Grille de comparaison interactive
   - Processus en 6 étapes détaillé
   - FAQ spécifique aux formules
   - Ce qui est inclus dans chaque formule

3. **À Propos** (`apropos.html`)
   - Présentation de l'équipe d'experts
   - Mission et valeurs de l'entreprise
   - Témoignages détaillés avec métriques
   - Partenaires et certifications
   - 6 raisons de nous choisir

4. **Contact** (`contact.html`)
   - Formulaire multi-étapes intelligent
   - Système de prise de RDV intégré
   - Carte Google Maps interactive
   - Options de contact multiples (téléphone, WhatsApp, email)
   - FAQ contact

### Formules Proposées

#### Formule Classique - 6,470€
- Société opérationnelle en 10 jours
- Visa investisseur inclus
- Assistance bancaire dédiée
- Bureau virtuel premium

#### Formule Premium - 8,540€  
- Tous les avantages Classique +
- Traitement prioritaire (5 jours)
- Conseiller fiscal personnel
- Compte bancaire VIP
- Support famille (visas additionnels)

## 🚀 Installation et Utilisation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Python 3.x (pour le serveur de test local)

### Lancement du Site

1. **Option 1 : Ouvrir directement**
   ```
   Ouvrez simplement index.html dans votre navigateur
   ```

2. **Option 2 : Serveur local (recommandé)**
   ```bash
   python server.py
   ```
   Puis ouvrez http://localhost:8000 dans votre navigateur

### Structure des Fichiers

```
SITE KEVIN DUBAI/
├── index.html              # Page d'accueil
├── formules.html          # Page des formules
├── apropos.html           # Page à propos
├── contact.html           # Page contact
├── styles.css             # Feuille de style principale
├── script.js              # JavaScript (navigation, formulaires)
├── server.py              # Serveur de test Python
├── README.md              # Ce fichier
│
├── Image/                 # Images du site
│   ├── formation-clean-dubai.png.png
│   ├── handshake-clean-dubai.png.png
│   ├── hero-documents-clean-dubai.png.png
│   └── team-clean-dubai.png.png
│
├── Video/                 # Vidéos du site
│   ├── hero-dubai-timelapse.mp4
│   ├── services-handshake-dubai.mp4
│   └── success-formation-dubai.mp4
│
├── copywriting/          # Contenu marketing
│   ├── copywriting-chatgpt-dubai.txt
│   └── copywriting-gemini-dubai.txt
│
└── Recherches/           # Documentation marketing
    ├── Perplexity-anglais-dubai-Markdown.md
    └── Perplexity-francais-dubai-Markdown.md
```

## 💡 Fonctionnalités Techniques

### Changement de Langue
- Bouton de switch FR/EN dans la navigation
- Sauvegarde de la préférence dans localStorage
- Contenu entièrement traduit

### Formulaire Contact Multi-étapes
1. **Étape 1** : Informations personnelles
2. **Étape 2** : Informations sur le projet
3. **Étape 3** : Planification consultation

### Optimisations
- Lazy loading des images (data-lazy)
- Vidéo optimisée pour mobile (pause automatique)
- Animations basées sur Intersection Observer
- Compression des assets

### SEO
- Meta tags optimisés
- Structure sémantique HTML5
- URLs propres (/fr/ et /en/ prêtes pour routing)
- Schema.org ready

## 🎨 Personnalisation

### Couleurs (dans styles.css)
```css
--primary-blue: #003366;
--secondary-blue: #0066cc;
--gold: #D4AF37;
--gold-dark: #B8941F;
```

### Contact
- Téléphone : Modifier dans tous les fichiers HTML
- Email : Modifier contact@dubaibusiness.ae
- WhatsApp : Modifier le numéro dans les liens wa.me

### Images
Remplacer les placeholders par vos vraies images :
- Logos partenaires
- Photos de l'équipe
- Témoignages clients

## 📱 Responsive Breakpoints

- Desktop : > 992px
- Tablet : 768px - 992px
- Mobile : < 768px
- Small mobile : < 576px

## 🔧 Maintenance

### Ajouter un Témoignage
1. Ouvrir le fichier HTML concerné
2. Dupliquer un bloc testimonial-card
3. Modifier le contenu

### Modifier les Prix
1. Rechercher "6,470" ou "8,540" dans les fichiers
2. Remplacer par les nouveaux tarifs

### Ajouter une FAQ
1. Dupliquer un bloc faq-item
2. Modifier la question et la réponse

## 📞 Support

Pour toute question sur le site :
- Documentation des recherches dans `/Recherches/`
- Copywriting optimisé dans `/copywriting/`

## 🎯 Objectifs de Conversion

Le site est optimisé pour :
1. **Générer des demandes de devis**
2. **Encourager les appels téléphoniques**
3. **Maximiser les contacts WhatsApp**
4. **Présenter clairement les 2 formules**
5. **Inspirer confiance** (témoignages, certifications)

## 🚀 Prochaines Étapes

1. Remplacer les images placeholder
2. Configurer un vrai numéro WhatsApp
3. Intégrer Google Analytics
4. Connecter à un CRM
5. Ajouter un système de paiement en ligne
6. Implémenter un vrai système de calendrier (Calendly)

---

💼 **Créé pour** : Services de création d'entreprise à Dubaï
🎯 **Public cible** : Entrepreneurs francophones
🌍 **Langues** : Français (principal) + Anglais
📱 **Mobile-first** : 100% responsive 