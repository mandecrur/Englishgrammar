// ============================================================
// Configuración de conexión — compartido por todas las páginas
// ============================================================
const SUPABASE_URL = "https://fzrjhchbzboiybnrclui.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6cmpoY2hiemJvaXlibnJjbHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyNjU1MTgsImV4cCI6MjEwMjg0MTUxOH0.TuBxPb8fR1u5xxFqA5fqJIAESbA-JXVDu0ivnE9SS7M";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---- Sesión ----
async function requireSession(redirectTo = "index.html") {
  const { data: { session } } = await client.auth.getSession();
  if (!session) {
    window.location.href = redirectTo;
    return null;
  }
  return session;
}

async function signOut() {
  await client.auth.signOut();
  window.location.href = "index.html";
}

// ---- Perfil / rol ----
async function getMyProfile() {
  const { data: { user } } = await client.auth.getUser();
  if (!user) return null;
  const { data, error } = await client
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  if (error) { console.error(error); return null; }
  return data;
}

// ---- Progreso del alumno ----
async function markExerciseComplete(exerciseId, exerciseName, score = null) {
  const { data: { user } } = await client.auth.getUser();
  if (!user) return { error: "No hay sesión activa" };
  return await client
    .from("progress")
    .upsert(
      {
        user_id: user.id,
        exercise_id: exerciseId,
        exercise_name: exerciseName,
        status: "completed",
        score,
        completed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,exercise_id" }
    );
}

async function getMyProgress() {
  const { data: { user } } = await client.auth.getUser();
  if (!user) return [];
  const { data, error } = await client
    .from("progress")
    .select("*")
    .eq("user_id", user.id);
  if (error) { console.error(error); return []; }
  return data;
}

// ---- Panel de administración ----
async function adminGetAllStudents() {
  const { data, error } = await client
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return data;
}

async function adminGetAllProgress() {
  const { data, error } = await client
    .from("progress")
    .select("*");
  if (error) { console.error(error); return []; }
  return data;
}
