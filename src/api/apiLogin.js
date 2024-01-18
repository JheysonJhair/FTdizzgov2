try {
    const response = await fetch("https://xgoobk.ccontrolz.com/user");
    const users = await response.json();

    const user = users.find(
      (user) => user.email == email && user.password == password
    );
    onHandleLogin(user.email, user.password);
    if (user) {
      const birthDate = new Date(user.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();

      if (age >= 16) {
        console.log("Ingreso!");
        setUserName(user.firstName);
        navigation.navigate("ProductCard", {
          userName: user.firstName,
          imgPerfil: user.profileImage,
        });
      } else {
        console.log("No eres mayor de 18 años.");
        toggleModal();
      }
    } else {
      console.log("Error de ingreso!");
      Alert.alert("Error de ingreso", "Create una cuenta!");
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }