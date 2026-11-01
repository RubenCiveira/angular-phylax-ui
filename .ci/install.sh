#!/usr/bin/env bash
# Instala las dependencias exactamente como están en pnpm-lock.yaml.
source "$(dirname "${BASH_SOURCE[0]}")/_common.sh"

step "Instalando dependencias"
pnpm install --frozen-lockfile
