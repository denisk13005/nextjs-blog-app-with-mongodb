# test next et mongo avec dépoiement sur vercel !

reproduction d'un tuto disponible ici : <a>`https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/#setting-up-mongodb-using-mongodb-atlas`</a>


1) reproduction des pages pour le tuto 
2) config et installation dans le projet de mongoDb:
 - `npm install mongodb`
 - on va sur mongo db créer une bdd
 - on récupère nos id que l'on rentre dans un fichier .env.local sous MONGODB_URI
 - on renseigne les autres variables d'environnement 
3) configuration de mongodb dans le projet
 - on crée un dossier lib dans lequel on crée un fichier mongodb.js qui gérera la connection avec la bdd
 
4) on crée un fichier posts.js dans le dossier API pour configurer les différentes requêtes 
5) on crée les fonctions post put .... qui nous permettrons d'intéragir avec la bdd en fonction du corps de la requête envoyée sur /api/post (cors qui sera passé dans les paramètres de fetch !)