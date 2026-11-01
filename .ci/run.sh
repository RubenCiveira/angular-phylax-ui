#!/usr/bin/env bash
# Punto de entrada único para cualquier CI (GitHub, GitLab, Jenkins…) o en local.
#
# Uso:
#   .ci/run.sh                 instala y ejecuta todas las comprobaciones
#   .ci/run.sh lint-styles     ejecuta solo las indicadas (nombre del script sin .sh)
#   SKIP_INSTALL=1 .ci/run.sh  no instala dependencias (ya instaladas)
source "$(dirname "${BASH_SOURCE[0]}")/_common.sh"

CHECKS=(validate-config lint-styles)
[ "$#" -gt 0 ] && CHECKS=("$@")

[ -n "${SKIP_INSTALL:-}" ] || .ci/install.sh
for check in "${CHECKS[@]}"; do
  [ -f ".ci/$check.sh" ] || fail "No existe la comprobación: $check"
  ".ci/$check.sh"
done
step "CI correcto"
