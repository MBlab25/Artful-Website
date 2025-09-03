# Instrucciones para desplegar en OVH

## Pasos para preparar el código:

### 1. Construir para producción
```bash
npm run build
```
Esto creará una carpeta `dist/` con todos los archivos optimizados.

### 2. Archivos a subir a OVH
Sube **todo el contenido** de la carpeta `dist/` al directorio raíz de tu hosting OVH (generalmente `www/` o `public_html/`).

### 3. Configuración del servidor
- El archivo `.htaccess` ya está incluido para configurar el routing de la SPA
- Asegúrate de que tu hosting OVH tenga Apache con mod_rewrite habilitado

### 4. Dominio y DNS
- Configura tu dominio para apuntar a tu hosting OVH
- El sitio debería funcionar inmediatamente después de la subida

### 5. Verificación
Después del deploy, verifica que:
- ✅ La página principal carga correctamente
- ✅ La navegación entre secciones funciona
- ✅ Las imágenes se muestran correctamente
- ✅ El formulario de contacto funciona
- ✅ El sitio es responsive en móviles

### 6. SSL/HTTPS
- Activa el certificado SSL en el panel de OVH
- Esto es importante para SEO y seguridad

## Estructura de archivos en OVH:
```
www/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [imágenes]
└── robots.txt
```

## Comandos útiles:
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar el build localmente
- `npm run dev` - Desarrollo local

## Notas importantes:
- No subas la carpeta `src/`, `node_modules/`, ni archivos de desarrollo
- Solo sube el contenido de `dist/`
- El archivo `.htaccess` es crucial para que funcione el routing