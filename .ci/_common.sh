#!/usr/bin/env bash
# Utilidades comunes de los scripts de CI: se ejecutan siempre desde la raíz del proyecto.
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."

step() { printf '\n>> %s\n' "$*"; }
fail() { printf 'ERROR: %s\n' "$*" >&2; exit 1; }
