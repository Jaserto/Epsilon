#!/bin/bash
set -e

ENVIRONMENT=$1

if [[ -z "$ENVIRONMENT" ]]; then
  echo "[x] Error: El comando run es requerido...saliendo"
  exit 1
fi

function error() {
    TOOL=$1
    URL=$2

    echo "[x] Error: $TOOL no esta instalado."
    echo "Por favor, instalalo en $URL"
    exit 1
}

echo "--- Preparing environment for $ENVIRONMENT ---"
echo "[?] Checking for required tools"

if [[ "$ENVIRONMENT" == "run" ]]; then
  if ! [ -x "$(command -v docker)" ]; then
    error "docker" "https://docs.docker.com/get-docker/"
  fi
fi


if [[ "$ENVIRONMENT" == "run" ]]; then

    FICHERO=/docker-compose.yaml
    if [ -d "$FICHERO" ]
    then
    echo "El fichero ${FICHERO} existe"
    else
    echo "El fichero ${FICHERO} no existe"
    fi
  echo "[*] Ejecutando docker..."
  docker-compose up
fi



echo "--- Hecho ---"