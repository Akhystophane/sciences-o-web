# TODO — Sciences Ô Website

## Données à compléter

### Mentorat (carte dépliable)
- [ ] Renseigner le nombre de lycéens accompagnés cette année (stat affichée `—`)
- [ ] Renseigner le nombre d'établissements partenaires (stat affichée `—`)
- [ ] Mettre à jour la liste des lycées visités si souhaitée

### Semaine Outre-Mer — événements à confirmer
- [ ] **Atelier linguistique (lundi)** — horaire à confirmer, accès libre ou inscription ?
- [ ] **Masterclass rhum & marché culinaire (mardi)** — validation définitive
- [ ] **Atelier maré tèt (mardi)** — confirmation finale
- [ ] **Atelier culinaire (mardi)** — en attente des précisions du chef Raymond (fournitures, budget, horaire)
- [ ] **Prestation Otantika (mardi)** — confirmation
- [ ] **Atelier tatouage polynésien (mardi)** — validation budget (devis existe, tensions en cours)
- [ ] **Village des créateurs (mercredi)** — confirmer les 5 exposants (Metronhomme, WIP, OBP, Sublime Kyupiik, Atelier Mikish) : noms publiables ?
- [ ] **Performance de danse (mercredi)** — confirmer Soamako / Ofa Mako et horaire exact
- [ ] **Conférence musique (mercredi)** — trouver le profil académique complémentaire
- [ ] **Exposition photographique (jeudi)** — confirmation
- [ ] **Espace documentaire & quiz (jeudi)** — confirmation
- [ ] **Performance musicale (vendredi 18h30)** — à confirmer
- [ ] **Grande conférence "La vie chère" (vendredi)** — libre ou inscription selon jauge ?

### Formulaires d'inscription
- [ ] **Ciné-lunch (jeudi)** — remplacer le lien HelloAsso placeholder par le vrai lien
- [ ] **Atelier tatouage polynésien** — créer le formulaire d'inscription quand confirmé
- [ ] **Atelier linguistique** — créer le formulaire si jauge limitée
- [ ] **Conférence "La vie chère"** — préciser accès libre ou inscription

---

## Technique

### PDFs trop lourds pour GitHub Pages
- [ ] **Livret de présentation (31 MB)** — héberger sur S3 / Cloudflare R2 / Google Drive et mettre à jour le lien dans `App.tsx` (section À propos, bouton Download)
- [ ] **Newsletter 2025-2026 (25 MB)** — même chose, mettre à jour le lien dans `App.tsx` (section Nos Actions, bouton Newspaper)
- [ ] Une fois hébergés, supprimer les deux PDFs de `public/` pour alléger le repo

### Fichiers inutilisés à supprimer
- [ ] `web/src/pages/Association.tsx` — page créée puis abandonnée, non reliée au router

---

## Contenu à enrichir

### Section "À propos"
- [ ] Ajouter les noms des co-présidents 2025-2026 (Maéva Cadéroly & Philippe Legrix)
- [ ] Ajouter une sous-section "Ils nous ont fait confiance" (parrains + partenaires clés) si souhaité

### Cartes dépliables "Nos Actions"
- [ ] Enrichir la carte **Accueil des admis** avec des exemples d'afterworks passés
- [ ] Enrichir la carte **Partenariats** avec des logos si disponibles
- [ ] Vérifier que la liste des partenaires dans la carte est à jour

### Galerie photos
- [ ] Vérifier que toutes les photos utilisées sont libres de droits / autorisées pour publication web
- [ ] Ajouter des légendes ou alt-texts plus précis si nécessaire

---

## SEO & déploiement

- [ ] Vérifier / compléter les balises `<title>` et `<meta description>` dans `index.html`
- [ ] Ajouter des Open Graph tags (og:title, og:image, og:description) pour le partage sur réseaux sociaux
- [ ] Tester le site sur mobile (responsive check complet)
- [ ] Vérifier les mentions légales — sont-elles à jour pour 2025-2026 ?
- [ ] Tester le déploiement GitHub Pages après suppression des PDFs lourds
