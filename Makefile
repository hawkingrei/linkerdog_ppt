NPM := npm --cache ./.npm-cache
PPTX_OUTPUT := linkerdog-bot-for-agent.pptx

.PHONY: install dev build pptx

install:
	$(NPM) install

dev:
	$(NPM) run dev

build:
	$(NPM) run build

pptx:
	TMPDIR=$${TMPDIR:-/tmp} npx slidev export --format pptx --output $(PPTX_OUTPUT)
