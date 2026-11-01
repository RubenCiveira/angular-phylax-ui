#!/usr/bin/env bash
# Stylelint protege los design tokens: sin hex, sin --mdc-*/--md-sys-*, sin .mat-mdc-* ni !important.
source "$(dirname "${BASH_SOURCE[0]}")/_common.sh"

step "Lint de estilos"
pnpm run lint:styles
