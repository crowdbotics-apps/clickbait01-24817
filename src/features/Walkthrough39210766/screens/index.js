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
      <View style={styles.View_0_159} />
      <View style={styles.View_0_160}>
        <View style={styles.View_I0_160_0_5699} />
        <View style={styles.View_I0_160_0_5700}>
          <View style={styles.View_I0_160_0_5700_0_5697} />
        </View>
        <View style={styles.View_I0_160_0_5701}>
          <Text style={styles.Text_I0_160_0_5701}>Start Explore</Text>
        </View>
      </View>
      <View style={styles.View_0_161}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab1d/4d34/f8ec80636942968aad791f75ca5f77fe"
          }}
          style={styles.ImageBackground_0_162}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdb/cc1b/5fe40ddd7618ec4fd443c36e2b272e88"
          }}
          style={styles.ImageBackground_0_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdb/cc1b/5fe40ddd7618ec4fd443c36e2b272e88"
          }}
          style={styles.ImageBackground_0_165}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdb/cc1b/5fe40ddd7618ec4fd443c36e2b272e88"
          }}
          style={styles.ImageBackground_0_166}
        />
      </View>
      <View style={styles.View_0_167}>
        <View style={styles.View_0_168}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad8/5642/1531ef8c94f7f56205aeb99792090a01"
            }}
            style={styles.ImageBackground_I0_168_0_5713}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0664/a649/c23e73f02bdb36d5595f51776f816ad3"
            }}
            style={styles.ImageBackground_I0_168_0_5716}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e4c/1c6e/c8c18df2b57c5c743668bfc759849381"
            }}
            style={styles.ImageBackground_I0_168_0_5719}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e4c/1c6e/c8c18df2b57c5c743668bfc759849381"
            }}
            style={styles.ImageBackground_I0_168_0_5722}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4988/d9c4/6a36c473ce0afffb0d9c891e2ecb8410"
            }}
            style={styles.ImageBackground_I0_168_0_5725}
          />
        </View>
        <View style={styles.View_0_169}>
          <Text style={styles.Text_0_169}>Self Improvement</Text>
        </View>
        <View style={styles.View_0_170}>
          <Text style={styles.Text_0_170}>
            Motivation And Your Personal Vision An Unbeatable Force
          </Text>
        </View>
        <View style={styles.View_0_171}>
          <Text style={styles.Text_0_171}>Create</Text>
        </View>
      </View>
      <View style={styles.View_0_172}>
        <View style={styles.View_I0_172_0_5777} />
        <View style={styles.View_I0_172_0_5778}>
          <Text style={styles.Text_I0_172_0_5778}>SKIP</Text>
        </View>
        <View style={styles.View_I0_172_0_5779}>
          <Text style={styles.Text_I0_172_0_5779}> </Text>
        </View>
        <View style={styles.View_I0_172_0_5781}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356f/d3a4/54158a0a2323fa83fa7cf77c2dcb2103"
            }}
            style={styles.ImageBackground_I0_172_0_5781_0_5265}
          />
          <View style={styles.View_I0_172_0_5781_0_5266}>
            <View style={styles.View_I0_172_0_5781_0_5266_0_4963} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_173}>
        <View style={styles.View_I0_173_0_5883}>
          <View style={styles.View_I0_173_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_173_0_5885}
          />
          <View style={styles.View_I0_173_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_173_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_173_0_5893}
        />
        <View style={styles.View_I0_173_0_5896}>
          <Text style={styles.Text_I0_173_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_174}>
        <View style={styles.View_I0_174_0_5913} />
      </View>
      <View style={styles.View_0_175}>
        <View style={styles.View_I0_175_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_159: {
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
  View_0_160: {
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
  View_I0_160_0_5699: {
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
  View_I0_160_0_5700: {
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
  View_I0_160_0_5700_0_5697: {
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
  View_I0_160_0_5701: {
    flexGrow: 1,
    width: 292,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_160_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_161: {
    width: 54,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161,
    top: 670
  },
  ImageBackground_0_162: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48
  },
  ImageBackground_0_164: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  ImageBackground_0_165: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_0_166: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_167: {
    width: 274,
    height: 251.60009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 260
  },
  View_0_168: {
    width: 80,
    height: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_168_0_5713: {
    flexGrow: 1,
    width: 69,
    height: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.236572265625,
    top: 20.236572265625
  },
  ImageBackground_I0_168_0_5716: {
    flexGrow: 1,
    width: 39,
    height: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.236572265625,
    top: 5.236572265625
  },
  ImageBackground_I0_168_0_5719: {
    flexGrow: 1,
    width: 60.21320343017578,
    height: 60.21320343017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.6300048828125,
    top: 9.630126953125
  },
  ImageBackground_I0_168_0_5722: {
    flexGrow: 1,
    width: 60.21320343017578,
    height: 60.21320343017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.6300048828125,
    top: 9.630126953125
  },
  ImageBackground_I0_168_0_5725: {
    flexGrow: 1,
    width: 60.21320343017578,
    height: 60.21320343017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.6300048828125,
    top: 9.630126953125
  },
  View_0_169: {
    width: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 159
  },
  Text_0_169: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_170: {
    width: 257,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 207.60009765625
  },
  Text_0_170: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_171: {
    width: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 110
  },
  Text_0_171: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_172: {
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
  View_I0_172_0_5777: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_172_0_5778: {
    flexGrow: 1,
    width: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 27.60009765625
  },
  Text_I0_172_0_5778: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_172_0_5779: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.60009765625
  },
  Text_I0_172_0_5779: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_172_0_5781: {
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
  ImageBackground_I0_172_0_5781_0_5265: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.76922607421875,
    top: 3.84619140625
  },
  View_I0_172_0_5781_0_5266: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.76922607421875,
    top: 3.84619140625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_172_0_5781_0_5266_0_4963: {
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
  View_0_173: {
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
  View_I0_173_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333251953125
  },
  View_I0_173_0_5884: {
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
  ImageBackground_I0_173_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_173_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_173_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.6937255859375,
    top: 17.33056640625
  },
  ImageBackground_I0_173_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 17.666748046875
  },
  View_I0_173_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.60009765625
  },
  Text_I0_173_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_174: {
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
  View_I0_174_0_5913: {
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
  View_0_175: {
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
  View_I0_175_0_5913: {
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
