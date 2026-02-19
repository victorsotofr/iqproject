# iqproject

Projet Next.js (App Router) initialisé avec create-next-app.

## Démarrage rapide

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000.

## Debug frontend (écran blanc, styles cassés, rendu inattendu)

Si l'UI ne s'affiche pas correctement, suis cet ordre :

1. **Vérifier la branche et la synchro Git**

   ```bash
   git branch --show-current
   git pull
   ```

   > Si `npm run doctor` est "Missing script", tu n'es probablement pas sur la branche qui contient les derniers changements.

2. **Vérifier les prérequis**
   - Node.js 20+ recommandé (`node -v`)
   - Dépendances installées (`npm install`)

3. **Lancer le diagnostic local**

   ```bash
   npm run doctor
   ```

   Le script vérifie les points fréquents : version Node, présence du script doctor, déclaration Next, Tailwind, packages installés, etc.

4. **Nettoyer le cache et relancer**

   ```bash
   rm -rf .next node_modules
   npm install
   npm run dev
   ```

5. **Valider que le serveur répond**

   ```bash
   curl -I http://localhost:3000
   ```

   Un statut `200` confirme que Next sert bien la page.

6. **Si le serveur répond mais le rendu est “bizarre”**
   - Ouvre les DevTools navigateur (Console + Network).
   - Vérifie qu'aucune extension navigateur ne bloque les assets.
   - Force un hard refresh (`Cmd+Shift+R` / `Ctrl+F5`).
   - Teste en navigation privée.

## Scripts

- `npm run dev` : mode développement
- `npm run build` : build production
- `npm run start` : serveur après build
- `npm run lint` : lint ESLint
- `npm run doctor` : checks de diagnostic frontend
