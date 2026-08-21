# Cuaderno de ejercicios — sistema de acceso y seguimiento

## 1. Configurar la base de datos (una sola vez)
1. Entra a tu proyecto en supabase.com
2. Ve a **SQL Editor** → **New query**
3. Pega todo el contenido de `00-setup-supabase.sql` y presiona **Run**

## 2. Crear tu propia cuenta de administrador
1. Ve a **Authentication → Users → Add user**
2. Crea tu cuenta (email + contraseña), marca "Auto Confirm User"
3. Copia tu UUID de la lista de usuarios
4. Vuelve a **SQL Editor** y ejecuta:
   ```sql
   update public.profiles set role = 'admin' where id = 'TU-UUID-AQUI';
   ```

## 3. Dar de alta a tus alumnos
Por cada alumno: **Authentication → Users → Add user**, con su email y una
contraseña provisional (pídeles que la cambien luego desde su cuenta, o
compártela por un medio privado). Su perfil se crea automáticamente
gracias al trigger que instalaste en el paso 1.

## 4. Subir estos archivos a tu GitHub Pages
Sube toda esta carpeta (`index.html`, `dashboard.html`, `admin.html`,
la carpeta `shared/`) al mismo repositorio donde tienes tus ejercicios,
o a uno nuevo. La estructura debe mantenerse así:

```
tu-repo/
├── index.html          ← login
├── dashboard.html       ← menú del alumno
├── admin.html            ← panel del profesor
├── shared/
│   └── supabase-client.js
└── (tus ejercicios existentes...)
```

## 5. Añadir tus ejercicios al menú
Abre `dashboard.html` y edita la lista `EXERCISES` cerca del final del
archivo, con el nombre, categoría y enlace real de cada uno de tus
ejercicios.

## 6. (Opcional pero recomendado) Registrar el progreso automáticamente
Sigue las instrucciones en `track-snippet.html` para que cada ejercicio,
al completarse, guarde el resultado del alumno automáticamente. Si no
lo haces, el sistema funciona igual como login + menú, solo que el
progreso no se marcará solo.

## 7. Actualiza `admin.html`
Cambia la constante `TOTAL_EXERCISES` al inicio del script para que
coincida con la cantidad total de ejercicios que pusiste en
`dashboard.html`.

---

### Sobre seguridad
La clave que aparece en `shared/supabase-client.js` es la clave pública
("anon key") — está pensada para ir en el código del navegador y no
representa un riesgo. Los permisos reales están controlados por las
políticas de seguridad (RLS) que instalaste en el paso 1: cada alumno
solo puede leer y escribir su propio progreso, y solo tu cuenta de
administrador puede ver el de todos.
