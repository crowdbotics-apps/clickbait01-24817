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
      <View style={styles.View_0_599} />
      <View style={styles.View_0_600}>
        <View style={styles.View_0_601}>
          <View style={styles.View_0_602} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d439/a06f/53259fbf2527fdea174f95d22fb30f6e"
            }}
            style={styles.ImageBackground_0_603}
          />
          <View style={styles.View_0_604}>
            <Text style={styles.Text_0_604}>Ok, see u later</Text>
          </View>
        </View>
        <View style={styles.View_0_605}>
          <Text style={styles.Text_0_605}>Just now</Text>
        </View>
      </View>
      <View style={styles.View_0_606}>
        <View style={styles.View_0_607}>
          <Text style={styles.Text_0_607}>20:11</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2244/7388/52a7681bcf070d439c23eadedaf97d02"
          }}
          style={styles.ImageBackground_0_608}
        />
        <View style={styles.View_0_609}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3037/4cd6/ab2667887961db542c4693af0772f576"
            }}
            style={styles.ImageBackground_0_610}
          />
          <View style={styles.View_0_611}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7cc/bbfc/85111480b58da16aacb33b98f5d0e5a8"
              }}
              style={styles.ImageBackground_I0_611_0_5012}
            />
            <View style={styles.View_I0_611_0_5013}>
              <View style={styles.View_I0_611_0_5013_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_612}>
        <View style={styles.View_0_613}>
          <View style={styles.View_0_614} />
          <View source={{ uri: "null" }} style={styles.View_0_615} />
          <View style={styles.View_0_616}>
            <Text style={styles.Text_0_616}>
              At beach now and gonna take some pics
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_617}>
        <View style={styles.View_0_618}>
          <View style={styles.View_0_619} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b00/a824/1af36ec7c0f5fa0b81c08e701fa78ff4"
            }}
            style={styles.ImageBackground_0_620}
          />
          <View source={{ uri: "null" }} style={styles.View_0_621} />
          <View style={styles.View_0_622}>
            <Text style={styles.Text_0_622}>Deal!</Text>
          </View>
          <View style={styles.View_0_623}>
            <Text style={styles.Text_0_623}>20:12</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_624}>
        <View style={styles.View_0_625}>
          <Text style={styles.Text_0_625}>20:10</Text>
        </View>
        <View style={styles.View_0_626}>
          <View style={styles.View_0_627} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d439/a06f/53259fbf2527fdea174f95d22fb30f6e"
            }}
            style={styles.ImageBackground_0_628}
          />
          <View style={styles.View_0_629}>
            <Text style={styles.Text_0_629}>I m coming and where r u now?</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_630}>
        <View style={styles.View_0_631} />
        <View style={styles.View_0_632}>
          <View style={styles.View_0_633} />
          <View style={styles.View_0_634}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb10/f9fe/2fae1c00b379cb558a083ebb6b32a9ab"
              }}
              style={styles.ImageBackground_I0_634_0_5009}
            />
            <View style={styles.View_I0_634_0_5010}>
              <View style={styles.View_I0_634_0_5010_0_5689} />
            </View>
          </View>
          <View style={styles.View_0_635} />
          <View style={styles.View_0_636}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed62/7c76/f1d1d1d95fa5092138108b069874cb77"
              }}
              style={styles.ImageBackground_I0_636_0_5441}
            />
            <View style={styles.View_I0_636_0_5444}>
              <View style={styles.View_I0_636_0_5444_0_5689} />
            </View>
          </View>
          <View style={styles.View_0_637}>
            <Text style={styles.Text_0_637}>Type a message</Text>
          </View>
          <View style={styles.View_0_638} />
          <View style={styles.View_0_639}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd99/96be/c402f17257fc553faf503de351ccddc1"
              }}
              style={styles.ImageBackground_I0_639_0_5242}
            />
            <View style={styles.View_I0_639_0_5244}>
              <View style={styles.View_I0_639_0_5244_0_5689} />
            </View>
          </View>
          <View style={styles.View_0_640} />
        </View>
      </View>
      <View style={styles.View_0_641}>
        <View style={styles.View_0_642}>
          <View style={styles.View_I0_642_0_5763} />
          <View style={styles.View_I0_642_0_5764}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89aa/357f/06a0261f6a306dc88061420bd0c7425b"
              }}
              style={styles.ImageBackground_I0_642_0_5764_0_5326}
            />
            <View style={styles.View_I0_642_0_5764_0_5328}>
              <View style={styles.View_I0_642_0_5764_0_5328_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_642_0_5765}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bf0/3add/dae1f4e3dba8e2d3fed7b3de2bc45c89"
              }}
              style={styles.ImageBackground_I0_642_0_5765_0_5151}
            />
            <View style={styles.View_I0_642_0_5765_0_5152}>
              <View style={styles.View_I0_642_0_5765_0_5152_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_642_0_5766}>
            <Text style={styles.Text_I0_642_0_5766}> </Text>
          </View>
          <View style={styles.View_I0_642_0_5768}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356f/d3a4/54158a0a2323fa83fa7cf77c2dcb2103"
              }}
              style={styles.ImageBackground_I0_642_0_5768_0_5265}
            />
            <View style={styles.View_I0_642_0_5768_0_5266}>
              <View style={styles.View_I0_642_0_5768_0_5266_0_4963} />
            </View>
          </View>
        </View>
        <View style={styles.View_0_643}>
          <View style={styles.View_0_644}>
            <Text style={styles.Text_0_644}>online</Text>
          </View>
          <View style={styles.View_0_645}>
            <Text style={styles.Text_0_645}>Helena Barnes</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e283/0250/86007cd501738000301773c727d27540"
            }}
            style={styles.ImageBackground_0_646}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c844/c02b/32c6496b26e97f595ed9c845bbbec83e"
            }}
            style={styles.ImageBackground_0_647}
          />
        </View>
      </View>
      <View style={styles.View_0_650}>
        <View style={styles.View_I0_650_0_5913} />
      </View>
      <View style={styles.View_0_651}>
        <View style={styles.View_I0_651_0_5883}>
          <View style={styles.View_I0_651_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_651_0_5885}
          />
          <View style={styles.View_I0_651_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_651_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_651_0_5893}
        />
        <View style={styles.View_I0_651_0_5896}>
          <Text style={styles.Text_I0_651_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_599: {
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
  View_0_600: {
    width: 144,
    minWidth: 144,
    height: 72.80000305175781,
    minHeight: 72.80000305175781,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 522
  },
  View_0_601: {
    width: 144,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_602: {
    width: 134,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    backgroundColor: "rgba(247, 248, 250, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0
  },
  ImageBackground_0_603: {
    width: 10,
    height: 10,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_604: {
    width: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 12.5999755859375
  },
  Text_0_604: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_605: {
    width: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 50.79998779296875
  },
  Text_0_605: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_606: {
    width: 233,
    minWidth: 233,
    height: 184.8000030517578,
    minHeight: 184.8000030517578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112,
    top: 321
  },
  View_0_607: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186,
    top: 162.79998779296875
  },
  Text_0_607: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_608: {
    width: 233,
    height: 154,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover"
  },
  View_0_609: {
    width: 46,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 54
  },
  ImageBackground_0_610: {
    width: 46,
    height: 46,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_611: {
    width: 16,
    height: 16,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_611_0_5012: {
    flexGrow: 1,
    width: 9.846153259277344,
    height: 12.30769157409668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.3077392578125,
    top: 1.84613037109375
  },
  View_I0_611_0_5013: {
    flexGrow: 1,
    width: 9.846153259277344,
    height: 12.30769157409668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.3077392578125,
    top: 1.84613037109375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_611_0_5013_0_5681: {
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
  View_0_612: {
    width: 209,
    minWidth: 209,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 247
  },
  View_0_613: {
    width: 209,
    height: 64,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_614: {
    width: 199,
    height: 64,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(100, 120, 211, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10
  },
  View_0_615: {
    width: 10,
    height: 10,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199
  },
  View_0_616: {
    width: 159,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 12.5999755859375
  },
  Text_0_616: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_617: {
    width: 123,
    minWidth: 123,
    height: 72.80000305175781,
    minHeight: 72.80000305175781,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 633
  },
  View_0_618: {
    width: 123,
    height: 72.80000305175781,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_619: {
    width: 84,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    backgroundColor: "rgba(100, 120, 211, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10
  },
  ImageBackground_0_620: {
    width: 9,
    height: 9,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_621: {
    width: 10,
    height: 10,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113
  },
  View_0_622: {
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49,
    top: 12.5999755859375
  },
  Text_0_622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_623: {
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 50.79998779296875
  },
  Text_0_623: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_624: {
    width: 196,
    minWidth: 196,
    height: 94.80000305175781,
    minHeight: 94.80000305175781,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 136
  },
  View_0_625: {
    width: 65,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 72.800048828125
  },
  Text_0_625: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_626: {
    width: 196,
    minWidth: 196,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_627: {
    width: 186,
    minWidth: 186,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0
  },
  ImageBackground_0_628: {
    width: 10,
    minWidth: 10,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 54
  },
  View_0_629: {
    width: 156,
    minWidth: 156,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 12.5999755859375
  },
  Text_0_629: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_630: {
    flexGrow: 1,
    width: 375,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 738
  },
  View_0_631: {
    width: 375,
    height: 74,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_632: {
    flexGrow: 1,
    width: 375,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_633: {
    flexGrow: 1,
    width: 375,
    height: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_634: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 333,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_634_0_5009: {
    flexGrow: 1,
    width: 14.384615898132324,
    height: 20.730770111083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.8077392578125,
    top: 0.84613037109375
  },
  View_I0_634_0_5010: {
    flexGrow: 1,
    width: 14.384615898132324,
    height: 20.730770111083984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.8077392578125,
    top: 0.84613037109375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_634_0_5010_0_5689: {
    flexGrow: 1,
    width: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_635: {
    width: 1,
    minWidth: 1,
    height: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 312,
    top: 10,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_636: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_636_0_5441: {
    flexGrow: 1,
    width: 18.61538314819336,
    height: 18.61538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.6922607421875,
    top: 1.69232177734375
  },
  View_I0_636_0_5444: {
    flexGrow: 1,
    width: 18.61538314819336,
    height: 18.61538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.6922607421875,
    top: 1.69232177734375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_636_0_5444_0_5689: {
    flexGrow: 1,
    width: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_637: {
    width: 114,
    minWidth: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83,
    top: 18.5999755859375
  },
  Text_0_637: {
    color: "rgba(205, 205, 215, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_638: {
    width: 1,
    minWidth: 1,
    height: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 10,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_639: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_639_0_5242: {
    flexGrow: 1,
    width: 20.30769157409668,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84619140625,
    top: 2.5384521484375
  },
  View_I0_639_0_5244: {
    flexGrow: 1,
    width: 20.30769157409668,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84619140625,
    top: 2.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_639_0_5244_0_5689: {
    flexGrow: 1,
    width: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_640: {
    flexGrow: 1,
    width: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_641: {
    width: 375,
    height: 72,
    top: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_642: {
    flexGrow: 1,
    width: 375,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_642_0_5763: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_642_0_5764: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_642_0_5764_0_5326: {
    flexGrow: 1,
    width: 3.8461532592773438,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.076904296875,
    top: 1.923095703125
  },
  View_I0_642_0_5764_0_5328: {
    flexGrow: 1,
    width: 3.8461532592773438,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.076904296875,
    top: 1.923095703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_642_0_5764_0_5328_0_4963: {
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
  View_I0_642_0_5765: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 275,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_642_0_5765_0_5151: {
    flexGrow: 1,
    width: 16.06827163696289,
    height: 16.098146438598633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.923095703125
  },
  View_I0_642_0_5765_0_5152: {
    flexGrow: 1,
    width: 16.06827163696289,
    height: 16.098146438598633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.923095703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_642_0_5765_0_5152_0_4963: {
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
  View_I0_642_0_5766: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_642_0_5766: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_642_0_5768: {
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
  ImageBackground_I0_642_0_5768_0_5265: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625
  },
  View_I0_642_0_5768_0_5266: {
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
  View_I0_642_0_5768_0_5266_0_4963: {
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
  View_0_643: {
    width: 158,
    minWidth: 158,
    height: 41.79999923706055,
    minHeight: 41.79999923706055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 18
  },
  View_0_644: {
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 19.800048828125
  },
  Text_0_644: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_645: {
    width: 107,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 2.5999755859375
  },
  Text_0_645: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_646: {
    width: 36,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_647: {
    width: 13,
    height: 13,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25
  },
  View_0_650: {
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
  View_I0_650_0_5913: {
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
  View_0_651: {
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
  View_I0_651_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_651_0_5884: {
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
  ImageBackground_I0_651_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_651_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_651_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.6937255859375,
    top: 17.3306884765625
  },
  ImageBackground_I0_651_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 17.6666259765625
  },
  View_I0_651_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_651_0_5896: {
    color: "rgba(34, 36, 42, 1)",
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
