# -------------------- GIT LESSON -------------------- #


# -------------------- CONFIGURATION -------------------- #

# Afficher la version de GIT installée sur le système.

git -v | git version

# Configurer le nom de l'utilisateur et son e-mail (obligatoire)

git config --global user.mail "exemple@gmail.com"
git config --global user.name "Exemple"

# Configurer git pour qu'il colore la sortie de la console.

git config --global color.ui true

# Ouvrir le fichier de configuration global de git.

git config --global --edit

# Configurer l'editeur de texte par defaut utilisé par Git.

git config --global core.edit "code --wait"


# -------------------- Initialisation de projet -------------------- #

# Crée un nouveau dépo Git.

git init

# Affiche l'état de suivis des fichiers.

git status


# -------------------- COMMIT -------------------- #

# Ajoute un ou des fichiers modifier à la staging area pour préparer un commit.

git add <nom_fichier> | git add .

# Enregister les modifications dans la staging area en créant un nouveau commit avec un message spécifique.

git commit -m "message spécifique"

# Modifie le dernier commit

git commit --amend -m "message spécifique"

# Affiche l'historique des commits.

git log

# Affiche l'historique des commits en version raccourcis.

git log --oneline

# Permet de se deplacer vers un commit spécifique en utilisant son identifiant.

git chekout <id_du_commit>

# Permet de revenir au dernier commit.

git chekout <nom_de_la_branche>


# -------------------- Les branches -------------------- #

# Afficher la listes des branches.

git branch

# Créé une nouvelle branche.

git branch <nom_de_la_branche>

# Changer de branche.

git switch <nom_de_la_branche>

# Fusionne les modifications de la branche spécifié sur la branche actuelle.

git merge <nom_de_la_branche>

# Renommer la branche actuelle avec un nouveau nom.

git branch -m nom_branche

# Renommer une branche.

git branch -m <ancien_nom> <nouveau_nom>

# Supprimer une branche spécifique

git branch -d nom_branche # pour supprimer une branche spécifique je ne dois pas me situer sur cette branche. 

# -------------------- Restores -------------------- #

# Restaurer le fichier à l'état du dernier commit.

git restore nom_fichier

# Supprime le fichier spécifier de la staging area, le retirant de la préparation pour le commit.

git restore --staged nom_fichier

# Crée un nouveau commit 

gi revert id_commit