# 🦷 Odontograma Full - Frontend

## 🚀 Despliegue en Vercel

Este es el repositorio del frontend de la aplicación de odontograma, optimizado para despliegue en Vercel.

### 📋 Prerrequisitos

- Node.js 18+ 
- Cuenta de Vercel
- Base de datos MongoDB Atlas

### 🔧 Instalación Local

```bash
npm install
npm run dev
```

### 🌐 Despliegue

1. **Conectar a Vercel**
   - Importar este repositorio en Vercel
   - Configurar variables de entorno
   - Deploy automático

2. **Variables de Entorno Requeridas**
   ```env
   MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/odontograma
   JWT_SECRET=tu_jwt_secret_super_seguro_aqui
   NEXT_PUBLIC_API_URL=https://tu-app.vercel.app/api
   ```

### 📁 Estructura

```
src/
├── app/           # Páginas y API routes
├── components/    # Componentes React
├── lib/          # Utilidades y modelos
└── contexts/     # Contextos de React
```

### 🔗 URLs de Producción

- **Frontend**: `https://tu-app.vercel.app`
- **API**: `https://tu-app.vercel.app/api/*`
- **Odontograma**: `https://tu-app.vercel.app/odontograma`
- **Pacientes**: `https://tu-app.vercel.app/pacientes`
- **Citas**: `https://tu-app.vercel.app/citas`

### 📝 Notas

- La aplicación usa Next.js 14 con App Router
- API routes integradas en el frontend
- Conexión directa a MongoDB desde el frontend
- Optimizado para Vercel
# Consultorio1Od
