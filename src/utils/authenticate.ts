export const authenticate = async (email: string, password: string,url:string | undefined) => {
  try {
    return await (
      await fetch(`${url}/user/login`, {
        cache:'no-cache',
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
  } catch (err: any) {
    console.log(err.message);
    return err.message;
  }
};
