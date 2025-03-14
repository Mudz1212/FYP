import supabase from "../SuperbaseConfig/supabase";

const TABLE_NAME = "diaryentries";

export const addDiaryEntry = async (Title, Description) => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) throw new Error("User not authenticated");

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([{ Title, Description, UID: user.id }]);

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error("Supabase Insert Error:", error.message);
    return { success: false, message: error.message };
  }
};

export const getDiaryEntries = async () => {
  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) throw new Error("User not authenticated");

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .eq("UID", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Supabase Fetch Error:", error.message);
    return [];
  }
};

export const updateDiaryEntry = async (id, updatedFields) => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update(updatedFields)
      .eq("id", id);

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error("Supabase Update Error:", error.message);
    return { success: false, message: error.message };
  }
};

export const deleteDiaryEntry = async (id) => {
  try {
    const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error("Supabase Deletion Error:", error.message);
    return { success: false, message: error.message };
  }
};
