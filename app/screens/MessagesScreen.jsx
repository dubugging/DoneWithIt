import { FlatList, StyleSheet, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";

const MessagesScreen = () => {
  const [refresh, setRefresh] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/mosh.jpg"),
    },
  ]);

  const deleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <>
      <ExpoStatusBar style="auto" />
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              image={item.image}
              title={item.title}
              subTitle={item.description}
              onPress={() => {}}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => deleteMessage(item.id)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refresh}
          onRefresh={() =>
            setMessages([
              {
                id: 1,
                title: "T1",
                description: "D1",
                image: require("../assets/mosh.jpg"),
              },
              {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../assets/mosh.jpg"),
              },
              {
                id: 3,
                title: "T3",
                description: "D3",
                image: require("../assets/mosh.jpg"),
              },
            ])
          }
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  listView: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
