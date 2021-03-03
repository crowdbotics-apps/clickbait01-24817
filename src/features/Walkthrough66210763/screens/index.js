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
      <View style={styles.View_0_103} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fde/8e51/315c9fa21f2e33174cffe9349490487a"
        }}
        style={styles.ImageBackground_0_104}
      />
      <View style={styles.View_0_105}>
        <View style={styles.View_I0_105_0_5699} />
        <View style={styles.View_I0_105_0_5700}>
          <View style={styles.View_I0_105_0_5700_0_5697} />
        </View>
        <View style={styles.View_I0_105_0_5701}>
          <Text style={styles.Text_I0_105_0_5701}>Get Started</Text>
        </View>
      </View>
      <View style={styles.View_0_106}>
        <View style={styles.View_0_107}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b144/4706/3aef1a8a0edc7d52deef4153b4cefbd8"
            }}
            style={styles.ImageBackground_0_108}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_0_110}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_0_111}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_0_112}
          />
        </View>
        <View style={styles.View_0_113}>
          <Text style={styles.Text_0_113}>Self Improvement</Text>
        </View>
        <View style={styles.View_0_114}>
          <Text style={styles.Text_0_114}>
            Motivation And Your Personal Vision An Unbeatable Force
          </Text>
        </View>
        <View style={styles.View_0_115}>
          <Text style={styles.Text_0_115}>Create</Text>
        </View>
      </View>
      <View style={styles.View_0_116}>
        <View style={styles.View_I0_116_0_5917} />
      </View>
      <View style={styles.View_0_117}>
        <View style={styles.View_I0_117_0_5898}>
          <View style={styles.View_I0_117_0_5899} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_I0_117_0_5900}
          />
          <View style={styles.View_I0_117_0_5901} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_I0_117_0_5904}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I0_117_0_5908}
        />
        <View style={styles.View_I0_117_0_5911}>
          <Text style={styles.Text_I0_117_0_5911}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_103: {
    width: 375,
    minWidth: 375,
    height: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  ImageBackground_0_104: {
    width: 375,
    minWidth: 375,
    height: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_0_105: {
    flexGrow: 1,
    width: 295,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 716,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_105_0_5699: {
    flexGrow: 1,
    width: 295,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_105_0_5700: {
    flexGrow: 1,
    width: 295,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_105_0_5700_0_5697: {
    flexGrow: 1,
    width: 295,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 181, 121, 1)"
  },
  View_I0_105_0_5701: {
    flexGrow: 1,
    width: 292,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_105_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_106: {
    width: 274,
    height: 193,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 323
  },
  View_0_107: {
    width: 54,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 187
  },
  ImageBackground_0_108: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48
  },
  ImageBackground_0_110: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  ImageBackground_0_111: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_0_112: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_113: {
    width: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49
  },
  Text_0_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_114: {
    width: 257,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 97.60009765625
  },
  Text_0_114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_115: {
    width: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 0
  },
  Text_0_115: {
    color: "rgba(247, 181, 121, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_116: {
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
  View_I0_116_0_5917: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_117: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_117_0_5898: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333251953125
  },
  View_I0_117_0_5899: {
    width: 22,
    height: 11.333333015441895,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_117_0_5900: {
    width: 1.328037977218628,
    height: 4,
    top: 3.666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_117_0_5901: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I0_117_0_5904: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.33056640625
  },
  ImageBackground_I0_117_0_5908: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.666748046875
  },
  View_I0_117_0_5911: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.60009765625
  },
  Text_I0_117_0_5911: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
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
