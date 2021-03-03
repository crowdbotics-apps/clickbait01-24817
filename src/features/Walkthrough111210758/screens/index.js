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
      <View style={styles.View_0_20} />
      <View style={styles.View_0_21}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f7b/037a/5c44453b1bd7a1680ac745d28eab4683"
          }}
          style={styles.ImageBackground_0_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b00/ed53/3058e6c4e98cf703f49226dbd69500c3"
          }}
          style={styles.ImageBackground_0_23}
        />
      </View>
      <View style={styles.View_0_24} />
      <View style={styles.View_0_25} />
      <View style={styles.View_0_26}>
        <View style={styles.View_I0_26_0_5699} />
        <View style={styles.View_I0_26_0_5700}>
          <View style={styles.View_I0_26_0_5700_0_5697} />
        </View>
        <View style={styles.View_I0_26_0_5701}>
          <Text style={styles.Text_I0_26_0_5701}>Start Explore</Text>
        </View>
      </View>
      <View style={styles.View_0_27}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab1d/4d34/f8ec80636942968aad791f75ca5f77fe"
          }}
          style={styles.ImageBackground_0_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdb/cc1b/5fe40ddd7618ec4fd443c36e2b272e88"
          }}
          style={styles.ImageBackground_0_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdb/cc1b/5fe40ddd7618ec4fd443c36e2b272e88"
          }}
          style={styles.ImageBackground_0_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdb/cc1b/5fe40ddd7618ec4fd443c36e2b272e88"
          }}
          style={styles.ImageBackground_0_32}
        />
      </View>
      <View style={styles.View_0_33}>
        <View style={styles.View_0_34}>
          <Text style={styles.Text_0_34}>
            Motivation And Your Personal Vision An Unbeatable Force
          </Text>
        </View>
        <View style={styles.View_0_35}>
          <Text style={styles.Text_0_35}>Plan your life</Text>
        </View>
        <View style={styles.View_0_36}>
          <Text style={styles.Text_0_36}>Create</Text>
        </View>
      </View>
      <View style={styles.View_0_37}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b037/c3d1/81dc85b0e803ac9cba763d0f9e530a6a"
          }}
          style={styles.ImageBackground_I0_37_0_5745}
        />
      </View>
      <View style={styles.View_0_38}>
        <View style={styles.View_I0_38_0_5883}>
          <View style={styles.View_I0_38_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_38_0_5885}
          />
          <View style={styles.View_I0_38_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_38_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_38_0_5893}
        />
        <View style={styles.View_I0_38_0_5896}>
          <Text style={styles.Text_I0_38_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_39}>
        <View style={styles.View_I0_39_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_20: {
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
  View_0_21: {
    width: 226,
    height: 454,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 102
  },
  ImageBackground_0_22: {
    width: 196,
    height: 424.40533447265625,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  ImageBackground_0_23: {
    width: 226,
    height: 453.25555419921875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_24: {
    width: 375,
    height: 406,
    top: 406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_25: {
    width: 375,
    height: 89,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 317
  },
  View_0_26: {
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
  View_I0_26_0_5699: {
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
  View_I0_26_0_5700: {
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
  View_I0_26_0_5700_0_5697: {
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
  View_I0_26_0_5701: {
    flexGrow: 1,
    width: 292,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_26_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_27: {
    width: 54,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161,
    top: 670
  },
  ImageBackground_0_28: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48
  },
  ImageBackground_0_30: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  ImageBackground_0_31: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_0_32: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_33: {
    width: 274,
    height: 146.5999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 446
  },
  View_0_34: {
    width: 257,
    minWidth: 257,
    top: 102.5999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8
  },
  Text_0_34: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_35: {
    width: 274,
    minWidth: 274,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_0_35: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_36: {
    width: 65,
    minWidth: 65,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104
  },
  Text_0_36: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_37: {
    width: 80,
    height: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 325,
    top: 44,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_37_0_5745: {
    flexGrow: 1,
    width: 73.70753479003906,
    height: 73.9659652709961,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.90625,
    top: 2.9736328125
  },
  View_0_38: {
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
  View_I0_38_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333251953125
  },
  View_I0_38_0_5884: {
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
  ImageBackground_I0_38_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_38_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_38_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.33056640625
  },
  ImageBackground_I0_38_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.666748046875
  },
  View_I0_38_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.60009765625
  },
  Text_I0_38_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_39: {
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
  View_I0_39_0_5913: {
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
