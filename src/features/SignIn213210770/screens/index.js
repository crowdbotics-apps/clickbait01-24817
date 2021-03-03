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
      <View style={styles.View_0_367} />
      <View style={styles.View_0_368}>
        <View style={styles.View_0_369}>
          <View style={styles.View_I0_369_0_5699} />
          <View style={styles.View_I0_369_0_5700}>
            <View style={styles.View_I0_369_0_5700_0_5695} />
          </View>
          <View style={styles.View_I0_369_0_5701}>
            <Text style={styles.Text_I0_369_0_5701}>Sign In</Text>
          </View>
        </View>
        <View style={styles.View_0_370}>
          <View style={styles.View_0_371} />
          <View style={styles.View_0_372}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b07b/0d4b/1cdf9263d968af3da2d9426de7c64622"
              }}
              style={styles.ImageBackground_I0_372_0_5099}
            />
            <View style={styles.View_I0_372_0_5100}>
              <View style={styles.View_I0_372_0_5100_0_5681} />
            </View>
          </View>
        </View>
        <View style={styles.View_0_373}>
          <View style={styles.View_0_374} />
          <View style={styles.View_0_375}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad4/a1b7/62d3869eb2917eb193e56df10235ebcf"
              }}
              style={styles.ImageBackground_I0_375_0_5116}
            />
            <View style={styles.View_I0_375_0_5117}>
              <View style={styles.View_I0_375_0_5117_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_376}>
        <View style={styles.View_0_377}>
          <Text style={styles.Text_0_377}>FORGOT PASSWORD</Text>
        </View>
        <View style={styles.View_0_378}>
          <View style={styles.View_I0_378_0_5919} />
          <View style={styles.View_I0_378_0_5920} />
          <View style={styles.View_I0_378_0_5921}>
            <View style={styles.View_I0_378_0_5921_0_5068}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0b9/87e6/f0bbb4438b95e3e41ee3c845c4cd1531"
                }}
                style={styles.ImageBackground_I0_378_0_5921_0_5066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2356/72f3/3ca7269fb2097fb3c09f2b26dee7ad22"
                }}
                style={styles.ImageBackground_I0_378_0_5921_0_5067}
              />
            </View>
            <View style={styles.View_I0_378_0_5921_0_5069}>
              <View style={styles.View_I0_378_0_5921_0_5069_0_5689} />
            </View>
          </View>
          <View style={styles.View_I0_378_0_5922}>
            <Text style={styles.Text_I0_378_0_5922}> </Text>
          </View>
          <View style={styles.View_I0_378_0_5923}>
            <Text style={styles.Text_I0_378_0_5923}> </Text>
          </View>
          <View style={styles.View_I0_378_0_5924}>
            <Text style={styles.Text_I0_378_0_5924}>Password</Text>
          </View>
          <View style={styles.View_I0_378_0_5925}>
            <Text style={styles.Text_I0_378_0_5925}> </Text>
          </View>
          <View style={styles.View_I0_378_0_5926}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbdc/a451/e490a3a704bb278555239eb6a48000a6"
              }}
              style={styles.ImageBackground_I0_378_0_5926_0_5521}
            />
            <View style={styles.View_I0_378_0_5926_0_5522}>
              <View style={styles.View_I0_378_0_5926_0_5522_0_5689} />
            </View>
          </View>
        </View>
        <View style={styles.View_0_379}>
          <View style={styles.View_I0_379_0_5919} />
          <View style={styles.View_I0_379_0_5920} />
          <View style={styles.View_I0_379_0_5922}>
            <Text style={styles.Text_I0_379_0_5922}> </Text>
          </View>
          <View style={styles.View_I0_379_0_5923}>
            <Text style={styles.Text_I0_379_0_5923}> </Text>
          </View>
          <View style={styles.View_I0_379_0_5924}>
            <Text style={styles.Text_I0_379_0_5924}>E-Mail</Text>
          </View>
          <View style={styles.View_I0_379_0_5925}>
            <Text style={styles.Text_I0_379_0_5925}> </Text>
          </View>
          <View style={styles.View_I0_379_0_5926}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4b8/f109/710d47ca936dd4a98c03aa28038c4d2d"
              }}
              style={styles.ImageBackground_I0_379_0_5926_0_5624}
            />
            <View style={styles.View_I0_379_0_5926_0_5625}>
              <View style={styles.View_I0_379_0_5926_0_5625_0_5689} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_380} />
      <View style={styles.View_0_381} />
      <View style={styles.View_0_382}>
        <View style={styles.View_I0_382_0_5783} />
        <View style={styles.View_I0_382_0_5784}>
          <Text style={styles.Text_I0_382_0_5784}>Sign Up</Text>
        </View>
        <View style={styles.View_I0_382_0_5785}>
          <Text style={styles.Text_I0_382_0_5785}> </Text>
        </View>
        <View style={styles.View_I0_382_0_5787}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356f/d3a4/54158a0a2323fa83fa7cf77c2dcb2103"
            }}
            style={styles.ImageBackground_I0_382_0_5787_0_5265}
          />
          <View style={styles.View_I0_382_0_5787_0_5266}>
            <View style={styles.View_I0_382_0_5787_0_5266_0_5681} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_383}>
        <View style={styles.View_I0_383_0_5898}>
          <View style={styles.View_I0_383_0_5899} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_I0_383_0_5900}
          />
          <View style={styles.View_I0_383_0_5901} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_I0_383_0_5904}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I0_383_0_5908}
        />
        <View style={styles.View_I0_383_0_5911}>
          <Text style={styles.Text_I0_383_0_5911}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_384}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1407/dc82/a391016cb571a7aa3c5cb1a1b75ae47a"
          }}
          style={styles.ImageBackground_I0_384_0_5729}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52d9/d828/e5753685a6d5c320ae673f4ab8a3a881"
          }}
          style={styles.ImageBackground_I0_384_0_5732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a5/3685/d763272a8d53975dbaee5e62df06ae84"
          }}
          style={styles.ImageBackground_I0_384_0_5735}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a5/3685/d763272a8d53975dbaee5e62df06ae84"
          }}
          style={styles.ImageBackground_I0_384_0_5738}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3c7/fc83/c0902957cab2e09093033cd82b8130d8"
          }}
          style={styles.ImageBackground_I0_384_0_5741}
        />
      </View>
      <View style={styles.View_0_385}>
        <View style={styles.View_I0_385_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_367: {
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
  View_0_368: {
    flexGrow: 1,
    width: 295,
    height: 46,
    top: 716,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40
  },
  View_0_369: {
    flexGrow: 1,
    width: 183,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_369_0_5699: {
    flexGrow: 1,
    width: 183,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_369_0_5700: {
    flexGrow: 1,
    width: 183,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_369_0_5700_0_5695: {
    flexGrow: 1,
    width: 183,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_369_0_5701: {
    flexGrow: 1,
    width: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_369_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_370: {
    width: 46,
    minWidth: 46,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249,
    top: 0
  },
  View_0_371: {
    flexGrow: 1,
    width: 46,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 173, 242, 1)"
  },
  View_0_372: {
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_372_0_5099: {
    flexGrow: 1,
    width: 14.771622657775879,
    height: 12.290879249572754,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.615478515625,
    top: 2.4615478515625
  },
  View_I0_372_0_5100: {
    flexGrow: 1,
    width: 14.771622657775879,
    height: 12.290879249572754,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.615478515625,
    top: 2.4615478515625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_372_0_5100_0_5681: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_373: {
    width: 46,
    minWidth: 46,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 0
  },
  View_0_374: {
    flexGrow: 1,
    width: 46,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(52, 86, 162, 1)"
  },
  View_0_375: {
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_375_0_5116: {
    flexGrow: 1,
    width: 8.000304222106934,
    height: 13.538461685180664,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.6923828125,
    top: 1.23077392578125
  },
  View_I0_375_0_5117: {
    flexGrow: 1,
    width: 8.000304222106934,
    height: 13.538461685180664,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.6923828125,
    top: 1.23077392578125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_375_0_5117_0_5681: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_376: {
    flexGrow: 1,
    width: 375,
    height: 167,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 344
  },
  View_0_377: {
    width: 121,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127.5,
    top: 153
  },
  Text_0_377: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_378: {
    flexGrow: 1,
    width: 375,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 62,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_378_0_5919: {
    flexGrow: 1,
    width: 375,
    height: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_378_0_5920: {
    flexGrow: 1,
    width: 295,
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 61,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_I0_378_0_5921: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 21,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_378_0_5921_0_5068: {
    flexGrow: 1,
    width: 18.461538314819336,
    height: 13.846153259277344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.076904296875
  },
  ImageBackground_I0_378_0_5921_0_5066: {
    width: 18.46148681640625,
    height: 13.84619140625,
    top: 0.923095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.230712890625
  },
  ImageBackground_I0_378_0_5921_0_5067: {
    width: 6.153846263885498,
    height: 6.153846263885498,
    top: 3.84619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.15380859375
  },
  View_I0_378_0_5921_0_5069: {
    flexGrow: 1,
    width: 18.461538314819336,
    height: 13.846153259277344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.076904296875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_378_0_5921_0_5069_0_5689: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_I0_378_0_5922: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 22.5999755859375
  },
  Text_I0_378_0_5922: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_378_0_5923: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 22.5999755859375
  },
  Text_I0_378_0_5923: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_378_0_5924: {
    flexGrow: 1,
    width: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 22.5999755859375
  },
  Text_I0_378_0_5924: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_378_0_5925: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 22.5999755859375
  },
  Text_I0_378_0_5925: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_378_0_5926: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 21,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_378_0_5926_0_5521: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 17.692306518554688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.5384521484375
  },
  View_I0_378_0_5926_0_5522: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 17.692306518554688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_378_0_5926_0_5522_0_5689: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_379: {
    flexGrow: 1,
    width: 375,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_379_0_5919: {
    flexGrow: 1,
    width: 375,
    height: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_379_0_5920: {
    flexGrow: 1,
    width: 295,
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 61,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_I0_379_0_5922: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 22.5999755859375
  },
  Text_I0_379_0_5922: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_379_0_5923: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 22.5999755859375
  },
  Text_I0_379_0_5923: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_379_0_5924: {
    flexGrow: 1,
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 22.5999755859375
  },
  Text_I0_379_0_5924: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_379_0_5925: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 22.5999755859375
  },
  Text_I0_379_0_5925: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_379_0_5926: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 21,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_379_0_5926_0_5624: {
    flexGrow: 1,
    width: 17.69283103942871,
    height: 17.693283081054688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.15380859375,
    top: 1.15380859375
  },
  View_I0_379_0_5926_0_5625: {
    flexGrow: 1,
    width: 17.69283103942871,
    height: 17.693283081054688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.15380859375,
    top: 1.15380859375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_379_0_5926_0_5625_0_5689: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_380: {
    flexGrow: 1,
    width: 375,
    height: 294,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_0_381: {
    flexGrow: 1,
    width: 375,
    height: 294,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_382: {
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
  View_I0_382_0_5783: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_382_0_5784: {
    flexGrow: 1,
    width: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277,
    top: 28
  },
  Text_I0_382_0_5784: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_382_0_5785: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_382_0_5785: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_382_0_5787: {
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
  ImageBackground_I0_382_0_5787_0_5265: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625
  },
  View_I0_382_0_5787_0_5266: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_382_0_5787_0_5266_0_5681: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_383: {
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
  View_I0_383_0_5898: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_383_0_5899: {
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
  ImageBackground_I0_383_0_5900: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_383_0_5901: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I0_383_0_5904: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.3306884765625
  },
  ImageBackground_I0_383_0_5908: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.6666259765625
  },
  View_I0_383_0_5911: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_383_0_5911: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_384: {
    width: 80,
    height: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148,
    top: 145,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_384_0_5729: {
    flexGrow: 1,
    width: 69,
    height: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.236572265625,
    top: 20.236572265625
  },
  ImageBackground_I0_384_0_5732: {
    flexGrow: 1,
    width: 39,
    height: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.236572265625,
    top: 5.236572265625
  },
  ImageBackground_I0_384_0_5735: {
    flexGrow: 1,
    width: 60.21320343017578,
    height: 60.21320343017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.630126953125,
    top: 9.6300048828125
  },
  ImageBackground_I0_384_0_5738: {
    flexGrow: 1,
    width: 60.21320343017578,
    height: 60.21320343017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.630126953125,
    top: 9.6300048828125
  },
  ImageBackground_I0_384_0_5741: {
    flexGrow: 1,
    width: 60.21320343017578,
    height: 60.21320343017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.630126953125,
    top: 9.6300048828125
  },
  View_0_385: {
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
  View_I0_385_0_5913: {
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
