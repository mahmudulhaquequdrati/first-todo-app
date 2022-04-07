import { useRef, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([
    { name: "Complete web developement", key: 1 },
    { name: "Start app development", key: 2 },
    { name: "Read the docs", key: 3 },
  ]);
  const todoInput = useRef();

  const addTodo = () => {
    if (text !== "" && text.length > 2) {
      const newTodos = [...tasks, { name: text, key: Math.random() }];
      setTasks(newTodos);
      todoInput.current.clear();
      Alert.alert("Success", "You have successfully add a new task");
    } else {
      Alert.alert("Erroe", "Please write at least 3 words");
    }
  };

  const deleteTodos = (id) => {
    const remaining = tasks.filter((task) => task.key !== id);
    setTasks(remaining);
  };

  const changeHandler = (value) => {
    setText(value);
  };
  return (
    <View style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.defaultBorder}>
          <View>
            <Text style={styles.heading}>Welcome Mahmud</Text>
            <Text style={styles.paragraph}>10 task pending</Text>
          </View>
          <View>
            <Image
              style={styles.imgLogo}
              source={require("./assets/logo.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.imgStyleDiv}>
          <Image
            style={styles.imgStyle}
            source={require("./assets/Business-failure-pana(2).png")}
          />
        </View>
        <View>
          <Text style={styles.addNewTask}>Add a New Task</Text>
          <TextInput
            ref={todoInput}
            onChangeText={changeHandler}
            placeholder="New Task..."
            style={styles.input}
          ></TextInput>
          <View>
            <AntDesign
              onPress={addTodo}
              style={{
                textAlign: "center",
                marginVertical: 10,
              }}
              name="pluscircleo"
              size={32}
              color="blue"
            ></AntDesign>
          </View>
        </View>
        {tasks.map((item) => (
          <View key={item.key}>
            <TouchableOpacity>
              <View style={styles.item}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  {item.name}
                </Text>
                <TouchableOpacity>
                  <AntDesign
                    name="delete"
                    color="white"
                    size={18}
                    style={{
                      width: 20,
                    }}
                    onPress={() => deleteTodos(item.key)}
                  ></AntDesign>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
    flex: 1,
  },
  item: {
    padding: 24,
    borderColor: "white",
    backgroundColor: "#4993FA",
    marginHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  defaultBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
  paragraph: {
    color: "gray",
  },
  imgLogo: {
    marginTop: 10,
    overflow: "hidden",
    width: 35,
    height: 35,
    borderRadius: 150,
  },
  imgStyleDiv: {
    marginBottom: 10,
  },
  imgStyle: {
    width: 150,
    marginLeft: "auto",
    marginRight: "auto",
    height: 150,
    borderRadius: 10,
    borderColor: "pink",
    borderWidth: 1,
  },
  input: {
    height: 50,
    marginHorizontal: 40,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderColor: "blue",
  },
  addNewTask: {
    marginHorizontal: 10,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 10,
  },
});
