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
      <View style={styles.View_0_119} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec08/94ca/1fb0ef7fbe90c81ac15f80e97b555f09"
        }}
        style={styles.ImageBackground_0_120}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec08/94ca/1fb0ef7fbe90c81ac15f80e97b555f09"
        }}
        style={styles.ImageBackground_0_121}
      />
      <View style={styles.View_0_122}>
        <View style={styles.View_I0_122_0_5699} />
        <View style={styles.View_I0_122_0_5700}>
          <View style={styles.View_I0_122_0_5700_0_5695} />
        </View>
        <View style={styles.View_I0_122_0_5701}>
          <Text style={styles.Text_I0_122_0_5701}>Start Explore</Text>
        </View>
      </View>
      <View style={styles.View_0_123}>
        <View style={styles.View_0_124}>
          <Text style={styles.Text_0_124}>
            A Starter Guide To Self Improvement
          </Text>
        </View>
        <View style={styles.View_0_125}>
          <Text style={styles.Text_0_125}>Create</Text>
        </View>
        <View style={styles.View_0_126}>
          <Text style={styles.Text_0_126}>
            Motivation And Your Personal Vision An Unbeatable Force
          </Text>
        </View>
        <View style={styles.View_0_127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab1d/4d34/f8ec80636942968aad791f75ca5f77fe"
            }}
            style={styles.ImageBackground_0_128}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdb/cc1b/5fe40ddd7618ec4fd443c36e2b272e88"
            }}
            style={styles.ImageBackground_0_130}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdb/cc1b/5fe40ddd7618ec4fd443c36e2b272e88"
            }}
            style={styles.ImageBackground_0_131}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdb/cc1b/5fe40ddd7618ec4fd443c36e2b272e88"
            }}
            style={styles.ImageBackground_0_132}
          />
        </View>
      </View>
      <View style={styles.View_0_133}>
        <View style={styles.View_I0_133_0_5883}>
          <View style={styles.View_I0_133_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_133_0_5885}
          />
          <View style={styles.View_I0_133_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_133_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_133_0_5893}
        />
        <View style={styles.View_I0_133_0_5896}>
          <Text style={styles.Text_I0_133_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_134}>
        <View style={styles.View_I0_134_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_119: {
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
  ImageBackground_0_120: {
    flexGrow: 1,
    width: 335,
    height: 406,
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
  ImageBackground_0_121: {
    width: 335,
    minWidth: 335,
    height: 406,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -315,
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_0_122: {
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
  View_I0_122_0_5699: {
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
  View_I0_122_0_5700: {
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
  View_I0_122_0_5700_0_5695: {
    flexGrow: 1,
    width: 295,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_122_0_5701: {
    flexGrow: 1,
    width: 292,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_122_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_123: {
    width: 295,
    height: 174.5999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 436
  },
  View_0_124: {
    width: 274,
    minWidth: 274,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_0_124: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_125: {
    width: 65,
    minWidth: 65,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_0_125: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_126: {
    width: 257,
    minWidth: 257,
    top: 130.5999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_0_126: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_127: {
    width: 54,
    minWidth: 54,
    height: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 241,
    top: 18
  },
  ImageBackground_0_128: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48
  },
  ImageBackground_0_130: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  ImageBackground_0_131: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_0_132: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_133: {
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
  View_I0_133_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333251953125
  },
  View_I0_133_0_5884: {
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
  ImageBackground_I0_133_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_133_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_133_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.33056640625
  },
  ImageBackground_I0_133_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.666748046875
  },
  View_I0_133_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.60009765625
  },
  Text_I0_133_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_134: {
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
  View_I0_134_0_5913: {
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
