# Proyecto Next.js

Este proyecto utiliza Next.js para crear aplicaciones React. Si encuentras el error "Module not found: Can't resolve 'react/jsx-dev-runtime'", sigue los pasos a continuación para solucionarlo.

## Solución de Problemas

### 1. Instalar `react` y `react-dom`

Asegúrate de que `react` y `react-dom` están instalados en tu proyecto. Ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install react react-dom
npm install next
rm -rf .next
npm install
npm run dev
