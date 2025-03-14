import supabase from "../SuperbaseConfig/supabase";

export const registerUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { success: true, user: data.user };
  } catch (error) {
    return {
      success: false,
      message: "Incorrect email or password. Please try again.",
    };
  }
};

export const logoutUser = async () => {
  await supabase.auth.signOut();
};
