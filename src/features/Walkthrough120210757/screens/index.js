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
      <View style={styles.View_0_3} />
      <View style={styles.View_0_4}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7037/70b0/eb270f5412e34ae050d46e91a69c1b78"
          }}
          style={styles.ImageBackground_0_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baaa/aa93/0e18862ee5140e36ae0825d605b12807"
          }}
          style={styles.ImageBackground_0_6}
        />
      </View>
      <View style={styles.View_0_7}>
        <View style={styles.View_0_8}>
          <Text style={styles.Text_0_8}>Happy Journey</Text>
        </View>
        <View style={styles.View_0_9}>
          <Text style={styles.Text_0_9}>Travel</Text>
        </View>
        <View style={styles.View_0_10}>
          <Text style={styles.Text_0_10}>
            Motivation And Your Personal Vision An Unbeatable Force
          </Text>
        </View>
        <View style={styles.View_0_11}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e69/7e6b/0eda2c0eb2e1891a45ad043d7eb5b430"
            }}
            style={styles.ImageBackground_0_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e69/7e6b/0eda2c0eb2e1891a45ad043d7eb5b430"
            }}
            style={styles.ImageBackground_0_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de3/9d82/774dd1d520421fd559f3bc93b467f6f3"
            }}
            style={styles.ImageBackground_0_14}
          />
        </View>
      </View>
      <View style={styles.View_0_16}>
        <View style={styles.View_I0_16_0_5777} />
        <View style={styles.View_I0_16_0_5778}>
          <Text style={styles.Text_I0_16_0_5778}>SKIP</Text>
        </View>
        <View style={styles.View_I0_16_0_5779}>
          <Text style={styles.Text_I0_16_0_5779}> </Text>
        </View>
        <View style={styles.View_I0_16_0_5781}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356f/d3a4/54158a0a2323fa83fa7cf77c2dcb2103"
            }}
            style={styles.ImageBackground_I0_16_0_5781_0_5265}
          />
          <View style={styles.View_I0_16_0_5781_0_5266}>
            <View style={styles.View_I0_16_0_5781_0_5266_0_4963} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_17}>
        <View style={styles.View_I0_17_0_5883}>
          <View style={styles.View_I0_17_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_17_0_5885}
          />
          <View style={styles.View_I0_17_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_17_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_17_0_5893}
        />
        <View style={styles.View_I0_17_0_5896}>
          <Text style={styles.Text_I0_17_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_18}>
        <View style={styles.View_I0_18_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_3: {
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
  View_0_4: {
    width: 290,
    height: 581,
    minHeight: 581,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 469
  },
  ImageBackground_0_5: {
    width: 253,
    height: 547.829345703125,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  ImageBackground_0_6: {
    width: 289.6952819824219,
    height: 581,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_7: {
    width: 274,
    height: 188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 231
  },
  View_0_8: {
    width: 274,
    minWidth: 274,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_0_8: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_9: {
    width: 65,
    minWidth: 65,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104
  },
  Text_0_9: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_10: {
    width: 257,
    minWidth: 257,
    top: 102.60009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8
  },
  Text_0_10: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_11: {
    width: 38,
    height: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 118,
    top: 182
  },
  ImageBackground_0_12: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  ImageBackground_0_13: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_0_14: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_16: {
    flexGrow: 1,
    width: 375,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 44,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_16_0_5777: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_16_0_5778: {
    flexGrow: 1,
    width: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 27.60009765625
  },
  Text_I0_16_0_5778: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_16_0_5779: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.60009765625
  },
  Text_I0_16_0_5779: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_16_0_5781: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_16_0_5781_0_5265: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.76904296875,
    top: 3.84619140625
  },
  View_I0_16_0_5781_0_5266: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.76904296875,
    top: 3.84619140625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_16_0_5781_0_5266_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_0_17: {
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
  View_I0_17_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333251953125
  },
  View_I0_17_0_5884: {
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
  ImageBackground_I0_17_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_17_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_17_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.33056640625
  },
  ImageBackground_I0_17_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.666748046875
  },
  View_I0_17_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.60009765625
  },
  Text_I0_17_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_18: {
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
  View_I0_18_0_5913: {
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
