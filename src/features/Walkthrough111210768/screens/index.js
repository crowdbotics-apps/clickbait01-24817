import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_191} />
      <View style={styles.View_0_192}>
        <View style={styles.View_I0_192_0_5699} />
        <View style={styles.View_I0_192_0_5700}>
          <View style={styles.View_I0_192_0_5700_0_5697} />
        </View>
        <View style={styles.View_I0_192_0_5701}>
          <Text style={styles.Text_I0_192_0_5701}>Sign In</Text>
        </View>
      </View>
      <View style={styles.View_0_193}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e69/7e6b/0eda2c0eb2e1891a45ad043d7eb5b430"
          }}
          style={styles.ImageBackground_0_194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e69/7e6b/0eda2c0eb2e1891a45ad043d7eb5b430"
          }}
          style={styles.ImageBackground_0_195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de3/9d82/774dd1d520421fd559f3bc93b467f6f3"
          }}
          style={styles.ImageBackground_0_196}
        />
      </View>
      <View style={styles.View_0_198}>
        <Text style={styles.Text_0_198}>
          A Starter Guide To Self Improvement
        </Text>
      </View>
      <View style={styles.View_0_199}>
        <Text style={styles.Text_0_199}>Create</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a02/36c3/047f158647f665d4a18ce256f628f048"
        }}
        style={styles.ImageBackground_0_200}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9324/c476/bd1059add09bda7cb2cc06b17f2b3640"
        }}
        style={styles.ImageBackground_0_201}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d00/0867/50356d1cc4d50c3dba55570740962e39"
        }}
        style={styles.ImageBackground_0_202}
      />
      <View style={styles.View_0_203}>
        <View style={styles.View_I0_203_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_191: {
    flexGrow: 1,
    width: 375,
    height: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_192: {
    width: 123,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 716,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_192_0_5699: {
    flexGrow: 1,
    width: 123,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_192_0_5700: {
    flexGrow: 1,
    width: 123,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_192_0_5700_0_5697: {
    flexGrow: 1,
    width: 123,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 181, 121, 1)"
  },
  View_I0_192_0_5701: {
    flexGrow: 1,
    width: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_192_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_193: {
    width: 38,
    height: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 169,
    top: 664
  },
  ImageBackground_0_194: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  ImageBackground_0_195: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_0_196: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_198: {
    width: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 553
  },
  Text_0_198: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_199: {
    width: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 155,
    top: 496
  },
  Text_0_199: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_200: {
    width: 295,
    minWidth: 295,
    height: 451,
    top: -51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 355,
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_0_201: {
    flexGrow: 1,
    width: 295,
    height: 456,
    top: -1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_0_202: {
    width: 295,
    minWidth: 295,
    height: 451,
    top: -51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -275,
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_0_203: {
    width: 134,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 778,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_203_0_5913: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
