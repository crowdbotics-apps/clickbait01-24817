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
      <View style={styles.View_0_177} />
      <View style={styles.View_0_178}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d23/2c70/420c514015ff3a571c0643747a22c9b3"
          }}
          style={styles.ImageBackground_0_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d23/2c70/420c514015ff3a571c0643747a22c9b3"
          }}
          style={styles.ImageBackground_0_180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9089/d901/8b250467e5a7671ac4bbd4d8cda42751"
          }}
          style={styles.ImageBackground_0_181}
        />
      </View>
      <View style={styles.View_0_183}>
        <View style={styles.View_I0_183_0_5699} />
        <View style={styles.View_I0_183_0_5700}>
          <View style={styles.View_I0_183_0_5700_0_5695} />
        </View>
        <View style={styles.View_I0_183_0_5701}>
          <Text style={styles.Text_I0_183_0_5701}>Next</Text>
        </View>
      </View>
      <View style={styles.View_0_184}>
        <Text style={styles.Text_0_184}>
          Motivation And Your Personal Vision An Unbeatable Force
        </Text>
      </View>
      <View style={styles.View_0_185}>
        <Text style={styles.Text_0_185}>Welcome</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cf8/2be2/291e7f946b2acb5229d7d58301690e0b"
        }}
        style={styles.ImageBackground_0_186}
      />
      <View style={styles.View_0_187}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b037/c3d1/81dc85b0e803ac9cba763d0f9e530a6a"
          }}
          style={styles.ImageBackground_I0_187_0_5745}
        />
      </View>
      <View style={styles.View_0_188}>
        <View style={styles.View_I0_188_0_5883}>
          <View style={styles.View_I0_188_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_188_0_5885}
          />
          <View style={styles.View_I0_188_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_188_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_188_0_5893}
        />
        <View style={styles.View_I0_188_0_5896}>
          <Text style={styles.Text_I0_188_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_189}>
        <View style={styles.View_I0_189_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_177: {
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
  View_0_178: {
    width: 38,
    minWidth: 38,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277,
    top: 736
  },
  ImageBackground_0_179: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  ImageBackground_0_180: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_0_181: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_183: {
    width: 129,
    minWidth: 129,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 716,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_183_0_5699: {
    flexGrow: 1,
    width: 129,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_183_0_5700: {
    flexGrow: 1,
    width: 129,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_183_0_5700_0_5695: {
    flexGrow: 1,
    width: 129,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_183_0_5701: {
    flexGrow: 1,
    width: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_183_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_184: {
    width: 257,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 568.5999755859375
  },
  Text_0_184: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_185: {
    width: 116,
    minWidth: 116,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 509
  },
  Text_0_185: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 31,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_186: {
    flexGrow: 1,
    width: 295,
    height: 457,
    top: 0,
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
  View_0_187: {
    width: 80,
    height: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 229,
    top: 420,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_187_0_5745: {
    flexGrow: 1,
    width: 73.70767974853516,
    height: 73.96603393554688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.90606689453125,
    top: 2.9736328125
  },
  View_0_188: {
    width: 375,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_188_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333251953125
  },
  View_I0_188_0_5884: {
    width: 22,
    height: 11.333333015441895,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_188_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_188_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_188_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.6937255859375,
    top: 17.33056640625
  },
  ImageBackground_I0_188_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 17.666748046875
  },
  View_I0_188_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.60009765625
  },
  Text_I0_188_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_189: {
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
  View_I0_189_0_5913: {
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
