#!/bin/bash

# bash start.sh accion ../.env dcbdincidencias.yml ($1-->up,down,config, $2, $3)
set -e

echo $1

if [[ $1 = "up" ]] 
then
    echo "Compilar ..."
    docker-compose --env-file $2 -f $3 up -d --build
elif [[ $1 = "down" ]] 
then
    echo "Apagar"
    docker-compose --env-file $2 -f $3 down
elif [[ $1 = "config" ]] 
then
    echo "Configurar"
    docker-compose --env-file $2 -f $3 config
fi

