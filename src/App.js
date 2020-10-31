import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { TextField } from "./FormFields";

const App = (props) => {
  const [form, setValues] = useState({
    form: {
      username: "",
      password: ""
    }
  });

  const printValues = (e) => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const onChangeValue = (name, value) => {
    console.log(name, value);
    setValues({ [name]: value });
  };

  return (
    <View style={styles.app}>
      <TextField
        name={"username"}
        value={form.username}
        onChangeText={onChangeValue}
        label={"user"}
      />

      <TextField
        value={form.password}
        name={"password"}
        type={"password"}
        onChangeText={onChangeValue}
        label={"passw"}
      />

      <Button onPress={printValues} name={"Submit"} />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
