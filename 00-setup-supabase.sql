-- =========================================================
-- CONFIGURACIÓN INICIAL — pega esto en Supabase → SQL Editor → Run
-- =========================================================

-- 1) Tabla de perfiles (extiende a los usuarios de autenticación)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  role text default 'student' check (role in ('student','admin')),
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

-- 2) Función auxiliar para saber si el usuario actual es admin
--    (security definer evita el problema de recursión al consultar la misma tabla)
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  );
$$;

-- 3) Políticas de acceso para "profiles"
create policy "Ver mi propio perfil"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Admin ve todos los perfiles"
  on public.profiles for select
  using (public.is_admin());

create policy "Admin actualiza perfiles"
  on public.profiles for update
  using (public.is_admin());

-- 4) Trigger: cuando se crea un usuario nuevo (tú lo das de alta), se crea su perfil automáticamente
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, new.raw_user_meta_data->>'full_name', 'student');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 5) Tabla de progreso (un registro por alumno + ejercicio)
create table if not exists public.progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  exercise_id text not null,
  exercise_name text,
  status text default 'completed',
  score numeric,
  completed_at timestamptz default now(),
  unique (user_id, exercise_id)
);

alter table public.progress enable row level security;

create policy "Alumno ve su propio progreso"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "Alumno inserta su propio progreso"
  on public.progress for insert
  with check (auth.uid() = user_id);

create policy "Alumno actualiza su propio progreso"
  on public.progress for update
  using (auth.uid() = user_id);

create policy "Admin ve todo el progreso"
  on public.progress for select
  using (public.is_admin());

-- =========================================================
-- ÚLTIMO PASO (hazlo tú, manualmente, después de crear tu propia cuenta):
--
-- 1. Ve a Authentication → Users → Add user, crea TU cuenta (la del profesor)
-- 2. Copia tu UUID (aparece en la lista de usuarios)
-- 3. Ejecuta esto reemplazando el UUID:
--
--    update public.profiles set role = 'admin' where id = 'TU-UUID-AQUI';
--
-- =========================================================
