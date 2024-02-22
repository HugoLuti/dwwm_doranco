i=1

resultat=30

# Genere un nombre au hasard entre 1 et 100
# randoom_number est un nombre au hasard entre 1 et 100
randoom_number=$((1 + RANDOM % 100))

# Ici je rentre dans une boucle infini
while [ $i -eq 1 ]
do
    # Ici je vais demander a l'utilisateur de trouver la valeur de resultat
    echo "Quelle est la valeur du nombre aléatoire ?"
    read 
    if [ $REPLY -eq $randoom_number ]
    then
        echo "Bien joué !"
        break
    
    elif [ $REPLY -gt $rendom_number ]
    then
        echo "Mauvaise réponse, c'est moins !"
    
    elif [ $REPLY -lt $randoom_number ]
    then
        echo "Mauvaise réponse, c'est plus !"
    fi
done