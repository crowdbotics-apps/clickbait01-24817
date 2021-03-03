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
      <View style={styles.View_0_41} />
      <View style={styles.View_0_42}>
        <Text style={styles.Text_0_42}>TERMS &amp; CONDITIONS</Text>
      </View>
      <View style={styles.View_0_43}>
        <View style={styles.View_0_44} />
        <View style={styles.View_0_45}>
          <View style={styles.View_I0_45_0_5699} />
          <View style={styles.View_I0_45_0_5700}>
            <View style={styles.View_I0_45_0_5700_0_5695} />
          </View>
          <View style={styles.View_I0_45_0_5701}>
            <Text style={styles.Text_I0_45_0_5701}>Sign Up</Text>
          </View>
        </View>
        <View style={styles.View_0_46}>
          <Text style={styles.Text_0_46}>
            How Great Is The Strength Of Your Belief
          </Text>
        </View>
        <View style={styles.View_0_47}>
          <Text style={styles.Text_0_47}>Use Your Reset Button To Change</Text>
        </View>
        <View style={styles.View_0_48}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad8/5642/1531ef8c94f7f56205aeb99792090a01"
            }}
            style={styles.ImageBackground_I0_48_0_5713}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0664/a649/c23e73f02bdb36d5595f51776f816ad3"
            }}
            style={styles.ImageBackground_I0_48_0_5716}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e4c/1c6e/c8c18df2b57c5c743668bfc759849381"
            }}
            style={styles.ImageBackground_I0_48_0_5719}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e4c/1c6e/c8c18df2b57c5c743668bfc759849381"
            }}
            style={styles.ImageBackground_I0_48_0_5722}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4988/d9c4/6a36c473ce0afffb0d9c891e2ecb8410"
            }}
            style={styles.ImageBackground_I0_48_0_5725}
          />
        </View>
      </View>
      <View style={styles.View_0_49}>
        <View style={styles.View_I0_49_0_5883}>
          <View style={styles.View_I0_49_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_49_0_5885}
          />
          <View style={styles.View_I0_49_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_49_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_49_0_5893}
        />
        <View style={styles.View_I0_49_0_5896}>
          <Text style={styles.Text_I0_49_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_50}>
        <View style={styles.View_I0_50_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_41: {
    flexGrow: 1,
    width: 375,
    height: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  View_0_42: {
    width: 129,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 123.5,
    top: 738
  },
  Text_0_42: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_43: {
    width: 295,
    height: 431,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 191
  },
  View_0_44: {
    width: 295,
    height: 431,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_45: {
    flexGrow: 1,
    width: 235,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 355,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_45_0_5699: {
    flexGrow: 1,
    width: 235,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_45_0_5700: {
    flexGrow: 1,
    width: 235,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_45_0_5700_0_5695: {
    flexGrow: 1,
    width: 235,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_45_0_5701: {
    flexGrow: 1,
    width: 232,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_45_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_46: {
    width: 205,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 284
  },
  Text_0_46: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_47: {
    width: 187,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 208
  },
  Text_0_47: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_48: {
    width: 80,
    minWidth: 80,
    height: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 47,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_48_0_5713: {
    flexGrow: 1,
    width: 69,
    height: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.23681640625,
    top: 20.236572265625
  },
  ImageBackground_I0_48_0_5716: {
    flexGrow: 1,
    width: 39,
    height: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.23681640625,
    top: 5.236572265625
  },
  ImageBackground_I0_48_0_5719: {
    flexGrow: 1,
    width: 60.21337890625,
    height: 60.213134765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.6298828125,
    top: 9.630126953125
  },
  ImageBackground_I0_48_0_5722: {
    flexGrow: 1,
    width: 60.21337890625,
    height: 60.213134765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.6298828125,
    top: 9.630126953125
  },
  ImageBackground_I0_48_0_5725: {
    flexGrow: 1,
    width: 60.21337890625,
    height: 60.213134765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.6298828125,
    top: 9.630126953125
  },
  View_0_49: {
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
  View_I0_49_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333251953125
  },
  View_I0_49_0_5884: {
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
  ImageBackground_I0_49_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_49_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_49_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.33056640625
  },
  ImageBackground_I0_49_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.666748046875
  },
  View_I0_49_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.60009765625
  },
  Text_I0_49_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_50: {
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
  View_I0_50_0_5913: {
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
