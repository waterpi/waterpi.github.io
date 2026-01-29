# Makefile para el proyecto waterpi-web

# Variables
PM = pnpm

.PHONY: help install dev build preview lint deploy clean

help: ## Muestra este mensaje de ayuda
	@echo "Comandos disponibles:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Instala las dependencias del proyecto
	$(PM) install

dev: ## Inicia el servidor de desarrollo
	$(PM) run dev

build: ## Construye el proyecto para producción
	$(PM) run build

preview: ## Previsualiza la versión de producción localmente
	$(PM) run preview

lint: ## Ejecuta el linter para revisar el código
	$(PM) run lint

deploy: ## Despliega el proyecto en GitHub Pages
	$(PM) run deploy

clean: ## Limpia los archivos de construcción
	rm -rf dist
	rm -rf .vite
