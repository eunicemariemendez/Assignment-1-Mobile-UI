import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Index = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.name}>Posts</Text>
        <Text style={styles.namesub}>curiocitycalgary</Text>
      </View>
      <ScrollView>
        <View style={styles.accountRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarImage}>CC</Text>
          </View>
          <Text style={styles.username}>curiocitycalgary</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.icon}>=</Text>
        </View>

        <Image
          source={{
            uri: "https://www.lifeincalgary.ca/assets/ImageTextElement/Life-in-Calgary/Lifestyle/WhatIsLifeInCalgary2__ScaleWidthWzEwMDBd.jpg",
          }}
          style={styles.image}
        />

        <View style={styles.dots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.actions}>
          <Text style={styles.icon}>♡</Text>
          <Text style={styles.icon}>○</Text>
          <Text style={styles.count}>1</Text>
          <Text style={styles.icon}>⟳</Text>
          <Text style={styles.count}>4</Text>
          <Text style={styles.icon}>➤</Text>
        </View>

        <View style={styles.caption}>
          <Text style={styles.text}>
            Liked by <Text style={styles.bold}>allysondennehy</Text> and{" "}
            <Text style={styles.bold}>others</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>curiocitycalgary</Text> Happy Monday, YYC
          </Text>
          <Text style={[styles.text, { marginTop: 12 }]}>
            From spooky season pop-ups to live shows and National...{" "}
            <Text style={styles.gray}>more</Text>
          </Text>
          <Text style={styles.time}>1 week ago</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Alert"
            color="#3897f0"
            onPress={() => Alert.alert("Alert Button pressed")}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Index;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0c1014",
  },
  header: {
    marginTop: 30,
    paddingTop: 12,
    paddingBottom: 10,
    backgroundColor: "#0c1014",
    borderBottomWidth: 2,
    borderBottomColor: "#212429",
  },
  name: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  namesub: {
    color: "#ffffff",
    fontSize: 13,
    textAlign: "center",
    marginTop: 2,
  },
  card: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 16,
    gap: 6,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#2a6fd6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  avatarImage: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
  username: { color: "#fff", fontSize: 15, fontWeight: "600" },

  image: {
    width: "100%",
    aspectRatio: 4 / 5,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 10,
  },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#555" },
  dotActive: { backgroundColor: "#5b7cfa" },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
  },
  icon: { color: "#fff", fontSize: 26 },
  count: { color: "#fff", fontSize: 15, marginRight: 6 },

  caption: { paddingHorizontal: 12, gap: 2 },
  text: { color: "#fff", fontSize: 14, lineHeight: 20 },
  bold: { fontWeight: "bold" },
  gray: { color: "#8e8e8e" },
  time: { color: "#8e8e8e", fontSize: 12, marginTop: 6 },

  buttonWrapper: {
    margin: 20,
  },
});
