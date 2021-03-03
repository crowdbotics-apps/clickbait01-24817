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
      <View style={styles.View_0_86} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3594/cb74/0db93dd7b4895a15c081c025cd15f00e"
        }}
        style={styles.ImageBackground_0_87}
      />
      <View style={styles.View_0_88}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b037/c3d1/81dc85b0e803ac9cba763d0f9e530a6a"
          }}
          style={styles.ImageBackground_I0_88_0_5745}
        />
      </View>
      <View style={styles.View_0_89}>
        <View style={styles.View_0_90}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b144/4706/3aef1a8a0edc7d52deef4153b4cefbd8"
            }}
            style={styles.ImageBackground_0_91}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_0_93}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_0_94}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a8/10bc/be9c266ab1d70af46c00b4aeee7660b4"
            }}
            style={styles.ImageBackground_0_95}
          />
        </View>
        <View style={styles.View_0_96}>
          <Text style={styles.Text_0_96}>
            Motivation And Your Personal Vision An Unbeatable Force
          </Text>
        </View>
        <View style={styles.View_0_97}>
          <Text style={styles.Text_0_97}>
            A Starter Guide To Self Improvement
          </Text>
        </View>
        <View style={styles.View_0_98}>
          <Text style={styles.Text_0_98}>The World</Text>
        </View>
      </View>
      <View style={styles.View_0_99}>
        <View style={styles.View_I0_99_0_5707} />
        <View style={styles.View_I0_99_0_5708}>
          <View style={styles.View_I0_99_0_5708_0_5681} />
        </View>
        <View style={styles.View_I0_99_0_5709}>
          <Text style={styles.Text_I0_99_0_5709}>Get Started</Text>
        </View>
      </View>
      <View style={styles.View_0_100}>
        <View style={styles.View_I0_100_0_5917} />
      </View>
      <View style={styles.View_0_101}>
        <View style={styles.View_I0_101_0_5898}>
          <View style={styles.View_I0_101_0_5899} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_I0_101_0_5900}
          />
          <View style={styles.View_I0_101_0_5901} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_I0_101_0_5904}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I0_101_0_5908}
        />
        <View style={styles.View_I0_101_0_5911}>
          <Text style={styles.Text_I0_101_0_5911}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_86: {
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
  ImageBackground_0_87: {
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
  View_0_88: {
    width: 80,
    height: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_88_0_5745: {
    flexGrow: 1,
    width: 73.70767974853516,
    height: 73.96603393554688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.906005859375,
    top: 2.9736328125
  },
  View_0_89: {
    width: 274,
    height: 182.5,
    minHeight: 182.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 483.5
  },
  View_0_90: {
    width: 54,
    minWidth: 54,
    height: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 176.5
  },
  ImageBackground_0_91: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48
  },
  ImageBackground_0_93: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  ImageBackground_0_94: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_0_95: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_96: {
    width: 257,
    minWidth: 257,
    top: 101.300048828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_0_96: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_97: {
    width: 274,
    minWidth: 274,
    top: 24.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_0_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_98: {
    width: 74,
    minWidth: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_98: {
    color: "rgba(247, 181, 121, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_99: {
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
  View_I0_99_0_5707: {
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
  View_I0_99_0_5708: {
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
  View_I0_99_0_5708_0_5681: {
    flexGrow: 1,
    width: 295,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_99_0_5709: {
    flexGrow: 1,
    width: 292,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_99_0_5709: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_100: {
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
  View_I0_100_0_5917: {
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
  View_0_101: {
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
  View_I0_101_0_5898: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333251953125
  },
  View_I0_101_0_5899: {
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
  ImageBackground_I0_101_0_5900: {
    width: 1.328037977218628,
    height: 4,
    top: 3.666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_101_0_5901: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I0_101_0_5904: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.33056640625
  },
  ImageBackground_I0_101_0_5908: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.666748046875
  },
  View_I0_101_0_5911: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.60009765625
  },
  Text_I0_101_0_5911: {
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
