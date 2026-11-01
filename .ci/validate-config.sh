#!/usr/bin/env bash
# phylax-config.json debe cumplir el schema, y el schema debe estar al día con AppConfig.
source "$(dirname "${BASH_SOURCE[0]}")/_common.sh"

step "Schema generado desde app-config.model.ts"
pnpm run config:schema
git diff --exit-code -- public/config/phylax-config.schema.json \
  || fail "phylax-config.schema.json no está al día: ejecuta 'pnpm run config:schema'"

step "Validando la configuración contra el schema"
pnpm run config:validate
