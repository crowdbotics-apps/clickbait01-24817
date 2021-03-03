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
      <View style={styles.View_0_531} />
      <View style={styles.View_0_532}>
        <View style={styles.View_0_533}>
          <View style={styles.View_I0_533_0_5763} />
          <View style={styles.View_I0_533_0_5764}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89aa/357f/06a0261f6a306dc88061420bd0c7425b"
              }}
              style={styles.ImageBackground_I0_533_0_5764_0_5326}
            />
            <View style={styles.View_I0_533_0_5764_0_5328}>
              <View style={styles.View_I0_533_0_5764_0_5328_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_533_0_5766}>
            <Text style={styles.Text_I0_533_0_5766}> </Text>
          </View>
          <View style={styles.View_I0_533_0_5768}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356f/d3a4/54158a0a2323fa83fa7cf77c2dcb2103"
              }}
              style={styles.ImageBackground_I0_533_0_5768_0_5265}
            />
            <View style={styles.View_I0_533_0_5768_0_5266}>
              <View style={styles.View_I0_533_0_5768_0_5266_0_4963} />
            </View>
          </View>
        </View>
        <View style={styles.View_0_534}>
          <View style={styles.View_0_535}>
            <Text style={styles.Text_0_535}>36 participantes</Text>
          </View>
          <View style={styles.View_0_536}>
            <Text style={styles.Text_0_536}>Designers</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b6c/efdc/71ed1ee7549f12c00fad3dc766a361dd"
            }}
            style={styles.ImageBackground_0_537}
          />
        </View>
      </View>
      <View style={styles.View_0_542}>
        <View style={styles.View_0_543}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6053/b1d7/e3fa6e567cfb56ff310f5f2652da4144"
            }}
            style={styles.ImageBackground_0_544}
          />
          <View style={styles.View_0_545}>
            <View style={styles.View_0_546} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d439/a06f/53259fbf2527fdea174f95d22fb30f6e"
              }}
              style={styles.ImageBackground_0_547}
            />
            <View style={styles.View_0_548}>
              <Text style={styles.Text_0_548}>Back where I belong</Text>
            </View>
          </View>
          <View style={styles.View_0_549}>
            <Text style={styles.Text_0_549}>🔥</Text>
          </View>
          <View style={styles.View_0_550}>
            <Text style={styles.Text_0_550}>Landon Johnson</Text>
          </View>
          <View style={styles.View_0_551}>
            <Text style={styles.Text_0_551}>20:14</Text>
          </View>
        </View>
        <View style={styles.View_0_552}>
          <Text style={styles.Text_0_552}>27 JUL</Text>
        </View>
        <View style={styles.View_0_553}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b505/eb2c/df42549b481296254a7377c82abccc14"
            }}
            style={styles.ImageBackground_0_554}
          />
          <View style={styles.View_0_555}>
            <View style={styles.View_0_556} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d439/a06f/53259fbf2527fdea174f95d22fb30f6e"
              }}
              style={styles.ImageBackground_0_557}
            />
            <View style={styles.View_0_558}>
              <Text style={styles.Text_0_558}>Sounds good</Text>
            </View>
          </View>
          <View style={styles.View_0_559}>
            <Text style={styles.Text_0_559}>Helena Barnes</Text>
          </View>
          <View style={styles.View_0_560}>
            <Text style={styles.Text_0_560}>20:14</Text>
          </View>
        </View>
        <View style={styles.View_0_561}>
          <View style={styles.View_0_562}>
            <View style={styles.View_0_563} />
            <View style={styles.View_0_564}>
              <View style={styles.View_0_565}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8341/331c/29314b767e7c2947a9dbe136f29f2d99"
                  }}
                  style={styles.ImageBackground_I0_565_0_5675}
                />
                <View style={styles.View_I0_565_0_5677}>
                  <View style={styles.View_I0_565_0_5677_0_5685} />
                </View>
              </View>
            </View>
            <View source={{ uri: "null" }} style={styles.View_0_566} />
            <View style={styles.View_0_567}>
              <Text style={styles.Text_0_567}>Deal!</Text>
            </View>
            <View style={styles.View_0_568}>
              <Text style={styles.Text_0_568}>20:12</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b279/0ce6/5aafe081cc8705a1a0acea440e5db704"
            }}
            style={styles.ImageBackground_0_569}
          />
        </View>
        <View style={styles.View_0_570}>
          <View style={styles.View_0_571}>
            <View style={styles.View_0_572} />
            <View style={styles.View_0_573}>
              <Text style={styles.Text_0_573}>
                I just love the Telegram redesign!
              </Text>
            </View>
          </View>
          <View style={styles.View_0_574}>
            <Text style={styles.Text_0_574}>Landon Johnson</Text>
          </View>
        </View>
        <View style={styles.View_0_575}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6053/b1d7/e3fa6e567cfb56ff310f5f2652da4144"
            }}
            style={styles.ImageBackground_0_576}
          />
          <View style={styles.View_0_577}>
            <View style={styles.View_0_578} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d439/a06f/53259fbf2527fdea174f95d22fb30f6e"
              }}
              style={styles.ImageBackground_0_579}
            />
            <View style={styles.View_0_580}>
              <Text style={styles.Text_0_580}>😍😍😍</Text>
            </View>
          </View>
          <View style={styles.View_0_581}>
            <Text style={styles.Text_0_581}>19:20</Text>
          </View>
        </View>
        <View style={styles.View_0_582}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3724/f08b/3db7d09adf287f82267c63096492c7bc"
            }}
            style={styles.ImageBackground_0_583}
          />
          <View style={styles.View_0_584}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b0d/32fd/e3b84fd9f72088a173e1c336db6d57b8"
              }}
              style={styles.ImageBackground_I0_584_0_5079}
            />
            <View style={styles.View_I0_584_0_5080}>
              <View style={styles.View_I0_584_0_5080_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_585}>
        <View style={styles.View_0_586} />
        <View style={styles.View_0_587}>
          <View style={styles.View_0_588} />
          <View style={styles.View_0_589}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc92/5203/c0c6900a47000801e4057ae94348a9dc"
              }}
              style={styles.ImageBackground_I0_589_0_5504}
            />
            <View style={styles.View_I0_589_0_5505}>
              <View style={styles.View_I0_589_0_5505_0_5695} />
            </View>
          </View>
          <View style={styles.View_0_590} />
          <View style={styles.View_0_591}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed62/7c76/f1d1d1d95fa5092138108b069874cb77"
              }}
              style={styles.ImageBackground_I0_591_0_5441}
            />
            <View style={styles.View_I0_591_0_5444}>
              <View style={styles.View_I0_591_0_5444_0_5689} />
            </View>
          </View>
          <View style={styles.View_0_592}>
            <Text style={styles.Text_0_592}>Type a message</Text>
          </View>
          <View style={styles.View_0_593} />
          <View style={styles.View_0_594}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd99/96be/c402f17257fc553faf503de351ccddc1"
              }}
              style={styles.ImageBackground_I0_594_0_5242}
            />
            <View style={styles.View_I0_594_0_5244}>
              <View style={styles.View_I0_594_0_5244_0_5689} />
            </View>
          </View>
          <View style={styles.View_0_595} />
        </View>
      </View>
      <View style={styles.View_0_596}>
        <View style={styles.View_I0_596_0_5913} />
      </View>
      <View style={styles.View_0_597}>
        <View style={styles.View_I0_597_0_5883}>
          <View style={styles.View_I0_597_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_597_0_5885}
          />
          <View style={styles.View_I0_597_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_597_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_597_0_5893}
        />
        <View style={styles.View_I0_597_0_5896}>
          <Text style={styles.Text_I0_597_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_531: {
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
  View_0_532: {
    width: 375,
    height: 72,
    top: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_533: {
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
  View_I0_533_0_5763: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_533_0_5764: {
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
  ImageBackground_I0_533_0_5764_0_5326: {
    flexGrow: 1,
    width: 3.8461532592773438,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.076904296875,
    top: 1.923095703125
  },
  View_I0_533_0_5764_0_5328: {
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
  View_I0_533_0_5764_0_5328_0_4963: {
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
  View_I0_533_0_5766: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_533_0_5766: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_533_0_5768: {
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
  ImageBackground_I0_533_0_5768_0_5265: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625
  },
  View_I0_533_0_5768_0_5266: {
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
  View_I0_533_0_5768_0_5266_0_4963: {
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
  View_0_534: {
    width: 149,
    minWidth: 149,
    height: 41.79999923706055,
    minHeight: 41.79999923706055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 18
  },
  View_0_535: {
    width: 98,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 19.800048828125
  },
  Text_0_535: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_536: {
    width: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 2.5999755859375
  },
  Text_0_536: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_537: {
    width: 36,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_542: {
    flexGrow: 1,
    width: 345,
    height: 566,
    minHeight: 566,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 130.800048828125
  },
  View_0_543: {
    width: 233,
    minWidth: 233,
    height: 148,
    minHeight: 148,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 418
  },
  ImageBackground_0_544: {
    width: 36,
    height: 36,
    top: 81.20001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_545: {
    width: 197,
    height: 42,
    top: 75.20001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36
  },
  View_0_546: {
    width: 187,
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
  ImageBackground_0_547: {
    width: 10,
    height: 10,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_548: {
    width: 147,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 12.5999755859375
  },
  Text_0_548: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_549: {
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 23.20001220703125
  },
  Text_0_549: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_550: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_0_550: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_551: {
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 126
  },
  Text_0_551: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_552: {
    width: 38,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 153.5,
    top: 380.20001220703125
  },
  Text_0_552: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_553: {
    width: 174,
    minWidth: 174,
    height: 91,
    minHeight: 91,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 274
  },
  ImageBackground_0_554: {
    width: 36,
    height: 36,
    top: 24.20001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_555: {
    width: 138,
    height: 42,
    top: 18.20001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36
  },
  View_0_556: {
    width: 128,
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
  ImageBackground_0_557: {
    width: 10,
    height: 10,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_558: {
    width: 94,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 12.5999755859375
  },
  Text_0_558: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_559: {
    width: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_0_559: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_560: {
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 69
  },
  Text_0_560: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_561: {
    width: 155,
    minWidth: 155,
    height: 72.80000305175781,
    minHeight: 72.80000305175781,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 190,
    top: 181.20001220703125
  },
  View_0_562: {
    width: 119,
    height: 72.80000305175781,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_563: {
    width: 84,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    backgroundColor: "rgba(100, 120, 211, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10
  },
  View_0_564: {
    width: 15,
    height: 15,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_565: {
    width: 15,
    height: 15,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_565_0_5675: {
    flexGrow: 1,
    width: 12.69230842590332,
    height: 12.69230842590332,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.15386962890625,
    top: 1.15386962890625
  },
  View_I0_565_0_5677: {
    flexGrow: 1,
    width: 12.69230842590332,
    height: 12.69230842590332,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.15386962890625,
    top: 1.15386962890625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_565_0_5677_0_5685: {
    flexGrow: 1,
    width: 15,
    height: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(239, 75, 95, 1)"
  },
  View_0_566: {
    width: 10,
    height: 10,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109
  },
  View_0_567: {
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 12.5999755859375
  },
  Text_0_567: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_568: {
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 50.79998779296875
  },
  Text_0_568: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_569: {
    width: 36,
    height: 36,
    top: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119
  },
  View_0_570: {
    width: 186,
    minWidth: 186,
    height: 82.19999694824219,
    minHeight: 82.19999694824219,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 0
  },
  View_0_571: {
    width: 186,
    minWidth: 186,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18.199951171875
  },
  View_0_572: {
    width: 186,
    minWidth: 186,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  View_0_573: {
    width: 156,
    minWidth: 156,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 12.5999755859375
  },
  Text_0_573: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_574: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 0
  },
  Text_0_574: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_575: {
    width: 146,
    minWidth: 146,
    height: 72.80000305175781,
    minHeight: 72.80000305175781,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 92.199951171875
  },
  ImageBackground_0_576: {
    width: 36,
    height: 36,
    top: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_577: {
    width: 110,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36
  },
  View_0_578: {
    width: 100,
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
  ImageBackground_0_579: {
    width: 10,
    height: 10,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_580: {
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 11
  },
  Text_0_580: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_581: {
    width: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 50.800048828125
  },
  Text_0_581: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_582: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 318,
    top: 300.20001220703125
  },
  ImageBackground_0_583: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_584: {
    width: 12,
    height: 12,
    top: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_584_0_5079: {
    flexGrow: 1,
    width: 10.615106582641602,
    height: 9.692489624023438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.4615478515625,
    top: 1.3846435546875
  },
  View_I0_584_0_5080: {
    flexGrow: 1,
    width: 10.615106582641602,
    height: 9.692489624023438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.4615478515625,
    top: 1.3846435546875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_584_0_5080_0_5681: {
    flexGrow: 1,
    width: 12,
    height: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_585: {
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
  View_0_586: {
    width: 375,
    height: 74,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_587: {
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
  View_0_588: {
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
  View_0_589: {
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
  ImageBackground_I0_589_0_5504: {
    flexGrow: 1,
    width: 17.774253845214844,
    height: 16.932104110717773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5384521484375,
    top: 2.5384521484375
  },
  View_I0_589_0_5505: {
    flexGrow: 1,
    width: 17.774253845214844,
    height: 16.932104110717773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5384521484375,
    top: 2.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_589_0_5505_0_5695: {
    flexGrow: 1,
    width: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_0_590: {
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
  View_0_591: {
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
  ImageBackground_I0_591_0_5441: {
    flexGrow: 1,
    width: 18.61538314819336,
    height: 18.61538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.69232177734375,
    top: 1.69232177734375
  },
  View_I0_591_0_5444: {
    flexGrow: 1,
    width: 18.61538314819336,
    height: 18.61538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.69232177734375,
    top: 1.69232177734375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_591_0_5444_0_5689: {
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
  View_0_592: {
    width: 114,
    minWidth: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83,
    top: 18.5999755859375
  },
  Text_0_592: {
    color: "rgba(205, 205, 215, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_593: {
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
  View_0_594: {
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
  ImageBackground_I0_594_0_5242: {
    flexGrow: 1,
    width: 20.30769157409668,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84619140625,
    top: 2.5384521484375
  },
  View_I0_594_0_5244: {
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
  View_I0_594_0_5244_0_5689: {
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
  View_0_595: {
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
  View_0_596: {
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
  View_I0_596_0_5913: {
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
  View_0_597: {
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
  View_I0_597_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_597_0_5884: {
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
  ImageBackground_I0_597_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_597_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_597_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.6937255859375,
    top: 17.3306884765625
  },
  ImageBackground_I0_597_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 17.6666259765625
  },
  View_I0_597_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_597_0_5896: {
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
